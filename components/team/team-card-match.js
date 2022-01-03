import clsx from 'clsx'
import OnlineChat from 'components/online-chat/online-chat'
import Button from 'components/ui/button'
import RankDivision from 'components/ui/rank-division'
import ModalFinalizeMatch from 'containers/modal-finalize-match'
import ModalLeavingMatch from 'containers/modal-leaving-match'
import ModalMatchRules from 'containers/modal-match-rules'
import ModalReportProblem from 'containers/modal-report-problem'
import ModalTeamInfo from 'containers/modal-team-info'
import ModalTeamRequests from 'containers/modal-team-requests'
import IconArrowLeft from 'icons/arrow-left'
import IconChatCircleDots from 'icons/chat-circle-dots'
import IconFlag from 'icons/flag'
import IconMinus from 'icons/minus'
import IconPlus from 'icons/plus'
import TeamAvatars from 'components/team/team-avatars'
import { useState, useEffect } from 'react'
import Message from 'components/ui/message'
import useSocket from 'hooks/use-socket'
import ModalFinalizeMatchConfirm from 'containers/modal-finalize-match-confirm'

const TeamItem = ({ team, onClickRequests, className, specialRequests = null, ...props }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showModalTeamRequests, setShowModalTeamRequests] = useState(false)
  const classes = clsx('team-card-match__team space-y-2', className)

  const handleClickRequests = () => {
    setShowModalTeamRequests(true)
  }

  return (
    <>
      {showModalTeamRequests && <ModalTeamRequests specialRequests={specialRequests} onClose={() => setShowModalTeamRequests(false)} />}
      {showInfo && (
        <ModalTeamInfo
          team={team}
          onClose={() => setShowInfo(false)}
        />
      )}

      <div className={classes} {...props}>
        <div className="w-[100px] h-[100px]">
          <img src={team.logo ?? '/assets/images/agent-default.svg'} alt="" />
        </div>
        <div
          onClick={() => setShowInfo(true)}
          className="font-semibold cursor-pointer text-white text-xl text-center"
        >{team.name}
        </div>
        <RankDivision division={team.division} />
        <TeamAvatars users={team.players} />
        {specialRequests
          ? <div onClick={handleClickRequests} className="text-success-500 text-sm cursor-pointer">see requests</div>
          : <div className="italic text-sm text-[#868698]">no requests</div>}
      </div>
    </>
  )
}

const MatchScore = ({ matchStatus, onChange, initialValue, className, ...props }) => {
  const classes = clsx('team-card-match__result', className)
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
        <div className="team-card-match__score">
          {matchStatus === 'active' && (
            <>
              <span className="team-card-match__score-inc">
                <Button
                  onClick={handleChange(0, 1)}
                  className="px-4"
                  size="small"
                  type="accent"
                ><IconPlus />
                </Button>
              </span>
              <span className="team-card-match__score-dec">
                <Button
                  onClick={handleChange(0, -1)}
                  className="px-4"
                  size="small"
                  type="secondary"
                >
                  <IconMinus />
                </Button>
              </span>
            </>
          )}
          <span className="team-card-match__score-val">{score[0]}</span>
        </div>
        <div className="team-card-match__score-sep">:</div>
        <div className="team-card-match__score">
          {matchStatus === 'active' && (
            <>
              <span className="team-card-match__score-inc">
                <Button
                  onClick={handleChange(1, 1)}
                  className="px-4"
                  size="small"
                  type="accent"
                ><IconPlus />
                </Button>
              </span>
              <span className="team-card-match__score-dec">
                <Button
                  onClick={handleChange(1, -1)}
                  className="px-4"
                  size="small"
                  type="secondary"
                >
                  <IconMinus />
                </Button>
              </span>
            </>
          )}
          <span className="team-card-match__score-val">{score[1]}</span>
        </div>
      </div>
    </>
  )
}

