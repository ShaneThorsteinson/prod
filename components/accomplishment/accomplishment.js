import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Divider from 'components/ui/divider'
import Hexagon from 'components/ui/hexagon'
import IconMedal from 'icons/medal'
import IconPencilLine from 'icons/pencil-line'
import IconStar from 'icons/star'
import IconTrash from 'icons/trash'
import IconTrophy from 'icons/trophy'
import IconGameController from 'icons/game-controller'
import clsx from 'clsx'
import { useState } from 'react'
import ModalRemoveConfirm from 'containers/modal-remove-confirm'
import ModalEditAccomplishment from 'containers/modal-edit-accomplishment'
import ApiService from 'helpers/api-service'

export default function Accomplishment ({
  title,
  id,
  type = '1',
  description,
  extraLink,
  onRemove = f => f,
  onSave = f => f
}) {
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [showModalAccomplishment, setShowModalAccomplishment] = useState(false)

  const removeAsyncFn = () => ApiService.deleteAccomplishment(id)
  const handleRemove = () => {
    setShowModalRemove(false)
    onRemove(id)
  }

  return (
    <>
      {showModalRemove && (
        <ModalRemoveConfirm
          removeAsyncFn={removeAsyncFn}
          title="Accomplishment"
          confirmText="Remove Accomplishment"
          description="Are you sure that you want to remove accomplishment?"
          onClose={() => setShowModalRemove(false)}
          onRemove={handleRemove}
        />
      )}

      {showModalAccomplishment && (
        <ModalEditAccomplishment
          onClose={() => setShowModalAccomplishment(false)}
          onSave={data => {
            setShowModalAccomplishment(false)
            onSave(data)
          }}
          initialData={{
            id,
            title,
            type,
            description
          }}
        />
      )}

      <Block className="p-4 md:p-6 group">
        <Divider>
          <Hexagon
            size={60}
            className={clsx({
              'text-primary-500': type === '1',
              'text-[#4781D8]': type === '2',
              'text-success-500': type === '3',
              'text-warning-500': type === '4'
            })}
            icon={(
              <>
                {type === '1' && <IconTrophy size={20} />}
                {type === '2' && <IconStar size={20} />}
                {type === '3' && <IconMedal size={20} />}
                {type === '4' && <IconGameController size={20} />}
              </>
            )}
          />
        </Divider>
        <div className="text-center space-y-4">
          <div className="text-white text-lg font-semibold">{title}</div>
          <div className="text-gray-500">{description}</div>
          {/* <a href="#" className="inline-block text-primary-100">Some additional external link</a> */}
          <Button.Group className="w-full justify-center lg:w-auto lg:invisible lg:group-hover:visible">
            <Button
              onClick={() => setShowModalAccomplishment(true)}
              icon={<IconPencilLine size={12} />}
              type="secondary"
              size="x-small"
              outlined
            >
              Edit
            </Button>
            <Button
              onClick={() => setShowModalRemove(true)}
              icon={<IconTrash />}
              type="secondary"
              size="x-small"
              outlined
            >
              Remove
            </Button>
          </Button.Group>
        </div>
      </Block>
    </>
  )
}
