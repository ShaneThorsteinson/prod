import Button from 'components/ui/button'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import Select from 'components/ui/select'
import ApiService from 'helpers/api-service'
import useAsync from 'hooks/use-async'
import IconPinLine from 'icons/map-pin-line'
import { useState } from 'react'

const ModalEditTimezone = ({ onSave, title, initialValue = '', onClose = f => f, ...props }) => {
  const [timezone, setTimezone] = useState(initialValue)

  const { execute, status, error } = useAsync(ApiService.updateMe, false)

  const handleSave = () => {
    execute({
      timezone
    })
      .then(() => {
        if (!error) {
          onSave(timezone)
        }
      })
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconPinLine />}
        iconClass="text-[#5A636C]"
        title="Edit Timezone"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <Select
          value={timezone}
          onChange={e => setTimezone(e.target.value)}
        >
          <Select.Option>Africa/Abidjan</Select.Option>
          <Select.Option>Africa/Accra</Select.Option>
          <Select.Option>America/Adak</Select.Option>
          <Select.Option>America/Antigua</Select.Option>
        </Select>
        {error && <Message className="mt-4" type="error">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          onClick={handleSave}
          shined
          loading={status === 'pending'}
        >Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEditTimezone
