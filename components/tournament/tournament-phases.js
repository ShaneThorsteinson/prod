import IconRecord from 'icons/record'
import clsx from 'clsx'
import ImageRegistrationPhase from './images/registration-phase'
import ImageEligibilityPhase from './images/eligibility-phase'
import ImageTournamentPhase from './images/tournament-phase'

const StatusLabel = ({ children, className, isActive = false }) => {
  const classes = clsx('py-1 px-2 bg-opacity-5 bg-white rounded-full inline-flex gap-1 items-center whitespace-nowrap', className)
  return (
    <div className={classes}>
      <IconRecord className="text-gray-700" />
      <span className={clsx('text-xs', { 'text-gray-500': !isActive, 'text-white': isActive })}>{children}</span>
    </div>
  )
}

const StatusItem = ({ image, label, description, isActive = false }) => {
  const Image = image
  return (
    <div className="flex flex-col gap-4 items-center max-w-[124px]">
      <StatusLabel
        className="sm:hidden"
        active={isActive}
      >{label}</StatusLabel>
      {isActive ? <Image isActive={isActive} /> : <Image />}
      <div className={clsx('text-xs text-center', { 'text-gray-700': !isActive, 'text-white': isActive })}>{description}</div>
    </div>
  )
}

export default function TournamentPhases ({
  status,
  participant,
  tournament
}) {
  console.log(status)
  return (
    <div>
      <div className="hidden sm:flex justify-between items-center gap-2">
        <StatusLabel
          isActive={status === 'registration'}
        >Registration Phase</StatusLabel>

        <div className="bg-opacity-5 bg-white h-[1px] flex-1" />
        <StatusLabel
          isActive={status === 'pending_qualification'}
        >Eligibility</StatusLabel>

        <div className="bg-opacity-5 bg-white h-[1px] flex-1" />
        <StatusLabel
          isActive={status === 'ended' || status === 'in_progress'}
        >Tournament Phase</StatusLabel>
      </div>

      <div className="mt-6 flex justify-between flex-col items-center gap-6 sm:flex-row">
        <StatusItem
          label="Registration Phase"
          description="To register, you must be the captain of the team."
          image={ImageRegistrationPhase}
          isActive={status === 'registration'}
        />

        <StatusItem
          label="Eligibility"
          description={
            <>
              {status === 'pending_qualification' && 'Follow our sponsors twitter accounts to be eligible.'}
              {status === 'pending_teammates_payment' && 'All team players must make a payment to continue.'}
              {status === 'pending_payment' && 'You need to pay for this tournament.'}
            </>
          }
          image={ImageEligibilityPhase}
          isActive={status === 'pending_qualification'}
        />

        <StatusItem
          label="Tournament Phase"
          description="Self-report your match scores here every round."
          image={ImageTournamentPhase}
          isActive={status === 'ended' || status === 'in_progress'}
        />
      </div>
    </div>
  )
}
