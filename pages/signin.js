import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/client'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconUserCircle from 'icons/user-circle'
import IconTwitterOutline from 'icons/twitter-outline'
import Divider from 'components/ui/divider'
import Input from 'components/ui/input'
import Checkbox from 'components/ui/checkbox'
import IconDiscord from 'icons/discord'
import Message from 'components/ui/message'
import ApiService from 'helpers/api-service'
import Head from 'next/head'

export default function SigninPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = data => {
    setIsLoading(true)

    ApiService.signIn(data)
      .then(async () => {
        const { ok } = await signIn('credentials', { redirect: false, ...data })
        if (ok) {
          window.location.href = '/'
        }
      })
      .catch(err => setError(err.response.data?.error ?? err.message))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <Container className="page-signin__container">
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <a><img className="header__logo" src="/assets/images/logo.png" alt="" /></a>
          </Link>
          <Link href="/signup">
            <a>
              <Button size="small" className="md:text-base md:px-5 md:h-11" outlined>Sign Up</Button>
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Block className="flex items-center py-10 px-4 sm:px-6" style={{ width: 590 }}>
            <div style={{ maxWidth: 400, margin: '0 auto' }}>
              <div className="flex justify-center items-center flex-col">
                <Hexagon
                  className="text-primary-500"
                  size={60}
                  icon={<IconUserCircle size={18} />}
                />
                <h2 className="text-white text-2xl font-semibold mt-2 md:text-3xl">Sign In to Your Account</h2>
                {/* <p className="text-center mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet erat nec libero maximus</p> */}
              </div>
              <Button
                onClick={() => signIn('twitter', { callbackUrl: '/' })}
                type="twitter"
                className="mt-2 w-full"
                icon={<IconTwitterOutline size={20} />}
                shined
              >Sign in with twitter
              </Button>
              <Button
                onClick={() => signIn('discord', { callbackUrl: '/' })}
                type="twitter"
                className="mt-2 w-full"
                icon={<IconDiscord size={20} />}
                shined
              >Sign in with Discord
              </Button>

              <Divider className="my-4">OR</Divider>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <Input
                    {...register('email', { required: true })}
                    message={errors.email && 'Email is required'}
                    status={errors.email && 'error'}
                    placeholder="Email address"
                    type="email"
                  />
                  <Input.Password
                    {...register('password', { required: true })}
                    message={errors.password && 'Password is required'}
                    status={errors.password && 'error'}
                  />

                  {error && <Message type="error" onClose={() => setError('')}>{error}</Message>}

                  <div className="flex flex-col space-y-3 sm:flex-row items-center justify-between">
                    <Checkbox defaultChecked>Keep me signed in</Checkbox>
                    {/* <Link href="/restore-password">
                      <a className="text-primary-500 uppercase font-roboto block text-center" style={{ fontSize: 13 }}>forgotten password</a>
                    </Link> */}
                  </div>

                  <Button
                    type="primary"
                    className="w-full"
                    htmlType="submit"
                    loading={isLoading}
                    shined
                  >
                    Sign in
                  </Button>
                </div>
                <Link href="/">
                  <a className="text-primary-500 uppercase font-roboto block text-center mt-3" style={{ fontSize: 13 }}>back to homepage</a>
                </Link>
              </form>
            </div>
          </Block>
        </div>
      </Container>
    </>
  )
}
