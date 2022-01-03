import Section from 'components/section'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Hexagon from 'components/ui/hexagon'
import Input from 'components/ui/input'
import Message from 'components/ui/message'
import ApiService from 'helpers/api-service'
import IconCrosshair from 'icons/crosshair'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import ModalRemoveConfirm from './modal-remove-confirm'

export default function SectionFindScrim ({ team, isCaptain = false }) {
  const [showModalFind, setShowModalFind] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { mutateAsync, isLoading, error } = useMutation(ApiService.addScrim)
  const [isDisabled, setIsDisabled] = useState(true)
  const router = useRouter()
  const { id: teamId } = router.query

  useEffect(() => {
    if (!team?.players) {
      return
    }
    const joinedUsers = team.players.filter(item => item.status === 'joined')
    if (joinedUsers.length < 4) {
      setIsDisabled(true)
      return
    }
    setIsDisabled(false)
  }, [team])

  const onSubmit = data => {
    mutateAsync({ teamId, ...data })
      .then((res) => router.push(`/scrim-finder/scrims/${res.id}`))
  }

  return (
    <>
      {showModalFind && (
        <ModalRemoveConfirm
          icon={<IconCrosshair size={16} />}
          title="Find a Scrim"
          confirmText="Yes, find a scrim"
          description="Some of invitations are still in process, do you want to go forward without them?"
          onClose={() => setShowModalFind(false)}
        />
      )}

      <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-4">
        <Section.Header
          title="Find"
          titleSecondary="Scrim"
          icon={<Hexagon className="text-primary-500" icon={<IconCrosshair size={14} />} />}
        />
        <div className="mt-4 font-roboto text-gray-500">Any special requests? Write down HP only, SND only or specific regions for your scrim. Let your opponents know what you want to play so there isn&apos;t any confusion!</div>
        {isDisabled && <div className="mt-2 font-roboto text-primary-500">To start your find, add 4 teammate</div>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4"
        >
          <Input.Textarea
            {...register('specialRequests')}
            status={errors.specialRequests && 'error'}
            placeholder="Any special requests?"
            rows={5}
            disabled={!isCaptain || isDisabled}
          />
          {error && <Message className="mt-4" type="error">{error.message}</Message>}
          <Button
            className="mt-4 w-full"
            htmlType="submit"
            icon={<IconCrosshair size={18} />}
            loading={isLoading}
            disabled={!isCaptain || isDisabled}
          >find scrim
          </Button>
        </form>
      </Block>
    </>
  )
}
