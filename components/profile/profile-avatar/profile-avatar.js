import clsx from 'clsx'
import IconCamera from 'icons/camera'

const ProfileAvatar = ({ src, className, onClickUpload = f => f }) => {
  const classes = clsx('profile-avatar', className)

  return (
    <div className="profile-avatar__wrap">
      <div className={classes}>
        <div className="profile-avatar__img-wrap">
          {src ? <img src={src} /> : <img style={{ width: '0.6em', height: '0.6em' }} src="/assets/images/avatar.svg" alt="" />}
        </div>
        <span className="profile-avatar__status" />
        <span onClick={onClickUpload} className="profile-avatar__upload">
          <IconCamera size={12} />
        </span>
      </div>
    </div>
  )
}

export default ProfileAvatar
