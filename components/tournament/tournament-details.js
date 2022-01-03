import Image from 'next/image'
import Button from 'components/ui/button'
import pt from 'prop-types'
import Link from 'next/link'

export default function TournamentDetails ({
  className,
  tournament
}) {
  return (
    <div className={className}>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Entry Ticket:</span>
          <span className="font-semibold text-white">${tournament.ticketPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Platforms:</span>
          <div className="flex gap-1">
            {tournament.platforms.map(platform => <Image height={18} width={18} key={platform} src={`/assets/images/platforms/${platform.toLowerCase()}.svg`} />)}
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Team Size:</span>
          <span className="font-semibold text-white">{tournament.teamSize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Tournament Type:</span>
          <span className="font-semibold text-white capitalize">{tournament.type.replace(/_/g, ' ')}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Players in Match:</span>
          <span className="font-semibold text-white">{tournament.teamSize}v{tournament.teamSize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Game Mode:</span>
          <span className="font-semibold text-white">Best of {tournament.mode}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm uppercase text-gray-700">Prize Pool:</span>
          <div className="flex gap-1">
            <Image width={18} height={18} src="/assets/icons/trophy.svg" alt="" />
            <span className="font-semibold text-white">${tournament.prizePool}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link href={`/tournament/${tournament.id}/rules`} passHref>
          <Button type="secondary" className="w-full">Tournament Rules</Button>
        </Link>
      </div>
    </div>
  )
}

TournamentDetails.propTypes = {
  className: pt.string,
  tournament: pt.object
}
