import clsx from 'clsx'
import TeamAvatars from 'components/team/team-avatars'
import Button from 'components/ui/button'
import RankDivision from 'components/ui/rank-division'
import ApiService from 'helpers/api-service'
import useSocket from 'hooks/use-socket'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import IconMinus from 'icons/minus'
import IconPlus from 'icons/plus'
import ModalAlert from 'containers/modal-alert'
import IconGameController from 'icons/game-controller'
import { useAuth } from 'hooks/use-auth'
import OnlineChatTournament from 'components/online-chat/online-chat-tournament'
import Message from 'components/ui/message/message'

const WaitingTeam = () => {
  return (
    <div className="col-span-8 sm:col-span-3 inline-flex flex-col items-center justify-center w-full h-full space-y-2">
      <div className="w-[100px] h-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="97"
          height="100"
          fill="none"
          viewBox="0 0 97 110"
        >
          <path
            fill="#fff"
            d="M48.4 0l48.4 27.5v55L48.4 110 0 82.5v-55L48.4 0z"
            opacity="0.05"
          />
          <path
            fill="#232326"
            d="M48.949 22l29.15 16.5v33L48.949 88l-29.15-16.5v-33L48.949 22z"
          />
          <path
            fill="#fff"
            d="M47.85 21.999c-10.92 0-19.8 8.88-19.8 19.8a2.475 2.475 0 004.95 0c0-8.187 6.663-14.85 14.85-14.85s14.85 6.663 14.85 14.85c0 6.183-3.426 9.222-7.796 12.969l-.159.134c-4.252 3.648-9.37 8.033-9.37 16.597v2.475a2.475 2.475 0 004.95 0v-2.475c0-6.182 3.425-9.222 7.796-12.969l.158-.134c4.252-3.653 9.37-8.029 9.37-16.597 0-10.92-8.88-19.8-19.8-19.8zM47.85 91.299a3.712 3.712 0 100-7.425 3.712 3.712 0 000 7.425z"
          />
        </svg>
      </div>
      <div className="font-semibold text-white text-xl text-center mt-2">Waiting...</div>
    </div>
  )
}

const TeamItem = ({ team, className, specialRequests = null, ...props }) => {
  const classes = clsx('col-span-8 sm:col-span-3 inline-flex flex-col items-center justify-center w-full h-full space-y-2', className)
  return (
    <>
      <div className={classes} {...props}>
        <div className="w-[100px] h-[100px]">
          <img src={team.logo ?? '/assets/images/agent-default.svg'} alt="" />
        </div>
        <div
          className="font-semibold cursor-pointer text-white text-xl text-center"
        >{team.name}
        </div>
        <RankDivision division={team.division} />
        <TeamAvatars users={team.players} />
        {specialRequests
          ? <div className="text-success-500 text-sm cursor-pointer">see requests</div>
          : <div className="italic text-sm text-[#868698]">no requests</div>}
      </div>
    </>
  )
}

const MatchScore = ({ onChange = f => f, initialValue = [0, 0], className, ...props }) => {
  const classes = clsx(className)
  const [score, setScore] = useState(initialValue)

  const handleChange = (index, val) => () => {
    const newValue = score[index] + val
    if (newValue < 0 || newValue > 10) {
      return
    }

    const updated = [...score]
    updated[index] = newValue
    setScore(updated)

    if (onChange) {
      onChange(updated)
    }
  }

  return (
    <>
      <div className={classes} {...props}>
        <div className="team-card-match__score flex justify-center">
          <span className="team-card-match__score-inc flex">
            <Button
              onClick={handleChange(0, 1)}
              className="px-4"
              size="small"
              type="accent"
              disabled={score[0] >= 10}
            ><IconPlus />
            </Button>
          </span>
          <span className="team-card-match__score-dec flex">
            <Button
              onClick={handleChange(0, -1)}
              className="px-4"
              size="small"
              type="secondary"
              disabled={score[0] <= 0}
            >
              <IconMinus />
            </Button>
          </span>
          <span className="team-card-match__score-val">{score[0]}</span>
        </div>
        <div className="team-card-match__score-sep">:</div>
        <div className="team-card-match__score flex justify-center">
          <span className="team-card-match__score-inc flex">
            <Button
              onClick={handleChange(1, 1)}
              className="px-4"
              size="small"
              type="accent"
              disabled={score[1] >= 10}
            ><IconPlus />
            </Button>
          </span>
          <span className="team-card-match__score-dec flex">
            <Button
              onClick={handleChange(1, -1)}
              className="px-4"
              size="small"
              type="secondary"
              disabled={score[1] <= 0}
            >
              <IconMinus />
            </Button>
          </span>
          <span className="team-card-match__score-val">{score[1]}</span>
        </div>
      </div>
    </>
  )
}

