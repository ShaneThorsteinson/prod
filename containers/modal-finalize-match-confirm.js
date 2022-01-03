import TeamMatchResult from 'components/team/team-match-result'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconGameController from 'icons/game-controller'
import ApiService from 'helpers/api-service'
import { useMutation, useQueryClient } from 'react-query'

export default function ModalFinalizeMatchConfirm ({ data, match, onClose = f => f, onCompleted = f => f, ...props }) {
  const queryClient = useQueryClient()
  const { mutateAsync: asyncAccept, isLoading: isLoadingAccept } = useMutation(() => ApiService.acceptMatchScore(data.id))
  const { mutateAsync: asyncReject, isLoading: isLoadingReject } = useMutation(() => ApiService.rejectMatchScore(data.id))

  const refetchMatch = async () => {
    return queryClient.refetchQueries(['match', { id: data.matchId }])
  }

  const handleAccept = async () => {
    asyncAccept()
      .then(() => {
        refetchMatch()
        onClose()
      })
  }

  const handleReject = async () => {
    asyncReject()
      .then(() => {
        onClose()
      })
  }

  return (
    <Modal width={600} onClose={handleReject} shined {...props}>
      <Modal.Header
        icon={<IconGameController size={16} />}
        iconClass="text-primary-500"
        title="Request to end a match"
        description="If you agree with the results of the match click accept or reject otherwise"
        className="mb-[18px]"
      />
      <Modal.Body>
        <TeamMatchResult
          teamA={match.teamA}
          teamB={match.teamB}
          score={[data.score.teamA, data.score.teamB]}
        />
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button
          onClick={handleReject}
          outlined
          disabled={isLoadingAccept}
          loading={isLoadingReject}
        >Reject
        </Button>
        <Button
          shined
          onClick={handleAccept}
          loading={isLoadingAccept}
          disabled={isLoadingReject}
        >Accept
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
