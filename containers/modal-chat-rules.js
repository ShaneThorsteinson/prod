import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'

export default function ModalChatRules ({ onClose = f => f, ...props }) {
  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Chat Rules"
        description="Please, be sure that you read chat rules before chat!"
      />
      <Modal.Body className="whitespace-pre-line text-gray-500 text-center">
        Communicate with your opponents and allow yourself to get into the match. If you have any issues DM us on the twitter account <a className="text-primary-500 underline" target="_blank" rel="noreferrer" href="https://twitter.com/CallOfDutyAgent">@CallOfDutyAgent</a> to request an admin! GLHF
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} outlined>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
