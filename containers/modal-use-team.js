import Avatar from 'components/ui/avatar'
import Button from 'components/ui/button'
import Input from 'components/ui/input'
import List from 'components/ui/list'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'
import Tooltip from 'components/ui/tooltip'
import { useState } from 'react'
import { useQuery } from 'react-query'
import ApiService from 'helpers/api-service'
import { useRouter } from 'next/router'
import ListItemsSkeleton from 'skeletons/list-items'

export default function ModalUseTeam ({ title, onClose = f => f, ...props }) {
  const [selectedId, setSelectedId] = useState(null)
  const { data: items, status } = useQuery('use-teams-captain', () => ApiService.getMyTeams({ captain: true }), { retry: false })
  const router = useRouter()

  const handleClickUse = () => {
    if (!selectedId) {
      return
    }
    router.push(`/scrim-finder/team/${selectedId}`)
    onClose()
  }

  const handleSelect = (id) => {
    return () => setSelectedId(id)
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={16} />}
        iconClass="text-primary-500"
        title="Use one of my previous teams"
      />
      <Modal.Body>
        <form>
          <Input
            placeholder="Search for previous team..."
          />
        </form>

        {status !== 'success' && <ListItemsSkeleton className="mt-4" />}
        {status === 'success' && (
          <div className="mt-4 pr-1 max-h-[320px] overflow-auto custom-scroll overscroll-contain">
            <List>
              {items && items.map(({ teamId, team }) => (
                <List.Item
                  key={teamId}
                  isSelected={selectedId === teamId}
                  onClick={handleSelect(teamId)}
                  className="justify-between"
                >
                  <div className="flex items-center">
                    <img width={30} height={30} src={team.logo ?? '/assets/images/avatar.svg'} alt="" />
                    <span className="ml-2">{team.name}</span>
                  </div>
                  <Avatar.Group>
                    {team.players.map(({ user, isCaptain }) => (
                      <Tooltip
                        key={user.id}
                        content={user?.activisionId || user.name}
                      >
                        <Avatar isCaptain={isCaptain} image={user.image} />
                      </Tooltip>
                    ))}
                  </Avatar.Group>
                </List.Item>
              ))}
            </List>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button
          size="small"
          className="sm:ui-button__size-middle"
          onClick={onClose}
          outlined
        >Cancel
        </Button>
        <Button
          size="small"
          className="sm:ui-button__size-middle"
          onClick={handleClickUse}
          shined
        >Use selected team
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
