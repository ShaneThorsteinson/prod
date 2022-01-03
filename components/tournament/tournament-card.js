import clsx from 'clsx'
import pt from 'prop-types'
import Label from 'components/ui/label'
import IconUsers from 'icons/users'
import IconMedal from 'icons/medal'
import IconGameController from 'icons/game-controller'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import IconCrown from 'icons/crown'

dayjs.extend(localizedFormat)

const TournamentCard = ({
  className,
  tournament
}) => {
  const classes = clsx('bg-dark-500 w-full', className)
  const isFinished = tournament?.state === 'ended'
  return (
    <div className={classes}>
      <Link href={`/tournament/${tournament.id}`}>
        <a>
          <div className="flex flex-wrap h-full">
            <div className="h-40 relative w-full">
              <div
                className={clsx('absolute inset-0 border-[3px] border-white border-opacity-30', {
                  'tournament-past': isFinished
                })}
              />
              <img src={tournament.coverImageUrl ? tournament.coverImageUrl : tournament.game.bg} className="h-full object-cover w-full" alt="" />
            </div>
            <div className="relative flex-1 p-6 space-y-3">
              <div className="text-gray-700 text-[13px] uppercase letter tracking-wide">{dayjs(tournament.startAt).format('LLL')}</div>
              <div className="flex items-center gap-2">
                <span
                  className={clsx('font-semibold text-lg leading-6', {
                    'text-gold': !isFinished && tournament.isPrestige,
                    'text-white': !isFinished && !tournament.isPrestige,
                    'text-gray-700': isFinished
                  })}
                >
                  {tournament.name}
                </span>
                {tournament.isPrestige && <IconCrown className="text-gold" />}
              </div>

              <div className="grid grid-cols-3">
                <div>
                  <div className="text-gray-700 text-xs">Prize Pool:</div>
                  <div className="flex gap-1 items-center mt-1">
                    <Image width={18} height={18} src="/assets/icons/trophy.svg" alt="" />
                    <span className="font-semibold text-white">${tournament.prizePool}</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-700 text-xs">Entry Ticket:</div>
                  <div className="flex gap-1 items-center mt-1">
                    <Image width={18} height={18} src="/assets/icons/money-bag.svg" alt="" />
                    {tournament.ticketPrice === 0 ? <span className="font-semibold text-success-500">FREE</span> : <span className="font-semibold text-gold">${tournament.ticketPrice}</span>}
                  </div>
                </div>
                <div>
                  <div className="text-gray-700 text-xs">Platforms:</div>
                  <div className="flex gap-1 items-center mt-1">
                    {tournament.platforms.map(platform => <Image height={18} width={18} key={platform} src={`/assets/images/platforms/${platform.toLowerCase()}.svg`} />)}
                  </div>
                </div>
              </div>

              <Label.Group className="space-y-1">
                <Label icon={<IconUsers />} rounded>{tournament.teamSize}v{tournament.teamSize}</Label>
                <Label icon={<IconMedal />} rounded>Bo{tournament.mode}</Label>
                <Label icon={<IconGameController />} className="capitalize" rounded>{tournament.type.replace(/_/g, ' ')}</Label>
              </Label.Group>

              <div className="flex gap-[10px] items-center">
                <Image
                  width={24}
                  height={24}
                  src={tournament.game.icon}
                  alt=""
                />
                <span className="text-white font-semibold">{tournament.game.name}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

TournamentCard.propTypes = {
  className: pt.string,
  image: pt.string,
  platforms: pt.arrayOf(pt.string),
  price: pt.number,
  game: pt.string,
  isFinished: pt.bool
}

export default TournamentCard
