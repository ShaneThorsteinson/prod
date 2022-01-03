import PremiumFeature from 'components/premium-feature'
import Modal from 'components/ui/modal'

export default function ModalPremiumOnly ({ onClose = f => f, ...props }) {
  return (
    <Modal width={600} shined className="w-full" showClose onClose={onClose} {...props}>
      <PremiumFeature className="my-14" />
    </Modal>
  )
}
