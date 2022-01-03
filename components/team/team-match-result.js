import clsx from 'clsx'
import RankDivision from 'components/ui/rank-division'

const TeamItem = ({ team }) => {
  return (
    <div
      className="flex items-center flex-col"
    >
      <div className="w-[70px] h-[70px]">
        <img src={team.logo ?? '/assets/images/agent-default.svg'} alt="" />
      </div>

      <div className="font-semibold text-white">{team.name}</div>
      <RankDivision className="mt-1" size="small" division={team.division} />
    </div>
  )
}

export default function TeamMatchResult ({ teamA, teamB, score = [0, 0], className, ...props }) {
  const classes = clsx('team-match-result', className)

  return (
    <>
      <div className={classes} {...props}>
        <TeamItem
          team={teamA}
        />

        <div className="team-card-match-mini__score">
          <span className={score[0] >= score[1] ? 'text-success-500' : 'text-primary-500'}>{score[0]}</span>
          <span>:</span>
          <span className={score[1] >= score[0] ? 'text-success-500' : 'text-primary-500'}>{score[1]}</span>
        </div>

        <TeamItem
          team={teamB}
        />
      </div>
    </>
  )
}
