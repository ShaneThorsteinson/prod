import { useState } from 'react'
import Button from 'components/ui/button'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import IconWarning from 'icons/warning'

export default function ModalConfirm ({
  title,
  description = null,
  icon,
  onClose = f => f,
  onSuccess = f => f,
  confirmText,
  confirmFn,
  confirmFnAsync,
  children,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleConfrim = () => {
    if (!confirmFn && !confirmFnAsync) {
      throw new Error('confirmFn required')
    }

    setMessage(null)

    if (confirmFnAsync) {
      setIsLoading(true)
      confirmFnAsync()
        .then(onSuccess)
        .finally(() => setIsLoading(false))
        .catch(err => setMessage(err.message))
      return
    }
    confirmFn()
    onClose()
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={icon ?? <IconWarning size={16} />}
        iconClass="text-primary-500"
        title={title}
        description={description}
        className="mb-[18px]"
      />

      {message && <Message type="error" onClose={() => setMessage(null)}>{message}</Message>}

      {children}

      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          onClick={handleConfrim}
          loading={isLoading}
        >{confirmText ?? 'Confirm'}</Button>
      </Modal.Footer>
    </Modal>
  )
}
