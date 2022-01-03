import Section from 'components/section'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconInfo from 'icons/info'
import IconTrophy from 'icons/trophy'
import { useState } from 'react'
import TournamentDetails from 'components/tournament/tournament-details'
import TournamentStatus from 'components/tournament/tournament-status'
import ModalSelectTeam from './modal-select-team'
import ModalCreateTeam from './modal-create-team'
import TournamentSelectedTeam from 'components/tournament/tournament-selected-team'
import { useQueryClient } from 'react-query'
import ModalPayment from './modal-payment'
import ApiService from 'helpers/api-service'
import TournamentMatch from 'components/tournament/tournament-match'
import User from 'components/user'

const TabTournamentOverview = ({ tournament }) => {
  const [showModalSelect, setShowModalTeam] = useState(false)
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [payTournament, setPayTournament] = useState(null)
  const [payForFriend, setPayForFriend] = useState(null)
  const [isMatchStarted, setIsMatchStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(tournament.state === 'ended')
  const queryClient = useQueryClient()

  return (
    <>
      {showModalSelect && (
        <ModalSelectTeam
          onClose={() => setShowModalTeam(false)}
          onClickCreateTeam={() => {
            setShowModalTeam(false)
            setShowModalCreateTeam(true)
          }}
          onSelectedTeam={() => {
            queryClient.refetchQueries(['tournament-status', { id: tournament.id }])
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
              {isFinished && (
                <div className="text-white text-center mt-6">
                  <div className="font-bold text-5xl">Finished</div>
                  <div>Thank you for competing in this tournament</div>
                  <div style={{
                    marginTop: 24,
                    marginBottom: -40,
                    width: 88,
                    height: 128,
                    display: 'inline-block',
                    background: 'url(/assets/images/tournament-past.svg)'
                  }}></div>
                </div>
              )}
              {!isMatchStarted && !isFinished && (
                <TournamentStatus
                  className="mt-4"
                  onClickRegister={() => setShowModalTeam(true)}
                  onClickPayment={() => setPayTournament(tournament)}
                  tournament={tournament}
                  onSelectedTeam={team => setSelectedTeam({ team })}
                  onStarted={() => setIsMatchStarted(true)}
                />
              )}
              {isMatchStarted && !isFinished && (
                <TournamentMatch
                  myTeam={selectedTeam.team}
                  tournament={tournament}
                  onCompleted={() => setIsFinished(true)}
                />
              )}
            </Block>
            {selectedTeam && (
              <TournamentSelectedTeam
                team={selectedTeam.team}
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