export default function TeamCardMatch ({ match, className, ...props }) {
  const [showModalMatchRules, setShowMatchRules] = useState(false)
  const [showModalLeavingMatch, setShowModalLeavingMatch] = useState(false)
  const [showModalFinalizeMatch, setShowModalFinalizeMatch] = useState(false)
  const [scoreConfirmData, setScoreConfirmData] = useState(null)
  const [showModalReportProblem, setShowModalReportProblem] = useState(false)
  const [visibleChat, setVisibleChat] = useState(false)
  const { status: matchStatus, teamA, teamB, specialRequests } = match

  const classes = clsx('team-card-match', className)
  const [score, setScore] = useState([match.score?.teamA ?? 0, match.score?.teamB ?? 0])
  const io = useSocket()

  useEffect(() => {
    io.on('finalize_match', res => {
      if (res.action === 'REQUEST') {
        setScoreConfirmData(res.payload)
      }
    })

    return () => {
      io.off('finalize_match')
    }
  }, [])

  return (
    <>
      {showModalMatchRules && <ModalMatchRules onClose={() => setShowMatchRules(false)} />}
      {showModalLeavingMatch && <ModalLeavingMatch onClose={() => setShowModalLeavingMatch(false)} />}
      {scoreConfirmData && (
        <ModalFinalizeMatchConfirm
          data={scoreConfirmData}
          match={match}
          onClose={() => setScoreConfirmData(null)}
        />
      )}
      {showModalFinalizeMatch && (
        <ModalFinalizeMatch
          match={match}
          score={score}
          onClose={() => setShowModalFinalizeMatch(false)}
        />
      )}

      {showModalReportProblem && <ModalReportProblem onClose={() => setShowModalReportProblem(false)} />}

      <OnlineChat
        matchId={match.id}
        isVisible={visibleChat}
        onToggleVisible={() => setVisibleChat(!visibleChat)}
      />

      <div className={classes} {...props}>
        <div className={`flex  ${matchStatus === 'active' ? 'justify-between' : 'justify-center'} items-center flex-wrap`}>
          {matchStatus === 'active' && (
            <Button.Link
              onClick={() => setShowModalLeavingMatch(true)}
              icon={<IconArrowLeft size={14} />}
              size="small"
              type="secondary"
            >Leave the match
            </Button.Link>
          )}

          <Button
            onClick={() => setShowMatchRules(true)}
            size="small"
            type="secondary"
            className={clsx('order-1 w-full md:order-none md:w-auto', { 'mt-4 md:mt-0': matchStatus === 'active' })}
            outlined
          >Match Rules
          </Button>

          {matchStatus === 'active' && (
            <Button.Link
              onClick={() => setShowModalReportProblem(true)}
              icon={<IconFlag />}
              size="small"
              type="secondary"
            >Report the problem
            </Button.Link>
          )}
        </div>
        <div className="mt-8 flex justify-around items-center flex-wrap">
          <TeamItem
            className="flex-1 md:flex-auto"
            team={teamA}
            specialRequests={specialRequests?.teamA}
          />

          <MatchScore
            matchStatus={matchStatus}
            className="order-1 w-full mt-14 md:w-auto md:order-none md:mt-0"
            onChange={setScore}
            initialValue={score}
          />

          <TeamItem
            className="flex-1 md:flex-auto"
            team={teamB}
            specialRequests={specialRequests.teamB}
          />
        </div>

        {matchStatus === 'completed' && (
          <Message type="success" className="mt-4">
            The match ended with a score of <strong>{match.score.teamA} : {match.score.teamB}</strong>
          </Message>
        )}

        <div className="mt-6 flex flex-col items-center space-y-2">
          {matchStatus === 'active' && (
            <Button
              onClick={() => setShowModalFinalizeMatch(true)}
              className="w-full max-w-[310px]"
              shined
            >Finalize match
            </Button>
          )}
          <Button
            onClick={() => setVisibleChat(!visibleChat)}
            className="w-full max-w-[310px]"
            iconRight={<IconChatCircleDots className="text-success-500" size={18} />}
            outlined
          >online chat
          </Button>
        </div>
      </div>
    </>
  )
}
