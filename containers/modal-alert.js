import PropTypes from 'prop-types'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'

export default function ModalAlert ({ title, icon, description = null, onClose = f => f, ...props }) {
  const Icon = icon ?? <IconCrosshair size={18} />

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={Icon}
        iconClass="text-primary-500"
        title={title}
        description={description}
        className="mb-[18px]"
      />
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} outlined>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalAlert.propTypes = {
  title: PropTypes.string.isRequired
}
