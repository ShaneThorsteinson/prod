import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import IconCreditCard from 'icons/credit-card'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Message from 'components/ui/message/message'
import ApiService from 'helpers/api-service'

export default function ModalCreateWallet ({ title, description, onClose = f => f, onSuccess = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [countryCode, setCountryCode] = useState(null)

  const onSubmit = data => {
    if (!phoneNumber || !countryCode) {
      setError('Enter your phone number')
      return
    }

    setIsLoading(true)
    ApiService.createWallet({
      ...data,
      phoneNumber,
      countryCode
    })
      .then(data => {
        onSuccess(data)
        onClose()
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCreditCard size={16} />}
        iconClass="text-primary-500"
        title="Create or link your Wallet"
        description="Please enter your information correctly, or else our payment partner cannot confirm your identity!"
      />
      <Modal.Body>
        <form id="form-create-wallet" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            {...register('firstName', {
              required: 'First name is required'
            })}
            label="First name"
            message={errors.firstName?.message}
            placeholder="Enter your first name"
            status={errors.firstName && 'error'}
          />

          <Input
            {...register('lastName', {
              required: 'Last name is required'
            })}
            label="Last name"
            message={errors.lastName?.message}
            placeholder="Enter your last name"
            status={errors.lastName && 'error'}
          />

          <Input
            {...register('email', {
              required: 'Email is required'
            })}
            label="Email"
            message={errors.email?.message}
            placeholder="Enter your email"
            status={errors.email && 'error'}
          />

          <Input.Phone
            label="Phone number"
            onChange={(value, data) => {
              setCountryCode(data.dialCode)
              setPhoneNumber(value.slice(data.dialCode.length))
            }}
          />
        </form>
        {error && <Message type="error" className="mt-4" onClose={() => setError(null)}>{error}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-create-wallet"
          htmlType="submit"
          loading={isLoading}
        >Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
