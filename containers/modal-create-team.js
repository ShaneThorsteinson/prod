import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'
import Input from 'components/ui/input'
import { useForm } from 'react-hook-form'
import Tabs from 'components/ui/tabs'
import PremiumFeature from 'components/premium-feature'
import TeamLogo from 'components/team/team-logo'
import ApiService from 'helpers/api-service'
import Message from 'components/ui/message'
import { useState } from 'react'

const presetLogos = [
  {
    key: 0,
    image: null
  },
  {
    key: 1,
    image: '/demo/agents-logo-1.svg'
  },
  {
    key: 2,
    image: '/demo/agents-logo-4.png'
  },
  {
    key: 3,
    image: '/demo/agents-logo-3.png'
  },
  {
    key: 4,
    image: '/demo/agents-logo-5.png'
  },
  {
    key: 5,
    image: '/demo/agents-logo-8.png'
  },
  {
    key: 6,
    image: '/demo/agents-logo-13.svg'
  },
  {
    key: 7,
    image: '/demo/agents-logo-16.svg'
  },
  {
    key: 8,
    image: '/demo/agents-logo-18.svg'
  },
  {
    key: 9,
    image: '/demo/agents-logo-21.svg'
  },
  {
    key: 10,
    image: '/demo/agents-logo-22.svg'
  },
  {
    key: 11,
    image: '/demo/agents-logo-24.svg'
  },
  {
    key: 12,
    image: '/demo/agents-logo-1.svg'
  },
  {
    key: 13,
    image: '/demo/agents-logo-3.png'
  },
  {
    key: 14,
    image: '/demo/agents-logo-4.png'
  },
  {
    key: 15,
    image: '/demo/agents-logo-5.png'
  },
  {
    key: 16,
    image: '/demo/agents-logo-8.png'
  },
  {
    key: 17,
    image: '/demo/agents-logo-13.svg'
  },
  {
    key: 18,
    image: '/demo/agents-logo-16.svg'
  },
  {
    key: 19,
    image: '/demo/agents-logo-18.svg'
  }
]

export default function ModalCreateTeam ({ onClose = f => f, ...props }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { mutateAsync, isLoading, error } = useMutation(ApiService.createTeam)
  const router = useRouter()
  const isLocked = false
  const [selectedLogo, setSelectedLogo] = useState(presetLogos[0])

  const onSubmit = (data) => {
    mutateAsync(data)
      .then((responseData) => {
        router.push(`/my-account/teams/${responseData.id}`)
      })
  }

  const onSelect = (item) => {
    return e => {
      e.preventDefault()
      setSelectedLogo(item)
    }
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Create a Team"
        description="Select a team name and logo"
      />
      <Modal.Body>
        <form id="form-edit-team-info" onSubmit={handleSubmit(onSubmit)}>
          {selectedLogo?.image && <Input type="hidden" {...register('logo')} value={selectedLogo.image} />}
          <Input
            {...register('name', {
              required: 'Team name is required'
            })}
            label="Team name"
            // message={errors.name?.message}
            placeholder="Enter team name"
            status={errors.name && 'error'}
          />
        </form>

        <Tabs size="small" className="mt-4" defaultActiveKey="1">
          <Tabs.Item tab="Select team logo" key="logo">
            <div className="mt-4 grid grid-cols-5 gap-x-3 gap-y-2">
              {presetLogos.map(item => (
                <TeamLogo
                  key={item.key}
                  {...item}
                  onClick={onSelect(item)}
                  isSelected={selectedLogo && selectedLogo.key === item.key}
                  isLocked={isLocked}
                />
              ))}
            </div>
          </Tabs.Item>
          {/* <Tabs.Item tab="Custom team logo" key="custom">
            <PremiumFeature className="mt-10 mb-6" />
          </Tabs.Item> */}
        </Tabs>
        {error && <Message type="error">{error.message}</Message>}
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          loading={isLoading}
          form="form-edit-team-info"
          htmlType="submit"
        >Create a Team
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
