import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import IconLock from 'icons/lock'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ModalChangePassword ({ title, description, onClose = f => f, onConfirm = f => f, ...props }) {
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
        icon={<IconLock size={16} />}
        iconClass="text-primary-500"
        title="Change Password"
        description="Your memorable Password should have a minimum of 8 characters, including at least one uppercase letter, one number and one special character. Should not have spaces."
      />
      <Modal.Body>
        <form id="form-remove-account" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input.Password
            {...register('currentPassword', {
              required: 'Current password is required'
            })}
            message={errors.currentPassword?.message}
            placeholder="Enter current password"
            status={errors.currentPassword && 'error'}
          />
          <Input.Password
            {...register('newPassword', {
              required: 'New password is required'
            })}
            message={errors.newPassword?.message}
            placeholder="Enter new password"
            status={errors.newPassword && 'error'}
          />
          <Input.Password
            {...register('rePassword', {
              required: 'Re-type password is required'
            })}
            message={errors.rePassword?.message}
            placeholder="Re-type new password"
            status={errors.rePassword && 'error'}
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
        >Change Password
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
