import clsx from 'clsx'
import IconLockKey from 'icons/lock-key'

export default function TeamLogo ({ image, className, isSelected = false, isLocked = false, ...props }) {
  const classes = clsx('team-logo', {
    'team-logo--locked': isLocked,
    'team-logo--selected': isSelected
  }, className)

  return (
    <div className={classes} {...props}>
      <div className="team-logo__image">
        <img src={image ?? '/assets/images/agent-default.svg'} alt="" />
      </div>
      {isLocked && (
        <>
          <div className="team-logo__lock">
            <IconLockKey />
          </div>
          <div className="team-logo__premium-text">
            Available for Premium users only
          </div>
        </>
      )}
    </div>
  )
}
