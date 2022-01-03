import clsx from 'clsx'

const LabelStats = ({ icon, className, w = null, l = null, g = null, rounded = false, ...props }) => {
  const classes = clsx('ui-label-stats space-x-1', {
    'ui-label-stats--rounded': rounded
  }, className)

  return (
    <div className={classes} {...props}>
      {icon && <span className="ui-label-stats__icon">{icon}</span>}
      {w !== null && <span className="ui-label-stats__w">W:{w}</span>}
      {l !== null && <span className="ui-label-stats__l">L:{l}</span>}
      {g !== null && <span className="ui-label-stats__p">G:{g}</span>}
    </div>
  )
}

export default LabelStats
