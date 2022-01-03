import { useEffect, useState } from 'react'
import SectionFindScrim from 'containers/section-find-scrim'
import Message from 'components/ui/message'
import TeamManage from 'components/team/team-manage'
import TeamInviteMessage from 'components/team/team-invite-message'
import Button from 'components/ui/button'
import PageHeader from 'components/page/page-header'
import ModalUseTeam from 'containers/modal-use-team'
import ModalCreateTeam from './modal-create-team'
import { useAuth } from 'hooks/use-auth'

export default function PageScrimFinderFind ({ team }) {
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)
  const [showModalUseTeam, setShowModalUseTeam] = useState(false)
  const [showInviteMessage, setShowInviteMessage] = useState(false)
  const [isCaptain, setIsCaptain] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user?.id && team?.players && team.players.find(item => item.userId === user.id && item.status === 'waiting')) {
      setShowInviteMessage(true)
      return
    }
    setShowInviteMessage(false)
  }, [user, team])

  useEffect(() => {
    if (user?.id && team?.players && team.players.find(item => item.userId === user.id && item.isCaptain === true)) {
      setIsCaptain(true)
      return
    }
    setIsCaptain(false)
  }, [user, team])

  return (
    <>
      {showModalCreateTeam && <ModalCreateTeam onClose={() => setShowModalCreateTeam(false)} />}
      {showModalUseTeam && <ModalUseTeam onClose={() => setShowModalUseTeam(false)} />}

      <PageHeader
        className="pt-10"
        title="Scrim Finder"
        descripiton="First step is to create your team. Invite your teammates once they've made accounts, and begin competing in ranked scrims or tournaments!"
      />

      {showInviteMessage && <TeamInviteMessage teamId={team.id} onClose={() => setShowInviteMessage(false)} />}

      {isCaptain && (
        <Message type="success" className="mt-4">
          <div className="flex justify-between flex-col lg:items-center lg:flex-row">
            <div>
              Here you can create new team or use one of your previous.
            </div>
            <div className="flex flex-col space-x-0 space-y-2 mt-2 items-start md:flex-row md:space-y-0 md:space-x-2 lg:mt-0">
              <Button
                onClick={() => setShowModalCreateTeam(true)}
                className="w-full md:w-auto"
                size="small"
                outlined
              >Create a new team
              </Button>
              <Button
                onClick={() => setShowModalUseTeam(true)}
                className="w-full md:w-auto"
                size="small"
                outlined
              >Use one of my previuos teams
              </Button>
            </div>
          </div>
        </Message>
      )}

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <TeamManage
          hasControl={isCaptain}
          team={team}
          className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8"
        />
        <SectionFindScrim team={team} isCaptain={isCaptain} />
      </div>
    </>
  )
}
