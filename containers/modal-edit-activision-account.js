import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

export default function ModalEditActivisionAccount ({ onSave = f => f, initialValue = '', onClose = f => f, ...props }) {
  const { mutate, isLoading } = useMutation(ApiService.updateMe)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    mutate({
      activisionId: data.id
    }, {
      onSuccess: () => {
        onSave(data.id)
        onClose()
      }
    })
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<img src="/assets/images/brands/activision.svg" alt="" />}
        iconClass="text-[#5A636C]"
        title="Activision Account ID"
        description="Please, add your Activsion account ID. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Modal.Body>
        <form id="form-edit-account" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('id', {
              required: 'Account ID is required'
            })}
            defaultValue={initialValue}
            message={errors.id?.message}
            placeholder="Enter Activision account ID"
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
