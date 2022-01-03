import Accomplishment from 'components/accomplishment'
import Spinner from 'components/spinner'
import Button from 'components/ui/button'
import ApiService from 'helpers/api-service'
import useAsync from 'hooks/use-async'
import { useEffect, useState } from 'react'
import ModalEditAccomplishment from './modal-edit-accomplishment'
import Empty from 'components/ui/empty'

const TabProfileAccomplishments = () => {
  const [showModalAccomplishment, setShowModalAccomplishment] = useState(false)
  const [accomplishments, setAccomplishments] = useState([])

  const { data, status } = useAsync(ApiService.getAllAccomplishments)

  useEffect(() => {
    setAccomplishments(data)
  }, [data])

  const handleUpdateAccomplishment = data => {
    setAccomplishments(accomplishments.map(item => item.id === data.id ? data : item))
  }

  const handleRemoveAccomplishment = id => {
    setAccomplishments(accomplishments.filter(item => item.id !== id))
  }

  return (
    <>
      {showModalAccomplishment && (
        <ModalEditAccomplishment
          onSave={data => {
            setAccomplishments([data, ...accomplishments])
            setShowModalAccomplishment(false)
          }}
          onClose={() => setShowModalAccomplishment(false)}
        />
      )}
      <div className="mt-4">
        {accomplishments?.length > 0 && (
          <div className="flex flex-col items-center md:flex-row justify-between">
            <div className="font-semibold text-white text-[22px] mb-4 md:mb-0">Your Accomplishments</div>
            <Button size="small" onClick={() => setShowModalAccomplishment(true)} outlined>add accomplishment</Button>
          </div>
        )}

        {status === 'success' && accomplishments?.length > 0 && (
          <div className="mt-4 gap-4 grid md:grid-cols-2 lg:grid-cols-3">
            {accomplishments?.map(({ id, type, title, description }) => (
              <Accomplishment
                onSave={handleUpdateAccomplishment}
                onRemove={handleRemoveAccomplishment}
                key={id}
                id={id}
                type={type}
                title={title}
                description={description}
              />
            ))}
          </div>
        )}

        {status === 'pending' && (
          <Spinner />
        )}

        {status === 'success' && accomplishments.length === 0 && (
          <Empty
            image="/assets/images/empty-game.svg"
            description="Your accomplishment board is currently empty. Don’t be shy, add something :)"
            className="mt-4 py-[80px] md:py-[120px]"
          >
            <Button
              size="small"
              className="w-full md:w-auto"
              outlined
              onClick={() => setShowModalAccomplishment(true)}
            >Add Accomplishment
            </Button>
          </Empty>
        )}

      </div>
    </>
  )
}

export default TabProfileAccomplishments
