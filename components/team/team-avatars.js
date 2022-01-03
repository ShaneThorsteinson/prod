import t from 'prop-types'
import Avatar from 'components/ui/avatar'
import Tooltip from 'components/ui/tooltip'

export default function TeamAvatars ({ users, ...props }) {
  return (
    <Avatar.Group {...props}>
      {users.map(({ user, isCaptain }) => (
        <Tooltip
          key={user.id}
          content={user?.activisionId || user.name}
        >
          <Avatar image={user.image} isCaptain={isCaptain} />
        </Tooltip>
      ))}
    </Avatar.Group>
  )
}

TeamAvatars.propTypes = {
  users: t.arrayOf(t.shape({
    user: t.object.isRequired
  }))
    .isRequired
}
