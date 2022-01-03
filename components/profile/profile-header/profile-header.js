import { useEffect, useState } from 'react'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import RankDivision from 'components/ui/rank-division'
import ProfileAvatar from '../profile-avatar'
import IconCrosshair from 'icons/crosshair'
import IconTrophy from 'icons/trophy'
import IconPencilLine from 'icons/pencil-line'
import Container from 'components/ui/container'
import IconCrown from 'icons/crown'
import ModalEditUsername from 'containers/modal-edit-username'
import ModalPremiumOnly from 'containers/modal-premium-only'
import ModalUpload from 'containers/modal-upload'
import Tooltip from 'components/ui/tooltip'
import { useAuth } from 'hooks/use-auth'

const ProfileHeader = () => {
  const { user, refetch } = useAuth()
  const [username, setUsername] = useState('')
  const [showModalEditUsername, setShowModalEditUsername] = useState(false)
  const [showModalPremiumOnly, setShowModalPremiumOnly] = useState(false)
  const [showModalUpload, setShowModalUpload] = useState(false)

  useEffect(() => {
    setUsername(user.name)
  }, [user])

  const handleClickUpload = () => {
    setShowModalUpload(!showModalUpload)
  }

  return (
    <>
      {showModalEditUsername && (
        <ModalEditUsername
          initialValue={username}
          onSave={value => {
            setUsername(value)
            setShowModalEditUsername(false)
            refetch()
          }}
          onClose={() => setShowModalEditUsername(!showModalEditUsername)}
        />
      )}

      {showModalPremiumOnly && (
        <ModalPremiumOnly
          onClose={() => setShowModalPremiumOnly(!showModalPremiumOnly)}
        />
      )}

      {showModalUpload && (
        <ModalUpload
          title="Upload Avatar"
          onClose={() => setShowModalUpload(false)}
        />
      )}

      <div className="profile-header">
        <Container className="w-full text-center md:text-left md:flex md:justify-between md:items-center">
          <div className="md:flex md:items-center">
            <div className="md:mr-4 lg:mr-6">
              <ProfileAvatar src={user?.image} onClickUpload={handleClickUpload} />
            </div>
            <div className="mt-4 md:mt-0">
              {/* <Label icon={<IconCrosshair className="text-gold" />} rounded>Free member</Label> */}
              {user?.membership && <Label className="text-gold" icon={<IconCrown className="text-gold" />} rounded>Prestige member</Label>}
              <div className="text-white font-semibold text-2xl lg:text-3xl">{username} <span className="inline-block opacity-20 cursor-pointer" onClick={() => setShowModalEditUsername(true)}><IconPencilLine size={20} /></span></div>
              <div className="flex justify-center md:justify-start mt-1">
                <RankDivision size="small" division={user?.division} className="mr-4" />
                {/* <Label icon={<img src="/assets/icons/aim-circle.svg" />}>121st</Label> */}
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Label.Group className="mb-2 md:text-right">
              <Tooltip
                content={
                  <>
                    <div className="text-white uppercase text-center">tournaments:</div>
                    <div className="mt-1">
                      <span>Won: {user?.stats.tournaments.won}</span>
                      <span className="ml-2 text-primary-100">Lost: {user?.stats.tournaments.lost}</span>
                    </div>
                  </>
                }
              >
                <Label.Stats
                  className="text-sm"
                  icon={<IconTrophy />}
                  w={user?.stats.tournaments.won}
                  l={user?.stats.tournaments.lost}
                  rounded
                />
              </Tooltip>

              <Tooltip
                content={
                  <>
                    <div className="text-white uppercase text-center">Scrim Matches:</div>
                    <div className="mt-1">
                      <span>Won: {user?.stats.scrims.won}</span>
                      <span className="ml-2 text-primary-100">Lost: {user?.stats.scrims.lost}</span>
                    </div>
                  </>
                }
              >
                <Label.Stats
                  className="text-sm"
                  icon={<IconCrosshair size={18} />}
                  w={user?.stats.scrims.won}
                  l={user?.stats.scrims.lost}
                  rounded
                />
              </Tooltip>
            </Label.Group>
            {/* <Button size="small" outlined onClick={() => setShowModalPremiumOnly(true)}>download player’s resume</Button> */}
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProfileHeader
