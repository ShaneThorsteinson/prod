import clsx from 'clsx'
import TeamCard from 'components/team/team-card'

export default function TeamList ({ items = [], className, ...props }) {
  const classes = clsx('gap-4 grid md:grid-cols-2 lg:grid-cols-4', className)
  return (
    <div className={classes} {...props}>
      {items.map(({ team, stats, isCaptain }, index) =>
        <TeamCard
          key={team.id ?? index}
          team={team}
          stats={stats}
          isCaptain={isCaptain}
        />)}
    </div>
  )
}
