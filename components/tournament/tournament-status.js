import Button from 'components/ui/button'
import { useAuth } from 'hooks/use-auth'
import Link from 'next/link'
import { useQuery } from 'react-query'
import ApiService from 'helpers/api-service'
import Countdown from 'components/countdown/countdown'
import TournamentPhases from './tournament-phases'

const QualificationButton = ({ onClickPayment, tournament, participant }) => {
  if (tournament.ticketPrice > 0 && !participant.isPaid) {
    return (
      <Button
        type="primary"
        className="w-full mt-6"
        onClick={onClickPayment}
      >Proceed to payment</Button>
    )
  }

  return (
    <Button
      type="primary"
      className="w-full mt-6"
      disabled
    >{tournament.ticketPrice > 0 && !participant.isTeammatesPaid ? 'Waiting for your teammates payment' : 'Verify Eligibility'}</Button>
  )
}

export default function TournamentStatus ({
  className,
  onClickRegister,
  onClickPayment,
  onStarted = f => f,
  tournament,
  participant,
  user
}) {
  const { status = 'registration' } = participant || {}

  return (
    <div className={className}>
      {status === 'pending_start' && (
        <Countdown
          date={tournament.startAt}
          onSuccess={onStarted}
        />
      )}

      {['registration', 'pending_qualification', 'ended'].includes(status) && (
        <TournamentPhases
          status={status}
          participant={participant}
          tournament={tournament}
        />
      )}

      {!user && (
        <div className="mt-6">
          <Link
            href="/signin"
            passHref
          >
            <Button
              type="primary"
              className="w-full"
            >Sign in to continue</Button>
          </Link>
        </div>
      )}

      {(status === 'finished' || status === 'in_progress') && (
        <div className="mt-6">
          <Button
            type="primary"
            className="w-full"
            disabled
          >Registration ended</Button>
        </div>
      )}

      {user && (
        <>
          {status === 'registration' && (
            <Button
              type="primary"
              className="w-full mt-6"
              onClick={onClickRegister}
            >Register with your team</Button>
          )}
          {status === 'pending_qualification' && (
            <QualificationButton
              status={status}
              participant={participant}
              tournament={tournament}
              onClickPayment={onClickPayment}
            />
          )}
        </>
      )}
    </div>
  )
}
