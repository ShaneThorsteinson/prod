import Section from 'components/section'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Checkbox from 'components/ui/checkbox'
import Hexagon from 'components/ui/hexagon'
import IconBellSimple from 'icons/bell-simple'
import IconGearSix from 'icons/gear-six'
import IconLock from 'icons/lock'
import IconProhibit from 'icons/prohibit'
import { useState } from 'react'
import ModalChangePassword from './modal-change-password'
import ModalRemoveAccount from './modal-remove-account'

const TabProfileAccountSettings = () => {
  const [showModalDisableAccount, setShowDisableAccount] = useState(false)
  const [showModalDeleteAccount, setShowDeleteAccount] = useState(false)
  const [showModalChangePassword, setShowModalChangePassword] = useState(false)

  return (
    <>
      {showModalDeleteAccount && (
        <ModalRemoveAccount
          title="Delete Account"
          description="Are you sure that you want to delete your account? This will immediately log you out of your account and you will not be able to log in again."
          onClose={() => setShowDeleteAccount(false)}
        />
      )}

      {showModalDisableAccount && (
        <ModalRemoveAccount
          title="Disable Account"
          description="Your memorable Password should have a minimum of 8 characters, including at least one uppercase letter, one number and one special character. Should not have spaces."
          onClose={() => setShowDisableAccount(false)}
        />
      )}

      {showModalChangePassword && (
        <ModalChangePassword
          onClose={() => setShowModalChangePassword(false)}
        />
      )}

      <div className="mt-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <Block className="p-4 md:p-6">
            <Section.Header
              title="change"
              titleSecondary="password"
              icon={<Hexagon style={{ color: '#0071EF' }} icon={<IconLock />} />}
            />
            <div className="mt-4 text-gray-500 font-roboto">
              Here you can change your password. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvinar.
            </div>
            <Button
              onClick={() => setShowModalChangePassword(true)}
              className="mt-5"
              size="small"
              outlined
            >change password
            </Button>
          </Block>

          <Block className="p-4 md:p-6">
            <Section.Header
              title="notification"
              titleSecondary="center"
              icon={<Hexagon style={{ color: '#0071EF' }} icon={<IconBellSimple />} />}
            />
            <div className="mt-4 text-gray-500 font-roboto">
              Here you can change your notification settings. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci..
            </div>
            <div className="mt-3">
              <Checkbox>I want to receive system notification lorem ipsum dolor...</Checkbox>
              <Checkbox>I want to receive marketing notification lorem ipsum dolor...</Checkbox>
            </div>
          </Block>

          <Block className="p-4 md:p-6">
            <Section.Header
              title="account"
              titleSecondary="removal"
              icon={<Hexagon style={{ color: '#0071EF' }} icon={<IconProhibit />} />}
            />
            <div className="mt-4 text-gray-500 font-roboto">
              Disabling your account means you can recover it at any time after taking this action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <Button.Group className="mt-5">
              <Button
                onClick={() => setShowDisableAccount(true)}
                size="small"
              >Disable account
              </Button>
              <Button
                onClick={() => setShowDeleteAccount(true)}
                size="small"
                outlined
              >Delete account
              </Button>
            </Button.Group>
          </Block>

          <Block className="p-4 md:p-6">
            <Section.Header
              title="other"
              titleSecondary="settings"
              icon={<Hexagon style={{ color: '#0071EF' }} icon={<IconGearSix />} />}
            />
            <div className="mt-4 text-gray-500 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvinar, ornare faucibus magna. Nunc lorem ligula, tempor sed sagittis sed, tincidunt vitae elit.
            </div>
          </Block>
        </div>
      </div>
    </>
  )
}

export default TabProfileAccountSettings
