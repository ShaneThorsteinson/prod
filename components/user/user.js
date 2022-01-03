import clsx from 'clsx'
import PropTypes from 'prop-types'
import Avatar from 'components/ui/avatar'
import Label from 'components/ui/label'

const getUserName = user => {
  if (user?.activisionId) {
    return user.activisionId
  }

  return user.name
}

export default function User ({ user, className, status = null, isCaptain = false, ...props }) {
  const classes = clsx('flex items-center space-x-2', className)

  return (
    <div className={classes} {...props}>
      <Avatar
        status={status}
        size={25}
        image={user.image}
        isCaptain={isCaptain}
      />
      <span className="font-roboto text-gray-500">{getUserName(user)}</span>
      {isCaptain && <Label.Captain />}
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  isCaptain: PropTypes.bool
}
