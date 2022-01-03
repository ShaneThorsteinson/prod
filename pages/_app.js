import Router from 'next/router'
import NProgress from 'nprogress'
import { AuthProvider } from 'hooks/use-auth'
import { ProviderNotifications } from 'hooks/use-notifications'
import { SocketProvider } from 'hooks/use-socket'
import { ToastProvider } from 'react-toast-notifications'
import Toast from 'components/ui/toast'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { useEffect } from 'react'

const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', url => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider session={pageProps.session}>
        <SocketProvider>
          <ProviderNotifications>
            <ToastProvider components={{ Toast: Toast }}>
              <Component {...pageProps} />
            </ToastProvider>
          </ProviderNotifications>
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
