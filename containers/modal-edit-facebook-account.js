import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconFacebook from 'icons/facebook'

export default function ModalEditFacebookAccount ({ onSave = f => f, initialValue = '', onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    setIsLoading(true)
    setTimeout(() => {
      onSave(data.id)
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconFacebook size={18} />}
        iconClass="text-[#4267B2]"
        title="Edit Facebook Account URL"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <form id="form-edit-account" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('id', {
              required: 'URL is required'
            })}
            defaultValue={initialValue}
            message={errors.id?.message}
            placeholder="Paste facebook profile url"
            status={errors.id && 'error'}
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
        >Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
