import Link from 'next/link'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCreditCard from 'icons/credit-card'

export default function ModalChosePaymentMethod ({ onClose = f => f, ...props }) {
  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCreditCard size={18} />}
        iconClass="text-primary-500"
        title="Chose your payment method"
      />
      <Modal.Body className="text-center font-roboto text-gray-500">
        We now supports more payment methods and faster payouts with our Wallet
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Link href="/my-account/wallet" passHref>
          <Button type="primary" shined>Pay with our wallet</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  )
}
