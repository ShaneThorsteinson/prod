import Button from 'components/ui/button'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import IconTrash from 'icons/trash'
import { useMutation } from 'react-query'

export default function ModalRemoveConfirm ({
  title,
  description,
  confirmText,
  icon = null,
  removeFn = f => f,
  onClose = f => f,
  onRemove = f => f,
  ...props
}) {
  const { status, error, mutateAsync } = useMutation(removeFn)

  const handleClickConfirm = () => {
    mutateAsync().then(onRemove)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={icon ?? <IconTrash size={16} />}
        iconClass="text-primary-500"
        title={title}
        description={description}
        className="mb-[18px]"
      />
      {error && (
        <Modal.Body>
          <Message type="error">{error.message}</Message>
        </Modal.Body>
      )}
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          onClick={handleClickConfirm}
          loading={status === 'loading'}
        >{confirmText ?? 'Confirm'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
