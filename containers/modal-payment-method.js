import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import { useState } from 'react'
import IconReceipt from 'icons/receipt'
import PaymentMethod from 'components/payment-method'

export default function ModalPaymentMethod ({ onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconReceipt size={18} />}
        iconClass="text-primary-500"
        title="Update Payment Method"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <PaymentMethod onChange={setPaymentMethod} />
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>

        {paymentMethod !== 'paypal' && (
          <Button
            shined
            onClick={handleConfirm}
            loading={isLoading}
          >Save Changes
          </Button>
        )}

        {paymentMethod === 'paypal' && (
          <Button
            shined
            onClick={handleConfirm}
            loading={isLoading}
          >go to paypal
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}
