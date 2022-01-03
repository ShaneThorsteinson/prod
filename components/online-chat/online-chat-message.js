import clsx from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import User from 'components/user'
dayjs.extend(relativeTime)

export default function OnlineChatMessage ({ user, createdAt, className, children, ...props }) {
  const classes = clsx('online-chat-message', className)

  return (
    <div className={classes} {...props}>
      <div className="flex justify-between items-center">
        <User user={user} />
        <div className="text-gray-900 text-sm font-roboto">{dayjs(createdAt).fromNow()}</div>
      </div>
      <div className="mt-2 font-roboto text-sm text-[#909097]">
        {children}
      </div>
    </div>
  )
}
