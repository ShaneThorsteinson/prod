import Hexagon from 'components/ui/hexagon'
import IconGameController from 'icons/game-controller'
import IconStar from 'icons/star'
import IconUserGear from 'icons/user-gear'
import Link from 'next/link'

export default function NotificationsDropdown ({ messages = [] }) {
  return (
    <div className="notifications-dropdown custom-scroll">
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconUserGear />} className="text-[#5A636C] mr-4" />
        <div className="font-roboto text-sm text-gray-500">In order to complete your account activation, please <Link href="/profile/1"><a className="text-primary-500">add your Activision account ID</a></Link></div>
      </div>
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconStar />} className="text-primary-500 mr-4" />
        <div className="font-roboto text-sm text-gray-500">Congrats! You’ve been promoted!Lorem ipsum dolor sit amet consectetur...</div>
      </div>
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconGameController />} className="text-[#0071ee] mr-4" />
        <div className="font-roboto text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet nibh et lorem commodo.</div>
      </div>
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconUserGear />} className="text-[#5A636C] mr-4" />
        <div className="font-roboto text-sm text-gray-500">In order to complete your account activation, please <Link href="/profile/1"><a className="text-primary-500">add your Activision account ID</a></Link></div>
      </div>
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconStar />} className="text-primary-500 mr-4" />
        <div className="font-roboto text-sm text-gray-500">Congrats! You’ve been promoted!Lorem ipsum dolor sit amet consectetur...</div>
      </div>
      <div className="p-4 flex items-center">
        <Hexagon icon={<IconGameController />} className="text-[#0071ee] mr-4" />
        <div className="font-roboto text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet nibh et lorem commodo.</div>
      </div>
    </div>
  )
}
