import clsx from 'clsx'

const RankDivision = ({ division, className, size, ...props }) => {
  const name = {
    gold: 'Gold division',
    iron: 'Iron division',
    master: 'Masters division',
    bronze: 'Bronze division',
    platinum: 'Platinum division',
    silver: 'Silver division'
  }
  const classes = clsx('ui-rank-division', {
    'ui-rank-division--sm': size === 'small',
    'ui-rank-division--lg': size === 'large'
  }, className)

  return (
    <div className={classes} {...props}>
      <span className="ui-rank-division__icon">
        <img src={`/assets/images/divisions/${division}.svg`} alt={division} />
      </span>
      <span className="ui-rank-division__name">{name[division] ?? division}</span>
    </div>
  )
}

export default RankDivision
