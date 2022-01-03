/**
 * @typedef {import('socket.io-client').Socket} Socket
 */

import { io } from 'socket.io-client'
import { useAuth } from './use-auth'
const { createContext, useContext, useEffect, useMemo } = require('react')

const Context = createContext()

export function SocketProvider ({ children }) {
  const { user } = useAuth()
  /** @type {Socket} */
  const socket = useMemo(() => {
    if (process.browser) {
      return io(process.env.NEXT_PUBLIC_SOCKET_URL, { autoConnect: false })
    }
    return null
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      socket.onAny((event, ...args) => {
        console.group('socket.io', event)
        console.log(args)
        console.groupEnd()
      })
    }

    return () => {
      socket.off()
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!user?.id) {
      return
    }

    socket.auth = {
      userId: user.id
    }
    socket.connect()
  }, [user])

  return <Context.Provider value={socket}>{children}</Context.Provider>
}

/**
 *
 * @returns {Socket}
 */
export default function useSocket () {
  return useContext(Context)
}
