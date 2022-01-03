import Spinner from 'components/spinner/spinner'
import Message from 'components/ui/message/message'
import ApiService from 'helpers/api-service'
import { useAuth } from 'hooks/use-auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function InvitePage () {
  const { user, isLoading: isLoadingAuth } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState(null)
  const router = useRouter()
  const inviteCode = router.query.inviteCode

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/signin')
      return
    }

    if (!isLoadingAuth && user && inviteCode) {
      ApiService.joinTeamByInvite(inviteCode)
        .then(team => {
          router.push(`/my-account/teams/${team.id}`)
        })
        .catch(err => setMessage(err.message))
        .finally(() => setIsLoading(false))
    }
  }, [user, isLoading, inviteCode])

  return (
    <div className="min-h-screen flex justify-center items-center">
      {(isLoadingAuth || isLoading) && <Spinner />}
      {message && (
        <div>
          <Message>{message}</Message>
          <div className="text-center mt-2">
            <Link href="/">
              <a className="text-primary-500 underline">Home page</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
