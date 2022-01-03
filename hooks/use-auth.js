import React, { useContext, createContext } from 'react'
import { removeUserToken, setUserToken } from 'helpers/storage'
import { useQuery } from 'react-query'
import axios from 'axios'

const authContext = createContext()

async function fetchSession () {
  const res = await axios.get('/api/auth/session')
  const session = res.data
  if (Object.keys(session).length) {
    return session
  }
  return null
}

const Wrapped = ({ children }) => {
  const { data, status, refetch } = useQuery(['session'], fetchSession, {
    staleTime: 1000 * 60 * 60 * 3, // 3 hours
    refetchInterval: 1000 * 60 * 5, // 5 minutes
    onSettled: (data, error) => {
      if (data?.token) {
        setUserToken(data.token)
        return
      }
      removeUserToken()
    }
  })

  return (
    <authContext.Provider
      value={{
        user: data?.user,
        token: data?.token,
        isLoading: status === 'loading',
        refetch
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export function AuthProvider ({ children, session }) {
  return (
    <Wrapped>{children}</Wrapped>
  )
}

/**
 * @typedef {Object} User
 * @property {string} id
 */

/**
 * @typedef {Object} Auth
 * @property {User} user
 * @property {string} token
 * @property {boolean} isLoading
 * @property {Function} refetch
 * @returns {Auth}
 */

export const useAuth = () => {
  return useContext(authContext)
}
