import Section from 'components/section'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconInfo from 'icons/info'
import IconTrophy from 'icons/trophy'
import { useEffect, useState } from 'react'
import TournamentDetails from 'components/tournament/tournament-details'
import TournamentStatus from 'components/tournament/tournament-status'
import ModalSelectTeam from './modal-select-team'
import ModalCreateTeam from './modal-create-team'
import TournamentSelectedTeam from 'components/tournament/tournament-selected-team'
import { useQuery, useQueryClient } from 'react-query'
import ModalPayment from './modal-payment'
import ApiService from 'helpers/api-service'
import TournamentMatch from 'components/tournament/tournament-match'
import User from 'components/user'
import Spinner from 'components/spinner'
import Message from 'components/ui/message/message'
import { useAuth } from 'hooks/use-auth'
import useSocket from 'hooks/use-socket'

const TabTournamentOverview = ({ tournament }) => {
  const [showSelectTeam, setShowSelectTeam] = useState(false)
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [payTournament, setPayTournament] = useState(null)
  const [payForFriend, setPayForFriend] = useState(null)
  const queryClient = useQueryClient()
  const { user } = useAuth()
  const io = useSocket()

  const {
    data: participant,
    isLoading,
    isSuccess,
    isError,
    isIdle,
    refetch
  } = useQuery(['tournament-participant', { id: tournament.id }], () => ApiService.getTournamentParticipant(tournament.id).catch(() => null), {
    enabled: !!user,
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    io.emit('tournament', tournament.id)
    io.on('tournament_started', refetch)
  }, [])

  return (
    <>
      {showSelectTeam && (
        <ModalSelectTeam
          onClose={() => setShowSelectTeam(false)}
          onClickCreateTeam={() => {
            setShowSelectTeam(false)
            setShowModalCreateTeam(true)
          }}
          onSelectedTeam={() => {
            queryClient.refetchQueries(['tournament-participant', { id: tournament.id }])
          }}
          tournament={tournament}
        />
      )}

      {showModalCreateTeam && <ModalCreateTeam onClose={() => setShowModalCreateTeam(false)} />}

      {payTournament && (
        <ModalPayment
          onClose={() => setPayTournament(null)}
          onSuccess={() => queryClient.refetchQueries(['tournament-status', { id: tournament.id }])}
          paymentAsync={async () => ApiService.payTournament(payTournament.id, { amount: payTournament.ticketPrice })}
          payableAmount={tournament.ticketPrice}
        />
      )}

      {payForFriend && (
        <ModalPayment
          onClose={() => setPayForFriend(null)}
          onSuccess={() => queryClient.refetchQueries(['tournament-status', { id: tournament.id }])}
          paymentAsync={async () => ApiService.payTournamentForFriend(payForFriend.id, tournament.id, tournament.ticketPrice)}
          description={<div className="flex justify-center mb-4"><User user={payForFriend} /></div>}
          title="Pay for a friend"
          payableAmount={tournament.ticketPrice}
        />
      )}

      <div className="mt-4">
        {/* {showMessage && <Message onClose={() => setShowMessage(false)} type="success">This is some dynamic announcement SUCCESS message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod</Message>} */}

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:order-1">
            <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6">
              <Section.Header
                title="Tournament"
                titleSecondary="Details"
                icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconInfo />} />}
              />
              <TournamentDetails
                className="mt-4"
                tournament={tournament}
              />
            </Block>
          </div>
          <div className="lg:col-span-8">
            <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8">
              <Section.Header
                title="Tournament"
                titleSecondary="Status"
                icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconTrophy />} />}
              />
              {(isSuccess || isIdle) &&
                (!participant || ['pending_start', 'pending_qualification', 'in_progress', 'ended'].includes(participant.status)) &&
                !isStarted && (
                <TournamentStatus
                  className="mt-4"
                  onClickRegister={() => setShowSelectTeam(true)}
                  onStarted={() => setIsStarted(true)}
                  onClickPayment={() => setPayTournament(tournament)}
                  tournament={tournament}
                  participant={participant}
                  user={user}
                />
              )}

              {(participant?.status === 'match' || isStarted) && (
                <TournamentMatch
                  myTeam={participant.team}
                  tournament={tournament}
                  participant={participant}
                />
              )}
              {isError && <Message className="mt-4">Something went wrong</Message>}
              {isLoading && <Spinner className="py-10" />}
            </Block>

            {participant?.team && (
              <TournamentSelectedTeam
                team={participant.team}
                tournament={tournament}
                onClickPayment={setPayForFriend}
                className="mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TabTournamentOverview
