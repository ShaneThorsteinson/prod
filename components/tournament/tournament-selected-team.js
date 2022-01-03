import clsx from 'clsx'
import Block from 'components/ui/block'
import Label from 'components/ui/label'
import RankDivision from 'components/ui/rank-division'
import IconCrosshair from 'icons/crosshair'
import IconTrophy from 'icons/trophy'
import User from 'components/user'
import Image from 'next/image'

const UserItem = ({ onClickPayment, user, isCaptain, isPaid, isFree = false, hasControl }) => {
  return (
    <>
      <div
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
            className={clsx('uppercase font-bold px-3 bg-opacity-20', {
              'text-success-500 bg-success-500': isPaid || isFree,
              'text-primary-100 bg-primary-100': !isPaid && !isFree
            })}
          >
            {isFree ? 'Approved' : isPaid ? 'Paid' : 'Waiting for payment'}
          </Label>
          {!isFree && !isPaid && (
            <Label
              onClick={() => onClickPayment(user)}
              size="small"
              rounded
              className="bg-yellow-500 text-white cursor-pointer"
            >
              Pay
            </Label>
          )}
        </div>
      </div>
    </>
  )
}

export default function TournamentSelectedTeam ({
  className,
  team,
  tournament,
  onClickPayment,
  ...props
}) {
  const classes = clsx('p-4 md:pt-6 lg:p-8 lg:pt-6', className)

  return (
    <>
      <Block className={classes} {...props}>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="w-[88px] h-[88px] mr-4">
            <Image src="/assets/images/agent-default.svg" height={88} width={88} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="font-semibold text-white text-3xl">{team.name}</div>
            <RankDivision className="mt-1" division={team.division} />
            {/* <div className="text-primary-100">Please make a payments for continue</div> */}
          </div>
          <div className="text-center mt-4 md:mt-0 md:text-right">
            <Label.Group>
              <Label.Stats rounded icon={<IconCrosshair size={18} />} w={0} l={0} />
              <Label.Stats rounded icon={<IconTrophy />} w={0} g={0} />
            </Label.Group>
          </div>
        </div>

        <div className="mt-4">
          <div className="team-info__teammate custom-scroll pb-4 overflow-x-auto mt-2">
            {team.players.map(({ user, isPaid, isCaptain }) => (
              <UserItem
                key={user.id}
                isPaid={isPaid}
                isCaptain={isCaptain}
                isFree={tournament.ticketPrice === 0}
                onClickPayment={onClickPayment}
                user={user}
              />
            ))}
          </div>
        </div>
      </Block>
    </>
  )
}
