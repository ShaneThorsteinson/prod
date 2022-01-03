import clsx from 'clsx'
import RankDivision from 'components/ui/rank-division'
import ModalTeamInfo from 'containers/modal-team-info'
import { useState } from 'react'

const TeamItem = ({ name, logo, division, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center flex-col cursor-pointer"
    >
      <div className="w-[70px] h-[70px]">
        <img src={logo ?? '/assets/images/agent-default.svg'} alt="" />
      </div>

      <div className="font-semibold text-white">{name}</div>
      <RankDivision className="mt-1" size="small" division={division} />
    </div>
  )
}

export default function TeamCardMatchMini ({ teamA, teamB, score, className, ...props }) {
  const [showModalTeamInfo, setShowModalTeamInfo] = useState(false)
  const classes = clsx('team-card-match-mini', className)

  return (
    <>
      {showModalTeamInfo && (
        <ModalTeamInfo
          logo="/demo/agents-logo-8.png"
          name="Los Angeles Guerillas"
          onClose={() => setShowModalTeamInfo(false)}
        />
      )}
      <div className={classes} {...props}>
        <TeamItem
          onClick={() => setShowModalTeamInfo(true)}
          {...teamA}
        />

        <div className="team-card-match-mini__score">
          <span className="text-success-500">{score.teamA}</span>
          <span>:</span>
          <span className="text-primary-500">{score.teamB}</span>
        </div>

        <TeamItem
          onClick={() => setShowModalTeamInfo(true)}
          {...teamB}
        />
      </div>
    </>
  )
}
