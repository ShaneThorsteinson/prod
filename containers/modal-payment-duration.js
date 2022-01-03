import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import { useState } from 'react'
import IconReceipt from 'icons/receipt'

export default function ModalPaymentDuration ({ onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconReceipt size={18} />}
        iconClass="text-primary-500"
        title="Changing Payment Duration"
      />
      <Modal.Body className="my-4">
        <div className="text-gray-700 uppercase text-sm border-white border-b border-opacity-10 pb-2">change duration to</div>
        <div className="mt-2 flex justify-between">
          <div className="text-gray-500">Pay yearly</div>
          <div className="text-lg font-semibold text-white">$59.88/year</div>
        </div>

        <div className="mt-8 text-gray-700 uppercase text-sm border-white border-b border-opacity-10 pb-2">next payment due</div>
        <div className="mt-2 flex justify-between">
          <div className="text-gray-500">April 13, 2021</div>
          <div className="text-lg font-semibold text-white">$59.88/year</div>
        </div>

      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          onClick={handleConfirm}
          loading={isLoading}
        >change payment duration
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
