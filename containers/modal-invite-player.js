import Button from 'components/ui/button'
import Input from 'components/ui/input'
import Modal from 'components/ui/modal'
import IconGameController from 'icons/game-controller'
import Clipboard from 'react-clipboard.js'
import IconClipboard from 'icons/clipboard'

export default function ModalInvitePlayer ({ team, title, onClose = f => f, ...props }) {
  const clipboardText = `${process.env.NEXT_PUBLIC_APP_URL}/invite/${team.inviteCode}`
  return (
    <Modal onClose={onClose} shined {...props}>
      <Modal.Header
        icon={<IconGameController size={16} />}
        iconClass="text-primary-500"
        title="Invite player by link"
      />
      <Modal.Body>
        <Input
          defaultValue={clipboardText}
          iconRight={
            <Clipboard
              data-clipboard-text={clipboardText}
              className="cursor-pointer"
            >
              <IconClipboard />
            </Clipboard>
          }
          inputClass="pr-9"
          disabled
        />
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button onClick={onClose} outlined>Cancel</Button>
        <Clipboard
          data-clipboard-text={clipboardText}
          className="cursor-pointer"
        >
          <Button shined>Copy link</Button>
        </Clipboard>
      </Modal.Footer>
    </Modal>
  )
}
