import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import RankDivision from 'components/ui/rank-division'
import { useEffect, useState } from 'react'
import { useInterval } from 'beautiful-react-hooks'
import { useRouter } from 'next/router'
import ApiService from 'helpers/api-service'

export default function ModalIncomingRequest ({ title, request, onClose = f => f, onDecline = f => f, onAccept = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const router = useRouter()
  const [, clearInterval] = useInterval(() => setSeconds(seconds - 1), 1000)

  const { fromScrim } = request
  const { team: fromTeam } = fromScrim

  useEffect(() => {
    if (seconds === 0) {
      onClose()
    }
  }, [seconds])

  const handleDecline = () => {
    onClose()
  }

  const handleAccept = () => {
    clearInterval()
    setIsLoading(true)
    ApiService.acceptScrimRequest(request.id)
      .then((data) => {
        router.push(`/match/${data.id}`)
      })
      .catch(err => {
        window.alert('error')
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <Modal shined {...props}>
      <Modal.Header
        title="Incoming scrim request"
      />
      <Modal.Body>
        <div className="mt-4 flex flex-col items-center space-y-1">
          <div className="text-center w-[80px] h-[80px]">
            <img src={fromTeam.logo ?? '/assets/images/agent-default.svg'} alt="" />
          </div>
          <div className="text-white text-lg font-semibold">{fromTeam.name}</div>

          <RankDivision size="small" division={fromTeam.division} />
        </div>

        <div className="mt-4 text-white text-center font-roboto">Please, make decision in <strong>{seconds}</strong> seconds.</div>
      </Modal.Body>
      <Modal.Footer className="justify-between space-x-2">
        <Button
          onClick={handleDecline}
          className="flex-1"
          disabled={isLoading}
        >Decline
        </Button>
        <Button
          shined
          onClick={handleAccept}
          loading={isLoading}
          className="flex-1"
          type="accent"
        >Accept
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
