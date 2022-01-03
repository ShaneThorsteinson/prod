import { useEffect, useState } from 'react'
import Section from 'components/section'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Empty from 'components/ui/empty'
import Hexagon from 'components/ui/hexagon'
import IconGame from 'icons/game-controller'
import IconMapPinLine from 'icons/map-pin-line'
import IconPencilLine from 'icons/pencil-line'
import IconMonitorPlay from 'icons/monitor-play'
import ModalEditBiography from './modal-edit-biography'
import ModalEditVideoReel from './modal-edit-video-reel'
import ReactPlayer from 'react-player'
import ModalEditTimezone from './modal-edit-timezone'
import { useAuth } from 'hooks/use-auth'

const TabProfileOverview = () => {
  const { user } = useAuth()
  const [biography, setBiography] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [timezone, setTimezone] = useState('')
  const [showEditBiographyModal, setShowEditBiographyModal] = useState(false)
  const [showEditVideoReelModal, setShowEditVideoReelModal] = useState(false)
  const [showEditTimezoneModal, setShowEditTimezoneModal] = useState(false)

  useEffect(() => {
    if (user) {
      setBiography(user.biography)
      setVideoUrl(user.videoReel)
      setTimezone(user.timezone)
    }
  }, [user])

  const handleSave = value => {
    setBiography(value)
    setShowEditBiographyModal(false)
  }

  return (
    <>
      {showEditBiographyModal && (
        <ModalEditBiography
          onSave={handleSave}
          initialValue={biography}
          onClose={() => setShowEditBiographyModal(false)}
        />
      )}

      {showEditVideoReelModal && (
        <ModalEditVideoReel
          onSave={value => {
            setVideoUrl(value)
            setShowEditVideoReelModal(false)
          }}
          initialValue={videoUrl}
          onClose={() => setShowEditVideoReelModal(false)}
        />
      )}

      {showEditTimezoneModal && (
        <ModalEditTimezone
          onSave={value => {
            setTimezone(value)
            setShowEditTimezoneModal(false)
          }}
          initialValue={timezone}
          onClose={() => setShowEditTimezoneModal(false)}
        />
      )}

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-7">
          <Section.Header
            title="Your"
            titleSecondary="biography"
            icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconGame />} />}
          />
          {biography && (
            <div className="mt-4">
              <p className="text-gray-500 whitespace-pre-line">{biography}</p>
              <Button
                className="mt-4"
                icon={<IconPencilLine size={12} />}
                type="secondary"
                size="x-small"
                onClick={() => setShowEditBiographyModal(true)}
                outlined
              >
                Edit
              </Button>
            </div>
          )}
          {!biography && (
            <Empty
              image="/assets/images/empty-game.svg"
              description="Your biography is currently empty. Write something about yourself."
              className="pt-7 md:py-10 mt-4"
            >
              <Button size="small" className="w-full md:w-auto" outlined onClick={() => setShowEditBiographyModal(true)}>add biography</Button>
            </Empty>
          )}
        </Block>

        <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-5">
          <Section.Header
            title="Video"
            titleSecondary="reel"
            icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconMonitorPlay />} />}
          />
          {videoUrl && (
            <div className="mt-4">
              <ReactPlayer url={videoUrl} height={286} width="100%" fallback="Loading..." />
              <Button
                className="mt-4"
                icon={<IconPencilLine size={12} />}
                type="secondary"
                size="x-small"
                onClick={() => setShowEditVideoReelModal(true)}
                outlined
              >
                Edit
              </Button>
            </div>
          )}
          {!videoUrl && (
            <Empty
              image="/assets/images/empty-video.svg"
              description="Your video reel is currently empty. Post your favorite video here."
              className="pt-7 md:py-10 mt-4"
            >
              <Button
                onClick={() => setShowEditVideoReelModal(true)}
                size="small"
                className="w-full md:w-auto"
                outlined
              >add video reel
              </Button>
            </Empty>
          )}
        </Block>

        <Block shined={false} className="p-4 lg:col-span-7">
          <div className="flex items-center">
            <Hexagon
              size={60}
              className="text-success-500 inline-flex mr-4"
              icon={<IconMapPinLine size={18} />}
            />
            <div className="flex flex-col flex-1">
              <span className="uppercase text-gray-900 text-sm">location & timezone</span>
              <span className="text-white">{timezone}</span>
            </div>

            <Button
              icon={<IconPencilLine size={12} />}
              type="secondary"
              size="x-small"
              outlined
              onClick={() => setShowEditTimezoneModal(true)}
            >Edit
            </Button>
          </div>
        </Block>
      </div>
    </>
  )
}

export default TabProfileOverview
