import Notifications from 'components/notifications'
import Popover from 'components/ui/popover'
import RankDivision from 'components/ui/rank-division'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { useRef } from 'react'

const AccountMenu = () => {
  const handleClickLogout = e => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className="w-[188px]">
      <div className="p-4 text-gray-500 hover:text-gray-100 font-bold border-b border-white border-opacity-5">
        <Link href="/my-account/overview"><a>My Profile</a></Link>
      </div>
    {/* <div className="p-4 text-gray-500 hover:text-gray-100 font-bold border-b border-white border-opacity-5">
        <Link href="/membership"><a>Upgrade Membership</a></Link>
      </div> */}
      {/* <div className="p-4 text-gray-500 hover:text-gray-100 font-bold border-b border-white border-opacity-5">
        <Link href="/my-account/account-settings"><a>Account Settings</a></Link>
      </div> */}
       {/* <div className="p-4 text-gray-500 hover:text-gray-100 font-bold border-b border-white border-opacity-5">
        <Link href="/my-account/subscription-settings"><a>Subscription Settings</a></Link>
      </div> */}
      <div className="p-4 text-gray-500 hover:text-gray-100 font-bold">
        <a onClick={handleClickLogout} href="#logout">Log Out</a>
      </div>
    </div>
  )
}

const HeaderUser = ({ user, ...props }) => {
  const headerAvatarRef = useRef()

  return (
    <div className="header-user" {...props}>
      <Notifications />

      <Popover content={<AccountMenu />} fixed>
        <div className="header-user__profile">
          <div className="header-user__avatar cursor-pointer" ref={headerAvatarRef}>
            <div className="header-user__wrap-img">
              {user?.image ? <img src={user.image} alt="" /> : <img className="header-user__no-avatar" src="/assets/images/avatar.svg" alt="" />}
            </div>
          </div>
          <div className="header-user__info">
            <div className="header-user__name">
              {user.name}
            </div>
            <div className="header-user__division">
              <RankDivision size="small" division={user.division} />
            </div>
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default HeaderUser
