import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import useAsync from 'hooks/use-async'
import IconUser from 'icons/user'
import { useForm } from 'react-hook-form'

export default function ModalEditUsername ({ onSave, title, initialValue = '', onClose = f => f, ...props }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { execute, status, error } = useAsync(ApiService.updateMe, false)

  const onSubmit = ({ name }) => {
    execute({
      name
    })
      .then(() => {
        if (!error) {
          onSave(name)
        }
      })
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconUser size={16} />}
        iconClass="text-primary-500"
        title="Edit Username"
      />
      <Modal.Body>
        <form id="form-edit-username" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name', {
              required: 'Username is required',
              pattern: {
                value: /[A-Za-z_-]{3}/,
                message: 'Bad username'
              }
            })}
            defaultValue={initialValue}
            message={errors.name?.message}
            placeholder="Enter Username"
            status={errors.name && 'error'}
          />
        </form>
        {error && <Message type="error" className="mt-4">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-edit-username"
          htmlType="submit"
          loading={status === 'pending'}
        >Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
