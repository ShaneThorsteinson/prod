import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import { useState } from 'react'
import IconCrosshair from 'icons/crosshair'
import List from 'components/ui/list'
import IconXCircle from 'icons/x-circle'

export default function ModalDowngrageConfirm ({ onClose = f => f, ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal width={600} onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconCrosshair size={18} />}
        iconClass="text-primary-500"
        title="Downgrade Membership to Free"
        description="After April 13, 2021, your account features and limits will change:"
      />
      <Modal.Body>
        <List>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>All Prestige members can find scrim</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Unlimited number of teams</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Choose predefined team logo or upload yours</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Prestige scrim finder</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Earn 10% more ELO after winning scrim</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Priority in tournament seed</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Access to Premium and standard tournaments</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Prestige player resume PDF export</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Post a highlight video on profile</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>Track specific in-game states</List.Item>
          <List.Item className="font-roboto" icon={<IconXCircle size={18} className="text-primary-500" />}>See exact player rank</List.Item>
        </List>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Button
          shined
          onClick={handleConfirm}
          loading={isLoading}
        >downgrade membership to free
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
