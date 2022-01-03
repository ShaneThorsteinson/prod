import ApiService from 'helpers/api-service'
import { useQuery } from 'react-query'
import { useAuth } from './use-auth'

const { createContext, useState, useContext, useEffect } = require('react')

const Context = createContext()

export function ProviderNotifications ({ children }) {
  const notifications = useProvider()
  return <Context.Provider value={notifications}>{children}</Context.Provider>
}

function useProvider () {
  const [isUnread, setIsUnread] = useState(false)
  const { user } = useAuth()

  const { data: messages = [] } = useQuery('notifications', ApiService.notifications, {
    retry: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    enabled: !!user?.id
  })

  useEffect(() => {
    if (messages.length > 0 && messages.find(item => !item.isRead)) {
      setIsUnread(true)
    }
  }, [messages])

  const read = () => {
    if (messages.length === 0) {
      return
    }

    ApiService.readNotifications()
      .then(() => setIsUnread(false))
  }

  return {
    messages,
    isUnread,
    read
  }
}

export default function useNotifications () {
  return useContext(Context)
}
