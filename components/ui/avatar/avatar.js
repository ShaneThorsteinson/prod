import clsx from 'clsx'

const Avatar = ({ image, size = 22, status, isCaptain = false, className }) => {
  const classes = clsx('ui-avatar', {
    'ui-avatar--size-xs': size === 'xs',
    'ui-avatar--size-sm': size === 'sm',
    'ui-avatar--size-md': size === 'md',
    'ui-avatar--size-lg': size === 'lg',
    'ui-avatar--size-xl': size === 'xl',
    'border-gold': isCaptain
  }, className)

  return (
    <div className={classes} style={{ fontSize: size }}>
      <div className="ui-avatar__img-wrap">
        {image ? <img src={image} /> : <img style={{ width: '0.6em', height: '0.6em' }} src="/assets/images/avatar.svg" alt="" />}
      </div>
      {status && (
        <span className={clsx('ui-avatar__status', {
          'ui-avatar__status--on': status === 'online',
          'ui-avatar__status--off': status === 'offline'
        })}
        />
      )}
    </div>
  )
}

export default Avatar
