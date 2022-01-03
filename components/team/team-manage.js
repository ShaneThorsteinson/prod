import clsx from 'clsx'
import t from 'prop-types'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import RankDivision from 'components/ui/rank-division'
import IconCrosshair from 'icons/crosshair'
import IconTrophy from 'icons/trophy'
import IconPencilLine from 'icons/pencil-line'
import IconPlus from 'icons/plus'
import User from 'components/user'
import IconTrash from 'icons/trash'
import Dropdown from 'components/ui/dropdown'
import { useState } from 'react'
import ModalEditTeam from 'containers/modal-edit-team'
import ModalInvitePlayer from 'containers/modal-invite-player'
import ModalAddPlayers from 'containers/modal-add-players'
import ModalRemoveConfirm from 'containers/modal-remove-confirm'
import IconUser from 'icons/user'
import ApiService from 'helpers/api-service'
import { useQueryClient } from 'react-query'
import ModalConfirm from 'containers/modal-confirm'
import { useRouter } from 'next/router'

const UserItem = ({ user, team, isCaptain, status, isMeCaptain }) => {
  const [showModalRemove, setShowModalRemove] = useState(false)
  const queryClient = useQueryClient()

  const handleRemove = () => {
    setShowModalRemove(false)
    queryClient.refetchQueries(['team', { id: team.id }])
  }

  return (
    <>
      {showModalRemove && (
        <ModalRemoveConfirm
          icon={<IconUser size={16} />}
          title="Remove Teammate"
          confirmText="Remove Teammate"
          description="Are you sure that you want to remove this teammate from your team?"
          onClose={() => setShowModalRemove(false)}
          onRemove={handleRemove}
          removeFn={() => ApiService.removeTeammate(team.id, user.id)}
        />
      )}
      <div
        key={user.id}
        className="flex justify-between items-center py-2.5 px-4 min-w-max"
      >
        <User
          user={user}
          status="online"
          className="min-w-[240px]"
          isCaptain={isCaptain}
        />
        <div className="flex items-center space-x-2">
          {/* <Label size="small" rounded className="uppercase  font-bold px-3">Wating</Label> */}
          <Label
            size="small"
            rounded
            className={clsx('uppercase font-bold px-3', {
              'text-success-500': status === 'joined',
              'text-gold': status === 'waiting'
            })}
          >{status}
          </Label>
          {isMeCaptain && (
            <Button
              onClick={() => setShowModalRemove(true)}
              icon={<IconTrash size={12} />}
              size="x-small"
              type="secondary"
              outlined
            >Remove
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default function TeamManage ({
  team,
  className,
  isActiveMatch = false,
  ...props
}) {
  const { isMeCaptain = false } = team
  const [showModalEditTeam, setShowModalEditTeam] = useState(false)
  const [showModalInvite, setShowModalInvite] = useState(false)
  const [showModalAddPlayers, setShowModalAddPlayers] = useState(false)
  const [showDeleteTeam, setShowDeleteTeam] = useState(false)
  const [showLeaveTeam, setShowLeaveTeam] = useState(false)
  const classes = clsx('team-info', className)
  const router = useRouter()

  return (
    <>
      {showModalEditTeam && <ModalEditTeam team={team} onClose={() => setShowModalEditTeam(false)} />}
      {showModalInvite && <ModalInvitePlayer team={team} onClose={() => setShowModalInvite(false)} />}
      {showModalAddPlayers && (
        <ModalAddPlayers
          team={team}
          onClose={() => setShowModalAddPlayers(false)}
        />
      )}

      {showDeleteTeam && (
        <ModalConfirm
          title="Delete Team"
          description="Are you sure you want to delete your team?"
          confirmText="Delete"
          onClose={() => setShowDeleteTeam(false)}
          onSuccess={() => router.push('/my-account/teams')}
          confirmFnAsync={async () => ApiService.deleteTeam(team.id)}
        >
          <div className="text-center px-6 mb-7">
            <div className="text-primary-500">It will also be removed from any current or upcoming tournaments with *no refund!</div>
            <div className="text-gray-500">This action cannot be undone.</div>
            <div className="mt-4 text-gray-700">*If you want to withdraw with refund from a tournament, please do not delete this team and contact us instead!</div>
          </div>
        </ModalConfirm>
      )}

      {showLeaveTeam && (
        <ModalConfirm
          title="Leave Team"
          description={<>Are you sure you want to leave your team?<br />This action cannot be undone.</>}
          confirmText="Leave"
          onClose={() => setShowLeaveTeam(false)}
          onSuccess={() => router.push('/my-account/teams')}
          confirmFnAsync={async () => ApiService.leaveTeam(team.id)}
        />
      )}

      <Block className={classes} {...props}>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="w-[88px] h-[88px] mr-4">
            <img src={team.logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="font-semibold text-white text-3xl">{team.name}</div>
            <RankDivision className="mt-1" division={team.division} />
          </div>
          <div className="text-center mt-4 md:mt-0 md:text-right">
            <Label.Group>
              <Label.Stats rounded icon={<IconCrosshair size={18} />} w={0} l={0} />
              <Label.Stats rounded icon={<IconTrophy />} w={team.stats.scrims.won} g={team.stats.scrims.lost} />
            </Label.Group>

            {(isMeCaptain && !isActiveMatch) && (
              <div className="space-x-1.5 mt-2 md:mt-4">
                <Button
                  onClick={() => setShowModalEditTeam(true)}
                  icon={<IconPencilLine size={12} />}
                  size="x-small"
                  type="secondary"
                  outlined
                >Edit team info
                </Button>
                <Button
                  onClick={() => setShowDeleteTeam(true)}
                  icon={<IconTrash size={12} />}
                  size="x-small"
                  type="secondary"
                  className="!border-0"
                  outlined
                >Remove team
                </Button>
              </div>
            )}
            {(!isMeCaptain && !isActiveMatch) && (
              <div className="mt-2 md:mt-4">
                <Button
                  onClick={() => setShowLeaveTeam(true)}
                  icon={<IconTrash size={12} />}
                  size="x-small"
                  type="secondary"
                  outlined
                >Leave team
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          {(isMeCaptain && !isActiveMatch) && (
            <div className="mt-6 mb-4 md:mt-0 md:mb-0 flex justify-center md:justify-end">
              <Dropdown content={
                <>
                  <Dropdown.Item onClick={() => setShowModalAddPlayers(true)}>Add existing user</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowModalInvite(true)}>Invite player by link</Dropdown.Item>
                </>
              }
              >
                <Button.Link icon={<IconPlus />}>invite teammate</Button.Link>
              </Dropdown>
            </div>
          )}

          <div className="team-info__teammate custom-scroll pb-4 overflow-x-auto mt-2">
            {team.players.map(({ user, status, isCaptain }) => (
              <UserItem
                key={user.id}
                status={status}
                isCaptain={isCaptain}
                user={user}
                team={team}
                isMeCaptain={isMeCaptain}
              />
            ))}
          </div>
        </div>
      </Block>
    </>
  )
}

TeamManage.propTypes = {
  team: t.object.isRequired
}
