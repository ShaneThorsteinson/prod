import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import RankDivision from 'components/ui/rank-division'
import { useEffect, useState } from 'react'
import { useInterval } from 'beautiful-react-hooks'
import { useRouter } from 'next/router'
import ApiService from 'helpers/api-service'

const DisplayTimer = ({ onComplete = f => f }) => {
  const [seconds, setSeconds] = useState(30)
  useInterval(() => setSeconds(seconds - 1), 1000)

  useEffect(() => {
    if (seconds === 0) {
      onComplete()
    }
  }, [seconds])

  return (
    <div className="mt-4 text-white text-center font-roboto">Invitation sent wait for the other team to respond. <strong>{seconds}</strong> seconds.</div>
  )
}

export default function ModalSendRequest ({ title, scrim, onClose = f => f, onDecline = f => f, onAccept = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const { id: fromScrimId } = router.query
  const { id: toScrimId, team } = scrim

  const handleCancel = () => {
    onClose()
  }

  const handleSend = () => {
    setIsLoading(true)
    setMessage(null)
    ApiService.sendScrimRequest(toScrimId, fromScrimId)
      .then(data => {
        console.log('ScrimRequest', data)
      })
  }

  const handleModalClose = () => {
    if (isLoading) {
      return
    }
    onClose()
  }

  const handleCompleteTimer = () => {
    setIsLoading(false)
    setMessage('Your opponent did not respond to your request')
  }

  return (
    <Modal onClose={handleModalClose} shined {...props}>
      <Modal.Header
        title="Send scrim request"
      />
      <Modal.Body>
        <div className="mt-4 flex flex-col items-center space-y-1">
          <div className="text-center w-[80px] h-[80px]">
            <img src={team.logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>
          <div className="text-white text-lg font-semibold">{team.name}</div>

          <RankDivision size="small" division={team.division} />
        </div>
        {isLoading && <DisplayTimer onComplete={handleCompleteTimer} />}
        {message && <div className="text-white text-center mt-4">{message}</div>}
      </Modal.Body>
      <Modal.Footer className="justify-between space-x-2">
        <Button
          onClick={handleCancel}
          className="flex-1"
          disabled={isLoading}
        >Cancel
        </Button>
        <Button
          shined
          onClick={handleSend}
          loading={isLoading}
          className="flex-1"
          type="accent"
        >Send
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
