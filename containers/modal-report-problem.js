import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import Radio from 'components/ui/radio'
import IconQuestion from 'icons/question'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ModalReportProblem ({ title, description, onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const problemValue = watch('problem')

  const onSubmit = data => {
    setIsLoading(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconQuestion size={16} />}
        iconClass="text-primary-500"
        title="Report a Problem"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sem ut vehicula feugiat."
      />
      <Modal.Body>
        <form id="form-report-problem" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <Radio
              {...register('problem')}
              value="1"
            >
              Oponent didn’t show up
            </Radio>
            <Radio
              {...register('problem')}
              value="2"
            >
              Opponent is taking too long
            </Radio>
            <Radio
              {...register('problem')}
              value="3"
            >
              Opponent is being offensive
            </Radio>
            <Radio
              {...register('problem')}
              value="other"
            >
              Other
            </Radio>

            {problemValue === 'other' && (
              <Input.Textarea name="other" placeholder="Please, describe the problem" />
            )}
          </div>

        </form>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          form="form-report-problem"
          htmlType="submit"
          loading={isLoading}
        >report a problem
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