export default function TournamentMatch ({ tournament, participant, myTeam }) {
  const io = useSocket()
  const [opponentTeam, setOpponentTeam] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const [scores, setScores] = useState([0, 0])
  const { data: matchData, mutate: getMatch } = useMutation(() => ApiService.getTournamentMatch(tournament.id))
  const { isLoading, mutateAsync: reportAsync } = useMutation((data) => ApiService.reportTournamentMatch(tournament.id, data))
  const [showNewOponentModal, setShowNewOponentModal] = useState(false)
  const [showReportedModal, setShowReportedModal] = useState(false)
  const [isMeCaptain, setIsMeCaptain] = useState(false)
  const { user } = useAuth()
  const [isVisibleChat, setIsVisibleChat] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (myTeam.players.find(item => user?.id === item.user.id && item.isCaptain)) {
      setIsMeCaptain(true)
    }
  }, [myTeam])

  useEffect(() => {
    getMatch()
    io.emit('tournament', tournament.id, myTeam.id)
    io.on('tournament_match_refetch', () => getMatch())
    io.on('tournament_oponent_joined', () => setShowNewOponentModal(true))
  }, [])

  useEffect(() => {
    if (matchData?.state === 'complete') {
      setIsFinished(true)
    }
    if (matchData?.opponent) {
      setOpponentTeam(matchData.opponent)
    }
  }, [matchData])

  const handleFinalize = () => {
    setMessage(null)
    reportAsync({
      matchId: matchData.id,
      teamId: participant.team.id,
      score: scores[0],
      opponentScore: scores[1]
    })
      .then((data) => {
        getMatch()
        if (data?.state === 'pending') {
          setShowReportedModal(true)
        }
      })
      .catch(err => setMessage(err.message))
  }

  if (isFinished) {
    return (
      <div className="text-white text-center mt-6">
        <div className="font-bold text-5xl">Finished</div>
        <div>Thank you for competing in this tournament</div>
        <div style={{
          marginTop: 24,
          marginBottom: -40,
          width: 88,
          height: 128,
          display: 'inline-block',
          background: 'url(/assets/images/tournament-past.svg)'
        }}></div>
      </div>
    )
  }

  return (
    <>
      {matchData?.id && (
        <OnlineChatTournament
          matchId={matchData.id}
          isVisible={isVisibleChat}
          onToggleVisible={() => setIsVisibleChat(!isVisibleChat)}
        />
      )}

      {showNewOponentModal && (
        <ModalAlert
          icon={<IconGameController size={18} />}
          title="New opponent is up"
          description="Tip: You can click on the opponent’s logo to view their  roster without leaving this page"
          onClose={() => setShowNewOponentModal(false)}
        />
      )}

      {showReportedModal && (
        <ModalAlert
          icon={<IconGameController size={18} />}
          title="Match reported"
          description="We are waiting for your opponent to also finalize this match. If they do not report in 2 minutes, your report will be processed automaticaly"
          onClose={() => setShowReportedModal(false)}
        />
      )}

      <div className="mt-8">
        <div className="inline-grid grid-cols-8 gap-y-10 sm:gap-x-10 flex-1 w-full h-full">
          <TeamItem
            team={myTeam}
          />

          {!opponentTeam && (
            <div className="col-span-8 sm:col-span-2 inline-flex w-full h-full font-bold text-5xl items-center justify-center px-20 text-white">VS</div>
          )}

          {opponentTeam && (
            <MatchScore
              className="col-span-8 sm:col-span-2 inline-flex w-full h-full font-bold text-5xl items-center justify-center"
              onChange={setScores}
            />
          )}

          {opponentTeam && (
            <TeamItem
              className="flex-1 md:flex-auto"
              team={opponentTeam}
            />
          )}
          {!opponentTeam && <WaitingTeam />}
        </div>

        {message && <Message className="mt-6" onClose={() => setMessage(null)}>{message}</Message>}

        <div className="mt-6">
          {!opponentTeam && (
            <Button
              type="primary"
              className="w-full"
              disabled
            >Waiting for the tournament to start</Button>
          )}
          {opponentTeam && isMeCaptain && (
            <Button
              type="primary"
              className="w-full"
              disabled={scores[0] === 0 && scores[1] === 0}
              onClick={handleFinalize}
              loading={isLoading}
            >Finalize the match</Button>
          )}
        </div>
      </div>
    </>
  )
}
