import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'

export default function ModalTeamRequests ({ specialRequests = null, onClose = f => f, ...props }) {
  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Team Requests"
        description={specialRequests}
        className="mb-[18px]"
      />
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} outlined>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
