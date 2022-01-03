import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import Upload from 'components/upload'
import IconDownloadSimple from 'icons/download-simple'
import { useState } from 'react'
import ApiService from 'helpers/api-service'
import Message from 'components/ui/message/message'
import { useAuth } from 'hooks/use-auth'

export default function ModalUpload ({ title, description = null, onClose = f => f, ...props }) {
  const [isSuccess, setIsSuccess] = useState(false)
  const { refetch: refetchMe } = useAuth()

  const handleSuccess = (res) => {
    ApiService.updateMe({
      image: res.url
    })
      .then(() => {
        refetchMe()
      })
    setIsSuccess(true)
  }

  return (
    <Modal shined showClose onClose={onClose} {...props}>
      <Modal.Header
        icon={<IconDownloadSimple size={16} />}
        iconClass="text-primary-500"
        title={title}
        description={description}
      />
      <Modal.Body>
        {isSuccess && <Message type="success">Your avatar has been successfully updated</Message>}
        {!isSuccess && <Upload onSuccess={handleSuccess} />}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        {/* <Button
          shined
          form="form-report-problem"
          htmlType="submit"
          disabled={disabled}
        >Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  )
}
