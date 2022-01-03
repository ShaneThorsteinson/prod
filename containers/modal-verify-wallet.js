import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import IconCreditCard from 'icons/credit-card'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Message from 'components/ui/message/message'

export default function ModalVerifyWallet ({ title, description, verificationId, onClose = f => f, onSuccess = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)

  const onSubmit = data => {
    setIsLoading(true)
    ApiService.verifyWallet(data)
      .then(data => {
        onSuccess(data)
        onClose()
      })
      .catch(() => setError('Try again'))
      .finally(() => setIsLoading(false))
  }

  return (
    <Modal shined {...props}>
      <Modal.Header
        icon={<IconCreditCard size={16} />}
        iconClass="text-primary-500"
        title="Verify your Wallet"
      />
      <Modal.Body>
        <form id="form-verify-wallet" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            {...register('verificationId')}
            defaultValue={verificationId}
            type="hidden"
          />
          <Input
            {...register('verificationToken')}
            message={errors.verificationToken?.message}
            placeholder="######"
            status={errors.verificationToken && 'error'}
          />
        </form>
        {error && <Message className="mt-4" type="error" onClose={() => setError(null)}>{error}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-verify-wallet"
          htmlType="submit"
          loading={isLoading}
        >Verify phone number
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
