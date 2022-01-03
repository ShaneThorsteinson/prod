import { useMediaQuery } from 'beautiful-react-hooks'
import clsx from 'clsx'
import Button from 'components/ui/button'
import ModalChatRules from 'containers/modal-chat-rules'
import ApiService from 'helpers/api-service'
import useLockBodyScroll from 'hooks/use-lock-body-scroll'
import usePortal from 'hooks/use-portal'
import IconClose from 'icons/close'
import IconPaperPlaneTilt from 'icons/paper-plane-tilt'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import OnlineChatMessage from './online-chat-message'
import useSocket from 'hooks/use-socket'

export default function OnlineChatTournament ({ className, matchId, isVisible = true, onToggleVisible = f => f }) {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [showRules, setShowRules] = useState(false)
  const isSmallDevice = useMediaQuery('(max-width: 1279px)')
  const io = useSocket()
  const el = usePortal('online-chat')
  const classes = clsx('online-chat', {
    'online-chat--visible': isVisible
  }, className)

  useEffect(() => {
    ApiService.getTournamentMessages(matchId)
      .then(setMessages)

    const matchMessagesId = `tournament_messages:${matchId}`
    io.on(matchMessagesId, res => {
      if (res.action === 'NEW') {
        setMessages(messages => [
          ...messages,
          res.payload
        ])
      }
    })

    return () => {
      io.off(matchMessagesId)
    }
  }, [])

  useLockBodyScroll(isSmallDevice && isVisible)

  const handleClickRules = event => {
    event.stopPropagation()
    setShowRules(!showRules)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const message = formData.get('message')

    setIsLoading(true)
    ApiService.createTournamentMessage(matchId, { message })
      .then(resultData => {
        // setMessages(messages => [
        //   ...messages,
        //   resultData
        // ])
        form.reset()
      })
      .finally(() => setIsLoading(false))
  }

  if (!el) {
    return null
  }

  return (
    <>
      {showRules && <ModalChatRules onClose={() => setShowRules(false)} />}

      {createPortal(
        <div className={classes}>
          {isVisible && <div className="online-chat__bg" onClick={onToggleVisible} />}
          <div className="online-chat__content online-chat__content_tournament">
            <header className="online-chat__header" onClick={onToggleVisible}>
              <div className="text-gray-500 uppercase">
                <strong className="text-white">online</strong> chat
              </div>

              {isVisible && (
                <div className="flex items-center">
                  <Button onClick={handleClickRules} size="x-small" type="secondary" outlined>Chat rules</Button>
                  <div onClick={onToggleVisible} className="online-chat__header-close">
                    <IconClose size={24} />
                  </div>
                </div>
              )}
            </header>

            <div
              className="online-chat__messages custom-scroll"
            >
              {messages.length > 0 && messages.map(({ id, createdAt, user, message }) => (
                <OnlineChatMessage
                  key={id}
                  user={user}
                  createdAt={createdAt}
                >{message}
                </OnlineChatMessage>
              ))}
            </div>

            <div className="online-chat__write">
              <form
                onSubmit={handleSubmit}
                className="flex justify-between"
              >
                <input
                  name="message"
                  className="flex-1"
                  placeholder="Start typing..."
                  disabled={isLoading}
                  required
                />
                <button
                  disabled={isLoading}
                  className="online-chat__submit"
                >
                  <IconPaperPlaneTilt size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>,
        el
      )}
    </>
  )
}
