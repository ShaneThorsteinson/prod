import Layout from 'components/layout'
import Container from 'components/ui/container'
import Spinner from 'components/spinner'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from 'hooks/use-auth'

const withAuth = Component => {
  const Auth = (props) => {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/signin')
      }
    }, [user, isLoading])

    if (isLoading || !user) {
      return (
        <Layout>
          <Container className="mt-20">
            <Spinner className="h-80" />
          </Container>
        </Layout>
      )
    }

    return (
      <Component {...props} />
    )
  }

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withAuth
