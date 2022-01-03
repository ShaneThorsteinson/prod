import TeamMatchResult from 'components/team/team-match-result'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconGameController from 'icons/game-controller'
import { useEffect, useState } from 'react'
import Message from 'components/ui/message/message'
import { useAuth } from 'hooks/use-auth'
import ApiService from 'helpers/api-service'
import { useQuery, useQueryClient } from 'react-query'

const getFromTeamId = (userId, teamA, teamB) => {
  if (teamA.players.find(item => item.userId === userId)) {
    return teamA.id
  }

  if (teamB.players.find(item => item.userId === userId)) {
    return teamB.id
  }

  return null
}

const getToTeamId = (userId, teamA, teamB) => {
  if (!teamA.players.find(item => item.userId === userId)) {
    return teamA.id
  }

  if (!teamB.players.find(item => item.userId === userId)) {
    return teamB.id
  }

  return null
}

export default function ModalFinalizeMatch ({ match, score, onClose = f => f, onCompleted = f => f, ...props }) {
  const queryClient = useQueryClient()
  const [status, setStatus] = useState(null)
  const [scoreId, setScoreId] = useState(null)
  const [timeoutSeconds, setTimeoutSeconds] = useState(0)
  const { user } = useAuth()

  const { data: scoreData } = useQuery('score', () => ApiService.getMatchScore(scoreId), {
    cacheTime: 0,
    retry: false,
    refetchInterval: 1000,
    enabled: !!scoreId
  })

  const refetchMatch = async () => {
    return queryClient.refetchQueries(['match', { id: match.id }])
  }

  const handleFinalize = async () => {
    setStatus('waiting')
    setTimeoutSeconds(120)

    ApiService.addMatchScore({
      matchId: match.id,
      fromTeamId: getFromTeamId(user.id, match.teamA, match.teamB),
      toTeamId: getToTeamId(user.id, match.teamA, match.teamB),
      score: {
        teamA: score[0],
        teamB: score[1]
      }
    })
      .then(data => {
        setScoreId(data.id)
      })
  }

  useEffect(() => {
    if (!scoreData?.status || scoreData.status === 'waiting' || scoreId === null) {
      return
    }

    if (scoreData.status === 'accepted') {
      refetchMatch()
    }

    setScoreId(null)
    setStatus(scoreData.status)
    setTimeoutSeconds(0)
  }, [scoreData])

  useEffect(() => {
    if (!timeoutSeconds || timeoutSeconds <= 0) {
      setScoreId(null)
      return
    }
    setTimeout(() => setTimeoutSeconds(timeoutSeconds - 1), 1000)
  }, [timeoutSeconds])

  const handleClose = () => {
    if (status === 'waiting') {
      return
    }
    onClose()
  }

  return (
    <Modal width={600} onClose={handleClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController size={16} />}
        iconClass="text-primary-500"
        title="Are you sure you want to finalize the match?"
        description="Final result of match is:"
        className="mb-[18px]"
      />
      <Modal.Body>
        <TeamMatchResult
          teamA={match.teamA}
          teamB={match.teamB}
          score={score}
        />
        <div className="mt-4 text-white text-center">
          {status === 'waiting' && <Message className="mt-4">Wait for a response from your opponent. ({timeoutSeconds})</Message>}
          {status === 'rejected' && <Message type="error" className="mt-4">Your opponent does not agree with the result of the match. You can discuss all your disagreements in the chat room.</Message>}
          {status === 'accepted' && <Message type="success" className="mt-4">The match is successfully completed</Message>}
        </div>
      </Modal.Body>
      {(!status || status === 'waiting') && (
        <Modal.Footer className="justify-between">
          <Button
            onClick={onClose}
            outlined
            disabled={status === 'waiting'}
          >Cancel
          </Button>
          <Button
            shined
            onClick={handleFinalize}
            loading={status === 'waiting'}
          >yes, finalize the match
          </Button>
        </Modal.Footer>
      )}
      {(status === 'rejected' || status === 'accepted') && (
        <Modal.Footer className="justify-center">
          <Button
            shined
            onClick={onClose}
          >Back to the match
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  )
}
