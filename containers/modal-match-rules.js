import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'

export default function ModalMatchRules ({ onClose = f => f, ...props }) {
  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Match Rules"
        description="Please, be sure that you read match rules before its start!"
      />
      <Modal.Body className="whitespace-pre-line text-gray-500">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis congue ex, sed facilisis libero molestie sit amet. Nam massa ex, pharetra ac rutrum in, rutrum eget elit. Aliquam erat volutpat. Donec quis enim erat. Etiam a faucibus ipsum. In non mattis est, ac maximus arcu. Maecenas quis vestibulum massa. Nunc augue magna, dapibus et odio sit amet, volutpat dapibus lorem.
        
          Nunc mattis ante sed nulla vehicula semper. Proin et ex a justo lacinia sodales ac ac dolor. Sed dictum non diam sed semper. Nulla in sem feugiat, finibus nunc quis, lobortis elit. Vestibulum vehicula, sapien vel consequat ultricies, lorem tortor malesuada nunc, vitae pretium dui nisl eget nisi. Morbi tempus dictum quam vitae pulvinar.`}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} outlined>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
