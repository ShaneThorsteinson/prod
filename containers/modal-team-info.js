import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Label from 'components/ui/label'
import List from 'components/ui/list'
import Modal from 'components/ui/modal'
import RankDivision from 'components/ui/rank-division'
import User from 'components/user'
import IconCrosshair from 'icons/crosshair'
import IconPencilLine from 'icons/pencil-line'
import IconTrophy from 'icons/trophy'
import Link from 'next/link'
import Clipboard from 'react-clipboard.js'
import IconClipboard from 'icons/clipboard'

const ListItemUser = ({ user, isCaptain }) => {
  return (
    <List.Item className="py-2.5 flex flex-col sm:flex-row sm:justify-between items-start">
      <User
        user={user}
        isCaptain={isCaptain}
      />

      <Label.Group className="mt-2 sm:mt-0">
        <Label.Stats icon={<IconCrosshair size={18} />} w={22} l={12} rounded />
        <Label.Stats icon={<IconTrophy />} w={22} g={50} rounded />
      </Label.Group>
    </List.Item>
  )
}

export default function ModalTeamInfo ({ team, stats, onClose = f => f, isCaptain = false, ...props }) {
  const { name, logo, division, players } = team

  return (
    <Modal width={600} className="w-full" onClose={onClose} {...props}>
      <div className="relative overflow-hidden z-0">
        <div className="team-card__bg h-[160px]">
          <img src={logo ?? '/assets/images/agent-default.svg'} alt="" />
        </div>

        {isCaptain && (
          <div className="absolute top-4 left-6 right-6 flex justify-between">
            <div><Label.Captain /></div>
            <div>
              <Link href={`/my-account/teams/${team.id}`} passHref>
                <Button
                  icon={<IconPencilLine size={12} />}
                  size="x-small"
                >Edit
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col items-center space-y-1">
          <div className="team-card__logo text-center">
            <img src={logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>
          <div className="text-white text-2xl font-semibold">{name}</div>

          <RankDivision division={division} />

          <Label.Group>
            <Label.Stats icon={<IconCrosshair size={18} />} w={0} l={0} rounded />
            <Label.Stats icon={<IconTrophy />} w={stats.scrims.won} l={stats.scrims.lost} rounded />
          </Label.Group>
        </div>

        <div className="mx-6 mt-4">
          <div className="font-semibold uppercase text-lg text-white">Invite player by link</div>
          <div className="text-gray-700">Use this link to invite others to join your team</div>
          <Input
            className="mt-2"
            defaultValue={`${process.env.NEXT_PUBLIC_APP_URL}/invite/${team.inviteCode}`}
            iconRight={
              <Clipboard
                data-clipboard-text={`${process.env.NEXT_PUBLIC_APP_URL}/invite/${team.inviteCode}`}
                className="cursor-pointer"
              >
                <IconClipboard />
              </Clipboard>
            }
            inputClass="pr-9"
            disabled
          />
        </div>

        <div className="mx-6 my-4">
          <div className="font-semibold uppercase text-lg text-white mb-2">Players</div>
          <List>
            {players.map((item, index) => (
              <ListItemUser
                key={item.user.id ?? index}
                user={item.user}
                isCaptain={item.isCaptain}
              />
            ))}
          </List>
        </div>
      </div>
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} outlined>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
