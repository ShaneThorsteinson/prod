import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconGameController from 'icons/game-controller'

export default function ModalEditSocialAccount ({ onSave = f => f, initialValue = '', onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    setIsLoading(true)
    setTimeout(() => {
      onSave(data.url)
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController size={18} />}
        iconClass="text-primary-500"
        title="Add Social Account"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <form id="form-edit-account" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('url', {
              required: 'URL is required'
            })}
            defaultValue={initialValue}
            message={errors.url?.message}
            placeholder="Enter social account URL"
            status={errors.url && 'error'}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-edit-account"
          htmlType="submit"
          loading={isLoading}
        >Add Social Account
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
