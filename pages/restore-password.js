import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconUserCircle from 'icons/user-circle'
import Input from 'components/ui/input'
import Head from 'next/head'

export default function RestorePasswordPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <Head>
        <title>Restore Password</title>
      </Head>
      <Container className="page-restore__container">
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
                <h2 className="text-white text-2xl font-semibold mt-2 md:text-3xl">Forgotten Password</h2>
                <p className="text-center mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet erat nec libero maximus</p>
              </div>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    shined
                  >Submit
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
