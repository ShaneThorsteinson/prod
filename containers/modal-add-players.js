import Button from 'components/ui/button'
import Input from 'components/ui/input'
import List from 'components/ui/list'
import Modal from 'components/ui/modal'
import User from 'components/user'
import ApiService from 'helpers/api-service'
import IconCrosshair from 'icons/crosshair'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

export default function ModalAddPlayers ({ title, team, onClose = f => f, onSuccess = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const [queryValue, setQueryValue] = useState('')
  const [users, setUsers] = useState([])
  const [maxUsers, setMaxUsers] = useState(0)
  const [selectedUsers, setSelectedUsers] = useState([])

  const queryClient = useQueryClient()

  const handleSelect = user => {
    return () => {
      if (selectedUsers.find(item => item.id === user.id)) {
        setSelectedUsers(selectedUsers.filter(item => item.id !== user.id))
        return
      }
      if (maxUsers - selectedUsers.length <= 0) {
        return
      }
      setSelectedUsers([...selectedUsers, user])
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
    const userIds = selectedUsers.map(item => item.id)
    ApiService.addUsersToTeam(team.id, userIds)
      .then(() => {
        queryClient.refetchQueries(['team', { id: team.id }])
        onClose()
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (team?.players) {
      setMaxUsers(5 - team.players.length)
    }
  }, [team])

  useEffect(() => {
    setIsLoading(true)
    ApiService.searchUsers(queryValue, { exclude: team.players.map(item => item.userId).join(',') })
      .then(setUsers)
      .finally(() => setIsLoading(false))
  }, [queryValue])

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={16} />}
        iconClass="text-primary-500"
        title="Add player(s) to your team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        {maxUsers === 0 && <div className="mb-4 font-roboto text-primary-500 text-center">You have reached the limit for adding teammates</div>}
        {maxUsers > 0 && <div className="mb-4 font-roboto text-primary-500 text-center">You can add {maxUsers} more teammate(s)</div>}

        <form>
          <Input
            placeholder="Search player..."
            onChange={e => setQueryValue(e.target.value)}
            value={queryValue}
          />
        </form>

        <div className="mt-4 pr-1 max-h-[320px] overflow-auto custom-scroll overscroll-contain">
          <List>
            {users.map(user => (
              <List.Item
                key={user.id}
                isSelected={selectedUsers.find(item => item.id === user.id)}
                onClick={handleSelect(user)}
              >
                <User
                  user={user}
                  status="offline"
                />
              </List.Item>
            ))}
          </List>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          loading={isLoading}
          onClick={handleSubmit}
          disabled={selectedUsers.length === 0}
        >Add selected player(s)
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
