import t from 'prop-types'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCrosshair from 'icons/crosshair'
import Input from 'components/ui/input'
import { useForm } from 'react-hook-form'
import Tabs from 'components/ui/tabs'
import PremiumFeature from 'components/premium-feature'
import TeamLogo from 'components/team/team-logo'
import { useMutation, useQueryClient } from 'react-query'
import ApiService from 'helpers/api-service'

export default function ModalEditTeam ({ team, onClose = f => f, ...props }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(data => ApiService.updateTeam(team.id, data), {
    onSuccess: data => {
      queryClient.setQueryData(['team', { id: team.id }], { ...team, ...data })
    }
  })

  const onSubmit = (data) => {
    mutateAsync(data)
      .then(() => onClose())
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Edit Team Info"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
      />
      <Modal.Body>
        <form id="form-edit-team-info" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name', {
              required: 'Team name is required'
            })}
            label="Team name"
            // message={errors.name?.message}
            placeholder="Enter team name"
            status={errors.name && 'error'}
            defaultValue={team.name}
          />
        </form>

        <Tabs size="small" className="mt-4" defaultActiveKey="1">
          <Tabs.Item tab="Select team logo" key="logo">
            <div className="mt-4 grid grid-cols-5 gap-x-3 gap-y-2">
              <TeamLogo isSelected />
              <TeamLogo image="/demo/agents-logo-1.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-3.png" isLocked />
              <TeamLogo image="/demo/agents-logo-4.png" isLocked />
              <TeamLogo image="/demo/agents-logo-5.png" isLocked />
              <TeamLogo image="/demo/agents-logo-8.png" isLocked />
              <TeamLogo image="/demo/agents-logo-13.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-16.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-18.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-21.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-22.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-24.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-1.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-3.png" isLocked />
              <TeamLogo image="/demo/agents-logo-4.png" isLocked />
              <TeamLogo image="/demo/agents-logo-5.png" isLocked />
              <TeamLogo image="/demo/agents-logo-8.png" isLocked />
              <TeamLogo image="/demo/agents-logo-13.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-16.svg" isLocked />
              <TeamLogo image="/demo/agents-logo-18.svg" isLocked />
            </div>
          </Tabs.Item>
          <Tabs.Item tab="Custom team logo" key="custom">
            <PremiumFeature className="mt-10 mb-6" />
          </Tabs.Item>
        </Tabs>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          loading={isLoading}
          form="form-edit-team-info"
          htmlType="submit"
        >Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalEditTeam.propTypes = {
  team: t.object.isRequired
}
