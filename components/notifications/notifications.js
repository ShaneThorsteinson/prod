import clsx from 'clsx'
import Popover from 'components/ui/popover'
import IconBellSimple from 'icons/bell-simple'
import Hexagon from 'components/ui/hexagon'
import IconGameController from 'icons/game-controller'
import { useEffect, useState } from 'react'
import useSocket from 'hooks/use-socket'
import { useQuery } from 'react-query'
import { useAuth } from 'hooks/use-auth'
import ApiService from 'helpers/api-service'

const NotificationContent = ({ messages = [] }) => {
  return (
    <div className="notifications-dropdown custom-scroll">
      {messages.map((message, index) => {
        return (
          <div key={message?.id ?? index} className="p-4 flex items-center">
            <Hexagon icon={<IconGameController />} className="text-[#5A636C] mr-4" />
            <div className="font-roboto text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: message.content }} />
          </div>
        )
      })}
    </div>
  )
}

export default function Notifications ({ className, ...props }) {
  const [isUnread, setIsUnread] = useState(false)
  const [messages, setMessages] = useState([])
  const { user } = useAuth()
  const io = useSocket()

  const classes = clsx('notifications', {
    'notifications--unread': isUnread
  }, className)

  const { data: initialMessages = [] } = useQuery('notifications', ApiService.notifications, {
    retry: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    enabled: !!user?.id
  })

  const pushMessage = (msg) => {
    setMessages(old => [msg, ...old])
  }

  const handleVisibleChange = (visible) => {
    if (visible && messages.find(item => !item.isRead)) {
      // TODO: update the isRead property of messages
      ApiService.readNotifications()
        .then(() => setIsUnread(false))
    }
  }

  useEffect(() => {
    if (initialMessages.length === 0) {
      return
    }
    setMessages(initialMessages)
  }, [initialMessages])

  useEffect(() => {
    if (messages.length > 0 && messages.find(item => !item.isRead)) {
      setIsUnread(true)
    }
  }, [messages])

  useEffect(() => {
    io.on('notification', pushMessage)
  }, [])

  return (
    <Popover
      onVisibleChange={handleVisibleChange}
      content={<NotificationContent messages={messages} />}
      placement="bottomEnd"
      fixed
    >
      <div className={classes} {...props}>
        <div className="notifications__icon"><IconBellSimple size={25} /></div>
      </div>
    </Popover>
  )
}
