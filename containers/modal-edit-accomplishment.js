import Button from 'components/ui/button'
import Hexagon from 'components/ui/hexagon'
import Input from 'components/ui/input'
import Message from 'components/ui/message'
import Modal from 'components/ui/modal'
import ApiService from 'helpers/api-service'
import useAsync from 'hooks/use-async'
import IconGameController from 'icons/game-controller'
import IconMedal from 'icons/medal'
import IconStar from 'icons/star'
import IconTrophy from 'icons/trophy'
import { useForm } from 'react-hook-form'

const getHexagonIconProps = (id) => {
  switch (id) {
    case '1':
      return {
        icon: <IconTrophy size={16} />,
        iconClass: 'text-primary-500'
      }
    case '2':
      return {
        icon: <IconStar size={16} />,
        iconClass: 'text-[#124A8A]'
      }
    case '3':
      return {
        icon: <IconMedal size={16} />,
        iconClass: 'text-[#26806F]'
      }
    default:
      return {
        icon: <IconGameController size={16} />,
        iconClass: 'text-[#D48337]'
      }
  }
}

export default function ModalEditAccomplishment ({ onSave = f => f, initialData = null, onClose = f => f, ...props }) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()
  const iconSelectedType = watch('type', '1')
  const { status, execute, error } = useAsync(initialData ? ApiService.updateAccomplishment : ApiService.addAccomplishment, false)

  const onSubmit = data => {
    if (initialData?.id) {
      execute(initialData.id, data)
        .then(resData => !error ? onSave(resData) : null)
    } else {
      execute(data)
        .then(resData => !error ? onSave(resData) : null)
    }
  }

  const handleSelectIcon = id => setValue('type', id)

  return (
    <Modal onClose={onClose} width={600} shined {...props}>
      <Modal.Header
        title={initialData ? 'Edit Accomplishment' : 'Add Accomplishment'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
        {...getHexagonIconProps(iconSelectedType)}
      />
      <Modal.Body>
        <form id="form-edit-accomplishment" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('title', {
              required: 'Title is required'
            })}
            defaultValue={initialData?.title}
            message={errors.title?.message}
            label="Accomplishment title"
            placeholder="E.g ex-pro for optic gaming in 2016"
            status={errors.title && 'error'}
          />
          <Input.Textarea
            {...register('description', {
              required: 'Description is required'
            })}
            className="mt-2"
            maxLength={370}
            defaultValue={initialData?.description}
            message={errors.description?.message}
            rows={5}
            label="Accomplishment description"
            placeholder="Please, accomplishment description must be concise and clear"
            status={errors.description && 'error'}
          />

          <div className="mt-4 flex justify-between items-center">
            <label className="ui-input__label">Select Icon</label>
            <input {...register('type')} type="hidden" defaultValue="1" />
            <Hexagon.Select defaultValue="1" onSelect={handleSelectIcon}>
              <Hexagon id="1" className="text-primary-500 cursor-pointer" icon={<IconTrophy />} />
              <Hexagon id="2" className="text-[#124A8A] cursor-pointer" icon={<IconStar />} />
              <Hexagon id="3" className="text-[#26806F] cursor-pointer" icon={<IconMedal />} />
              <Hexagon id="4" className="text-[#D48337] cursor-pointer" icon={<IconGameController />} />
            </Hexagon.Select>
          </div>
        </form>
        {error && <Message className="mt-4" type="error">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-edit-accomplishment"
          htmlType="submit"
          loading={status === 'pending'}
        >{initialData ? 'Save changes' : 'Add Accomplishment'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
