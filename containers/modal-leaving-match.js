import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconGameController from 'icons/game-controller'
import { useState } from 'react'

export default function ModalLeavingMatch ({ onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleRemove = () => {
    setIsLoading(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController size={16} />}
        iconClass="text-primary-500"
        title="Leaving Match"
        description="Are you sure that you want to leave match? If you leave match [description of leaving match consequences]"
        className="mb-[18px]"
      />
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          onClick={handleRemove}
          loading={isLoading}
        >Leave match
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
