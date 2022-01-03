import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import { useAsync } from 'react-async'
import IconGameController from 'icons/game-controller'
import { useState } from 'react'

const ModalEditBiography = ({ onSave, title, initialValue = '', onClose = f => f, ...props }) => {
  const [biography, setBiography] = useState(initialValue)
  const { isPending, error, run } = useAsync({
    deferFn: ([biography]) => ApiService.updateMe({ biography }),
    onResolve: () => onSave(biography)
  })

  const handleSave = () => {
    run(biography)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController />}
        iconClass="text-[#124A8A]"
        title={initialValue ? 'Edit Biography' : 'Add Biography'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <Input.Textarea maxLength={900} onChange={e => setBiography(e.target.value)} value={biography} />
        {error && <Message className="mt-4" type="error">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          onClick={handleSave}
          shined
          loading={isPending}
        >Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEditBiography
