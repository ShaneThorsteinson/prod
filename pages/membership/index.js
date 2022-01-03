import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import List from 'components/ui/list'
import ApiService from 'helpers/api-service'
import IconCheckCircle from 'icons/check-circle'
import Head from 'next/head'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

const CheckoutButton = ({ priceId }) => {
  const { data, isLoading, mutate } = useMutation(ApiService.membershipCreateCheckout)

  useEffect(() => {
    if (data?.url) {
      window.location.href = data.url
    }
  }, [data])

  const handleClick = () => {
    mutate(priceId, {
      onError: () => { window.location.href = '/signin' }
    })
  }

  return (
    <Button className="w-full" shined loading={isLoading} onClick={handleClick}>Get started</Button>
  )
}

export default function MembershipPage () {
  return (
    <>
      <Head>
        <title>Upgrade Membership</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10 page-membership__container">
          <PageHeader
            title="Upgrade Membership"
            descripiton="We offer three tiers of prestige so people of all backgrounds and budgets can compete in our highest tier tournaments!"
          />

          <div className="mt-10 mx-auto grid lg:grid-cols-3 gap-4">
            <div>
              <Block shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">5.99</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>Entry into prestige only tourneys</List.Item>
                </List>

                <div className="py-8 px-5">
                  <CheckoutButton priceId="price_1JrRWhI52vbWFFoQJJhnNNeY" />
                </div>
              </Block>
            </div>

            <div>
              <Block className="border-primary-700" shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige Master</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">39.99</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>Entry into prestige only tourneys</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Entry into one tourney per day for free</List.Item>
                </List>

                <div className="py-8 px-5">
                  <CheckoutButton priceId="price_1JrRXZI52vbWFFoQUlScrlKz" />
                </div>
              </Block>
            </div>

            <div>
              <Block shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige Unlimited</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">94.99</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>Entry into prestige only tourneys</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Entry into all tourneys all games for free</List.Item>
                </List>

                <div className="py-8 px-5">
                  <CheckoutButton priceId="price_1JuambI52vbWFFoQwrwX30Ru" />
                </div>
              </Block>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
