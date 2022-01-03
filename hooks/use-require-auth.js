import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './use-auth.js'

function useRequireAuth (redirectUrl = '/signin') {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth.user === null) {
      router.push(redirectUrl)
    }
  }, [auth, router])

  return auth
}

export default useRequireAuth
