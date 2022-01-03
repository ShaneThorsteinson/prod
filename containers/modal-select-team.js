import TeamSelectMenu from 'components/team/team-select-menu'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import IconCrosshair from 'icons/crosshair'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import Message from 'components/ui/message/message'

export default function ModalSelectTeam ({
  onClose = f => f,
  onClickCreateTeam,
  onSelectedTeam,
  tournament,
  ...props
}) {
  const [selectedTeam, setSelectedTeam] = useState(null)
  const { data: items } = useQuery('my-teams-captain', () => ApiService.getMyTeams({ captain: true }))
  const { mutateAsync: registerAsync, isLoading } = useMutation(data => ApiService.registerInTournament(tournament.id, data))
  const [message, setMessage] = useState(null)

  const handleClickRegister = () => {
    if (!selectedTeam) {
      return
    }
    setMessage(null)

    if (selectedTeam && selectedTeam.team.players.length !== tournament.teamSize) {
      setMessage(`This tournament requires exactly ${tournament.teamSize} players per team!`)
      return
    }

    registerAsync({
      teamId: selectedTeam.teamId
    })
      .then(() => {
        onSelectedTeam(selectedTeam)
        onClose()
      })
      .catch(err => setMessage(err.message))
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Select your Team"
      />
      <Modal.Body>
        {items && items.length > 0 && (
          <>
            <div className="mb-3">
              <TeamSelectMenu
                items={items}
                onChange={setSelectedTeam}
              />
            </div>
            <div className="text-center text-gray-500">*You can still update your team at any time before the tournament start!</div>
          </>
        )}
        {items && items.length === 0 && <div className="text-center text-gray-500">You don&apos;t have any teams</div>}
        {message && <Message className="mt-4" onClose={() => setMessage(null)}>{message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        {items && items.length > 0 && (
          <div>
            <Button
              onClick={onClickCreateTeam}
              className="mr-2"
              outlined
            >Create another team</Button>
            <Button
              onClick={handleClickRegister}
              disabled={!selectedTeam}
              shined
              loading={isLoading}
            >Register</Button>
          </div>
        )}
        {items && items.length === 0 && (
          <Button
            shined
            onClick={onClickCreateTeam}
          >Create your first team</Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}
