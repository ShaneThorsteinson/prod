import Modal from 'components/ui/modal'
import Spinner from 'components/spinner/spinner'
import { useEffect, useState } from 'react'
import ApiService from 'helpers/api-service'
import Message from 'components/ui/message/message'

export default function ModalWalletRefill ({ onClose = f => f, onSuccess = f => f, ...props }) {
  const [link, setLink] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ApiService.getRefillLink()
      .then(setLink)
      .catch(err => setError(err.message))
  }, [])

  return (
    <Modal onClose={onClose} {...props}>
      {link && (
        <iframe src={`${link}?iframe=true&textColor=ffffff&darkMode=true&bgColor=242427`}
          className="w-full overflow-hidden rounded-lg h-[650px]"
        />
      )}
      {!link && !error && <Spinner className="h-40" />}
      {error && <Message type="error">{error}</Message>}
    </Modal>
  )
}
