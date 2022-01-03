import { useRef, useState } from 'react'
import Link from 'next/link'
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
import IconDiscord from 'icons/discord'
import Message from 'components/ui/message'
import ModalAlert from 'containers/modal-alert'
import ApiService from 'helpers/api-service'
import Head from 'next/head'

export default function SignupPage () {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = data => {
    setIsLoading(true)
    ApiService.signUp(data)
      .then(() => {
        setShowModalSuccess(true)
        reset()
      })
      .catch(err => setError(err.response.data?.error ?? err.message))
      .finally(() => setIsLoading(false))
  }

  const password = useRef({})
  password.current = watch('password', '')

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      {showModalSuccess && (
        <ModalAlert
          title="You are successfully signed up"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet erat nec libero maximus"
          onClose={() => setShowModalSuccess(false)}
        />
      )}
      <div>
        <Container className="page-signup__container">
          <div className="h-20 flex items-center justify-between">
            <Link href="/">
              <a><img className="header__logo" src="/assets/images/logo.png" alt="" /></a>
            </Link>
            <Link href="/signin">
              <a>
                <Button size="small" className="md:text-base md:px-5 md:h-11">Sign In</Button>
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
                  <h2 className="text-white text-2xl font-semibold mt-2 md:text-3xl">Sign Up a New Player!</h2>
                  {/* <p className="text-center mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet erat nec libero maximus</p> */}
                </div>
                <Button
                  onClick={() => signIn('twitter', { callbackUrl: '/' })}
                  type="twitter"
                  className="mt-2 w-full"
                  icon={<IconTwitterOutline size={20} />}
                  shined
                >Sign up with twitter
                </Button>
                <Button
                  onClick={() => signIn('discord', { callbackUrl: '/' })}
                  type="twitter"
                  className="mt-2 w-full"
                  icon={<IconDiscord size={20} />}
                  shined
                >Sign up with Discord
                </Button>

                <Divider className="my-4">OR</Divider>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-2">
                    <Input
                      {...register('email', {
                        required: 'Email is required'
                      })}
                      message={errors.email?.message}
                      status={errors.email && 'error'}
                      placeholder="Email address"
                      type="email"
                    />
                    <Input
                      {...register('name', { required: true })}
                      message={errors.name && 'Username is required'}
                      status={errors.name && 'error'}
                      placeholder="Username"
                    />
                    <Input
                      {...register('password', { required: 'Password is required' })}
                      message={errors.password?.message}
                      status={errors.password && 'error'}
                      placeholder="Create password"
                      type="password"
                    />
                    <Input
                      {...register('passwordRepeat', {
                        required: 'Re-type password is required',
                        validate: value => value === password.current || 'The passwords do not match'
                      })}
                      message={errors.passwordRepeat?.message}
                      status={errors.passwordRepeat && 'error'}
                      placeholder="Re-type password"
                      type="password"
                    />

                    {error && <Message type="error" onClose={() => setError('')}>{error}</Message>}

                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full"
                      loading={isLoading}
                      shined
                    >Sign up
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
      </div>
    </>
  )
}
