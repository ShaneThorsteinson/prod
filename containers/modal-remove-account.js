import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import IconProhibit from 'icons/prohibit'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ModalRemoveAccount ({ title, description, onClose = f => f, onConfirm = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    setIsLoading(true)
    setTimeout(() => {
      onConfirm()
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconProhibit size={16} />}
        iconClass="text-primary-500"
        title={title}
        description={description}
      />
      <Modal.Body>
        <form id="form-remove-account" onSubmit={handleSubmit(onSubmit)}>
          <Input.Password
            {...register('password', {
              required: 'Password is required'
            })}
            message={errors.password?.message}
            placeholder="Enter current password"
            status={errors.password && 'error'}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-remove-account"
          htmlType="submit"
          loading={isLoading}
        >{title}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
