import clsx from 'clsx'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Hexagon from 'components/ui/hexagon'
import IconEnvelope from 'icons/envelope'
import IconFacebook from 'icons/facebook'
import IconTwitter from 'icons/twitter'
import IconPencilLine from 'icons/pencil-line'
import IconTrash from 'icons/trash'
import IconLink from 'icons/link'
import { useState } from 'react'
import ModalEditActivisionAccount from 'containers/modal-edit-activision-account'
import ModalRemoveConfirm from 'containers/modal-remove-confirm'
import ModalEditFacebookAccount from 'containers/modal-edit-facebook-account'
import ModalEditSocialAccount from 'containers/modal-edit-social-account'
import { useAuth } from 'hooks/use-auth'

const AccountItem = ({ icon, iconClass, iconStatus = null, label, value, addText, onAdd = f => f, onEdit = null, onRemove = null }) => {
  return (
    <Block
      shined={false}
      className="py-3 px-4 flex items-center"
    >
      <Hexagon
        size={60}
        className={clsx('mr-4', iconClass)}
        icon={icon}
        status={iconStatus}
      />
      <div className="flex-1 flex flex-wrap justify-between items-center">
        {!value && <Button.Link onClick={onAdd}>{addText}</Button.Link>}
        {value && (
          <div className="flex flex-col flex-1">
            <span className="uppercase text-gray-900 text-sm">{label}</span>
            <span className="text-gray-500">{value}</span>
          </div>
        )}
        {(onEdit || onRemove) && (
          <Button.Group className="w-full lg:w-auto">
            {value && onEdit && (
              <Button
                onClick={onEdit}
                icon={<IconPencilLine size={12} />}
                type="secondary"
                size="x-small"
                outlined
              >Edit
              </Button>
            )}
            {value && onRemove && (
              <Button
                onClick={onRemove}
                icon={<IconTrash />}
                type="secondary"
                size="x-small"
                outlined
              >Remove
              </Button>
            )}
          </Button.Group>
        )}
      </div>
    </Block>
  )
}

const TabProfileLinkedAccounts = () => {
  const { user } = useAuth()
  const [showModalEditActivision, setShowModalEditActivision] = useState(false)
  const [activisionAccountValue, setActivisionAccountValue] = useState(user?.activisionId)
  const [showModalEditFacebook, setShowModalEditFacebook] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)

  const [showModalEditAccount, setShowModalEditAccount] = useState(false)
  return (
    <>
      {showModalEditActivision && (
        <ModalEditActivisionAccount
          onClose={() => setShowModalEditActivision(false)}
          onSave={setActivisionAccountValue}
          initialValue={activisionAccountValue}
        />
      )}

      {showModalRemove && (
        <ModalRemoveConfirm
          title="Remove Social Account"
          confirmText="Remove Social Account"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
          onClose={() => setShowModalRemove(false)}
        />
      )}

      {showModalEditFacebook && (
        <ModalEditFacebookAccount
          onClose={() => setShowModalEditFacebook(false)}
        />
      )}

      {showModalEditAccount && (
        <ModalEditSocialAccount
          onClose={() => setShowModalEditAccount(false)}
        />
      )}

      <div className="mt-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="font-semibold text-white text-[22px] mb-4 md:mb-0">Your Linked Accounts</div>
          {/* <Button
            onClick={() => setShowModalEditAccount(true)}
            size="small"
            outlined
          >add social account
          </Button> */}
        </div>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <AccountItem
            label="Activision account"
            value={activisionAccountValue}
            addText="+ Add your activision account"
            icon={<img src="/assets/images/brands/activision.svg" alt="" />}
            iconClass="text-[#5A636C]"
            iconStatus="off"
            onAdd={() => setShowModalEditActivision(true)}
            onEdit={() => setShowModalEditActivision(true)}
            // onRemove={() => setShowModalRemove(true)}
          />

          {/* <AccountItem
            label="Game battles account"
            value="TrickyHunter-1208133"
            addText="+ Add your gb account"
            icon={<img src="/assets/images/brands/gb.svg" alt="" />}
            iconClass="text-[#1367E2]"
            onAdd={() => setShowModalEditFacebook(true)}
            onEdit={() => setShowModalEditFacebook(true)}
          /> */}

          <AccountItem
            label="Email address"
            value={user?.email}
            addText="+ Add email address"
            icon={<IconEnvelope size={18} />}
            iconClass="text-[#26806F]"
          />
{/*
          <AccountItem
            label="CMG account"
            value="TrickyHunter-1208133"
            addText="+ Add your cmg account"
            icon={<img src="/assets/images/brands/cmg.png" alt="" />}
            iconClass="text-[#65C25C]"
            onAdd={() => setShowModalEditFacebook(true)}
            onEdit={() => setShowModalEditFacebook(true)}
          />

          <AccountItem
            label="Facebook account"
            value="facebook.com/john.doe"
            addText="+ Add your facebook account"
            icon={<IconFacebook size={18} />}
            iconClass="text-[#4267B2]"
            onAdd={() => setShowModalEditFacebook(true)}
            onEdit={() => setShowModalEditFacebook(true)}
          /> */}

          {/* <AccountItem
            label="Twitter account"
            value="twitter.com/john.doe"
            addText="+ Add your twitter account"
            icon={<IconTwitter />}
            iconClass="text-[#00ACED]"
            onAdd={() => setShowModalEditFacebook(true)}
            onEdit={() => setShowModalEditFacebook(true)}
          /> */}

          {/* <AccountItem
            label="Other account"
            value="www.otheraccount.com/john.doe"
            addText="+ Add other account"
            icon={<IconLink size={14} />}
            iconClass="text-primary-500"
            onAdd={() => setShowModalEditFacebook(true)}
            onEdit={() => setShowModalEditFacebook(true)}
            onRemove={() => setShowModalRemove(true)}
          /> */}
        </div>
      </div>
    </>
  )
}

export default TabProfileLinkedAccounts
