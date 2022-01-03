import { useForm } from 'react-hook-form'
import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import IconGameController from 'icons/game-controller'
import useAsync from 'hooks/use-async'
import ApiService from 'helpers/api-service'
import Message from 'components/ui/message'

const ModalEditVideoReel = ({ onSave, title, initialValue = '', onClose = f => f, ...props }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { execute, status, error } = useAsync(ApiService.updateMe, false)

  const onSubmit = (data) => {
    execute({
      videoReel: data.url
    })
      .then(() => {
        if (!error) {
          onSave(data.url)
        }
      })
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController />}
        iconClass="text-[#124A8A]"
        title={initialValue ? 'Edit Your Video Reel' : 'Add Your Video Reel'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <form id="form-edit-video-reel" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('url', {
              required: 'URL is required',
              pattern: {
                value: /(youtube\.com|youtu\.be|vimeo\.com)/,
                message: 'Bad video URL'
              }
            })}
            defaultValue={initialValue}
            message={errors.url?.message}
            placeholder="Paste YouTube or Vimeo link"
            status={errors.url && 'error'}
          />
        </form>
        {error && <Message type="error" className="mt-4">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-edit-video-reel"
          htmlType="submit"
          loading={status === 'pending'}
        >Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEditVideoReel
