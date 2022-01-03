import Message from 'components/ui/message'
import Button from 'components/ui/button'
import { useMutation, useQueryClient } from 'react-query'
import ApiService from 'helpers/api-service'

export default function TeamInviteMessage ({ teamId, onClose = f => f }) {
  const queryClient = useQueryClient()
  const { mutateAsync: joinAsync, isLoading: isLoadingJoin } = useMutation(() => ApiService.joinTeam(teamId))
  const { mutateAsync: leaveAsync, isLoading: isLoadingLeave } = useMutation(() => ApiService.leaveTeam(teamId))

  const refetchTeam = async () => {
    return queryClient.refetchQueries(['team', { id: teamId }])
      .then(onClose)
  }

  const handleJoin = () => {
    joinAsync().then(refetchTeam)
  }

  const handleLeave = () => {
    leaveAsync().then(refetchTeam)
  }

  return (
    <Message type="warning" className="mt-4">
      <div className="flex justify-between flex-col lg:items-center lg:flex-row">
        <div>
          You were invited to join this team
        </div>
        <div className="flex flex-col space-x-0 space-y-2 mt-2 items-start md:flex-row md:space-y-0 md:space-x-2 lg:mt-0">
          <Button
            onClick={handleJoin}
            className="w-full md:w-auto"
            size="small"
            loading={isLoadingJoin}
            outlined
          >Join
          </Button>
          <Button
            onClick={handleLeave}
            className="w-full md:w-auto"
            size="small"
            loading={isLoadingLeave}
            outlined
          >Leave
          </Button>
        </div>
      </div>
    </Message>
  )
}
