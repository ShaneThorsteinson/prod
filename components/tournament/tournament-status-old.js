import Button from 'components/ui/button'
import { useAuth } from 'hooks/use-auth'
import Link from 'next/link'
import { useQuery } from 'react-query'
import ApiService from 'helpers/api-service'
import { useEffect, useState } from 'react'
import Countdown from 'components/countdown/countdown'
import TournamentPhases from './tournament-phases'

export default function TournamentStatus ({
  className,
  onClickRegister,
  onClickPayment,
  onSelectedTeam = f => f,
  onStarted = f => f,
  tournament
}) {
  const [status, setStatus] = useState('registration')
  const { user } = useAuth()
  const { data } = useQuery(['tournament-status', { id: tournament.id }], () => ApiService.getTournamentStatus(tournament.id), {
    retry: false
  })

  useEffect(() => {
    if (!data) {
      return
    }

    if (data?.team) {
      onSelectedTeam(data.team)
    }

    if (data?.status) {
      setStatus(data.status)
    }
  }, [data])

  return (
    <div className={className}>
      {(status === 'pending_start' || status === 'in_progress') && (
        <Countdown
          date={tournament.startAt}
          onSuccess={onStarted}
        />
      )}

      {['registration', 'pending_qualification', 'pending_teammates_payment', 'pending_payment', 'in_progress'].includes(status) && (
        <TournamentPhases status={status} />
      )}

      {!user && status !== 'finished' && (
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
          {status === 'pending_payment' && (
            <Button
              type="primary"
              className="w-full mt-6"
              onClick={onClickPayment}
            >Proceed to payment</Button>
          )}
          {status === 'pending_teammates_payment' && (
            <Button
              type="primary"
              className="w-full mt-6"
              disabled
            >Waiting for your teammates payment</Button>
          )}
          {status === 'pending_qualification' && (
            <Button
              type="primary"
              className="w-full mt-6"
              disabled
            >Verify Eligibility</Button>
          )}
        </>
      )}
    </div>
  )
}
