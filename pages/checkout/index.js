import Layout from 'components/layout'
import Container from 'components/ui/container'
import Head from 'next/head'
import Message from 'components/ui/message/message'
import Button from 'components/ui/button'
import Block from 'components/ui/block/block'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import ApiService from 'helpers/api-service'

const SuccessDisplay = ({ sessionId }) => {
  const { mutate, isLoading, data } = useMutation(ApiService.membershipCreatePortal)

  useEffect(() => {
    if (data?.url) {
      window.location.href = data.url
    }
  }, [data])

  const handleClick = () => {
    mutate({ sessionId })
  }

  return (
    <Block className="p-5 max-w-md mx-auto">
      <Message type="success">Subscription successful!</Message>
      <Button
        className="w-full mt-4"
        onClick={handleClick}
        loading={isLoading}
      >Manage your billing information</Button>
    </Block>
  )
}

const ErrorDisplay = ({ message }) => {
  return (
    <Block className="p-5 max-w-md mx-auto">
      <Message type="error">{message}</Message>
    </Block>
  )
}

export default function CheckoutPage () {
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(false)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setSuccess(true)
      setSessionId(query.get('session_id'))
    }

    if (query.get('canceled')) {
      setSuccess(false)
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [sessionId])

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10">
          {success && sessionId !== '' && <SuccessDisplay sessionId={sessionId} />}
          {message && <ErrorDisplay message={message} />}
        </Container>
      </Layout>
    </>
  )
}
