import clsx from 'clsx'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import ModalTeamInfo from 'containers/modal-team-info'
import IconCrosshair from 'icons/crosshair'
import IconTrophy from 'icons/trophy'
import Tooltip from 'components/ui/tooltip'
import Link from 'next/link'
import { useState } from 'react'
import TeamAvatars from 'components/team/team-avatars'
import IconTrash from 'icons/trash'
import ModalConfirm from 'containers/modal-confirm'
import ApiService from 'helpers/api-service'
import { useQueryClient } from 'react-query'

const TeamCard = ({ team, stats, className, isCaptain = false, onClick, ...props }) => {
  const { logo, name, players } = team
  const [showModalTeamInfo, setShowModalTeamInfo] = useState(false)
  const [showDeleteTeam, setShowDeleteTeam] = useState(false)
  const [showLeaveTeam, setShowLeaveTeam] = useState(false)
  const queryClient = useQueryClient()

  const handleRemoveTeam = event => {
    event.preventDefault()
    event.stopPropagation()

    if (isCaptain) {
      setShowDeleteTeam(true)
      return
    }
    setShowLeaveTeam(true)
  }

  const handleRemoved = () => {
    setShowLeaveTeam(false)
    setShowDeleteTeam(false)
    queryClient.refetchQueries('my-teams')
  }

  return (
    <>
      {showModalTeamInfo && (
        <ModalTeamInfo
          isCaptain={isCaptain}
          team={team}
          stats={stats}
          onClose={() => setShowModalTeamInfo(false)}
        />
      )}

    {showDeleteTeam && (
        <ModalConfirm
          title="Delete Team"
          description="Are you sure you want to delete your team?"
          confirmText="Delete"
          onClose={() => setShowDeleteTeam(false)}
          onSuccess={handleRemoved}
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
          onSuccess={handleRemoved}
          confirmFnAsync={async () => ApiService.leaveTeam(team.id)}
        />
      )}

      <div className={clsx('team-card', className)} {...props}>
        <div className={clsx('flex flex-col text-center items-center pt-8', { 'cursor-pointer': !!onClick })} onClick={onClick}>
          <div className="team-card__bg">
            <img src={logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>

          <div className="absolute top-4 left-2 right-2 flex justify-between">
            <div>{isCaptain && <Label.Captain />}</div>
            <div>
              <Button
                onClick={handleRemoveTeam}
                icon={<IconTrash size={12} />}
                size="x-small"
                type="secondary"
                className="!border-0"
                outlined
              >{isCaptain ? 'Delete team' : 'Leave team'}
              </Button>
            </div>
          </div>

          <div className="team-card__logo">
            <img src={logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>

          <div className="mt-2 team-card__name">{name}</div>

          <Label.Group className="mt-2">
            <Tooltip
              content={
                <>
                  <div className="text-white uppercase text-center">Tournaments:</div>
                  <div className="mt-1">
                    <span>Won: {stats.tournaments.won}</span>
                    <span className="ml-2">Lost: {stats.tournaments.lost}</span>
                  </div>
                </>
              }
            >
              <Label.Stats
                className="text-sm"
                icon={<IconTrophy />}
                w={stats.tournaments.won}
                l={stats.tournaments.lost}
                rounded
              />
            </Tooltip>

            <Tooltip
              content={
                <>
                  <div className="text-white uppercase text-center">Scrim matches:</div>
                  <div className="mt-1">
                    <span>Won: {stats.scrims.won}</span>
                    <span className="ml-2">Lost: <span className="text-primary-100">{stats.scrims.lost}</span></span>
                  </div>
                </>
              }
            >
              <Label.Stats
                className="text-sm"
                icon={<IconCrosshair size={18} />}
                w={stats.scrims.won}
                l={stats.scrims.lost}
                rounded
              />
            </Tooltip>
          </Label.Group>

          <div className="team-card__users mt-4">
            <TeamAvatars users={players} />
          </div>
        </div>

        <div className="team-card__actions mt-2 space-y-2">
          <Link href={`/scrim-finder/team/${team.id}`} passHref>
            <Button size="small" outlined>go to scrim finder</Button>
          </Link>
          <Button.Link onClick={() => setShowModalTeamInfo(true)}>team info</Button.Link>
        </div>
      </div>
    </>
  )
}

export default TeamCard
