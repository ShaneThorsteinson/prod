import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import PaymentMethod from 'components/payment-method'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import Input from 'components/ui/input'
import List from 'components/ui/list'
import Radio from 'components/ui/radio'
import IconCheckCircle from 'icons/check-circle'
import { useState } from 'react'

export default function UpgradeMembershipPage () {
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [paymentPeriod, setPaymentPeriod] = useState('monthly')

  return (
    <Layout>
      <Container className="mt-20 pt-10">
        <PageHeader
          title="Upgrade Membership"
          descripiton="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl tellus, elementum quis sodales at, sagittis ut nulla. Praesent sed turpis eu diam vulputate iaculis nec ac nunc."
        />

        <div className="mt-10 grid grid-cols-12 gap-4">
          <Block className="col-span-4 hidden lg:block" shined>
            <div className="py-8 flex flex-col items-center justify-center">
              <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige</div>
              <div className="mt-2">
                <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                <span className="text-white text-[40px] font-semibold leading-none">4.99</span>
                <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
              </div>
            </div>

            <List>
              <List.Item icon={<IconCheckCircle size={18} />}>All Prestige members can find scrim</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Unlimited number of teams</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Choose predefined team logo or upload yours</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Prestige scrim finder</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Earn 10% more ELO after winning scrim</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Priority in tournament seed</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Access to Premium and standard tournaments</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Prestige player resume PDF export</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Post a highlight video on profile</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>Track specific in-game states</List.Item>
              <List.Item icon={<IconCheckCircle size={18} />}>See exact player rank</List.Item>
            </List>
          </Block>

          <Block className="col-span-12 lg:col-span-8 p-8" shined>
            <form>
              <div className="text-gray-700 uppercase text-sm border-white border-b border-opacity-10 pb-2">Upgrade summary</div>

              <Radio.Group className="mt-4 grid grid-cols-2 gap-2">
                <Radio name="pay" defaultChecked value="monthly" onChange={() => setPaymentPeriod('monthly')}>Pay monthly</Radio>
                <Radio name="pay" value="yearly" onChange={() => setPaymentPeriod('yearly')}>Pay yearly</Radio>
              </Radio.Group>

              <div className="mt-4 flex justify-between">
                <div className="text-gray-500">New monthly total:</div>
                <div className="text-lg font-semibold text-white">${paymentPeriod === 'monthly' ? '4.99' : '3.50'}/month</div>
              </div>

              <div className="mt-9 text-gray-700 uppercase text-sm border-white border-b border-opacity-10 pb-2">Payment method</div>

              <PaymentMethod className="mt-4" onChange={setPaymentMethod} />

              {paymentMethod && (
                <>
                  <div className="my-4 border-white border-b border-opacity-10" />
                  <div className="text-right">
                    <Button shined>{paymentMethod === 'paypal' ? 'Go to paypal' : 'Submit'}</Button>
                  </div>
                </>
              )}
            </form>
          </Block>
        </div>
      </Container>
    </Layout>
  )
}
