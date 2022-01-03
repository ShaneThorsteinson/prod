import { useEffect, useState } from 'react'
import Link from 'next/link'
import Section from 'components/section'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
// import Empty from 'components/ui/empty'
import Hexagon from 'components/ui/hexagon'
import List from 'components/ui/list'
// import TableBillingHistory from './table-billing-history'
import ModalDowngrageConfirm from './modal-downgrage-confirm'
import ModalPaymentDuration from './modal-payment-duration'
import IconReceipt from 'icons/receipt'
import IconGame from 'icons/game-controller'
import IconCheckCircle from 'icons/check-circle'
import ModalPaymentMethod from './modal-payment-method'
import { useMutation, useQuery } from 'react-query'
import Empty from 'components/ui/empty/empty'
import ApiService from 'helpers/api-service'
import dayjs from 'dayjs'
import Spinner from 'components/spinner/spinner'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import Message from 'components/ui/message'

dayjs.extend(localizedFormat)

const DisplayPaymentDue = ({ subscription }) => {
  const { mutateAsync, isLoading } = useMutation(ApiService.membershipCreatePortal)

  const handleUpdatePaymentMethod = () => {
    mutateAsync({ customer: subscription.customer })
      .then(res => {
        if (res?.url) {
          window.open(res.url, '_blank')
        }
      })
  }
  console.log('end', subscription)
  return (
    <Block
      shined={false}
      className="py-4 px-6 flex items-center flex-col text-center lg:flex-row lg:text-left"
    >
      <Hexagon
        size={60}
        className="text-primary-500 mr-0 lg:mr-4"
        icon={<IconReceipt size={20} />}
      />
      <div className="flex flex-col flex-1">
        <span className="uppercase text-gray-900 text-sm mt-2 lg:mt-0">Next payment due</span>
        <span className="text-white font-semibold text-xl">{dayjs.unix(subscription.currentPeriodEnd).format('LL')}</span>
      </div>
      <Button
        onClick={handleUpdatePaymentMethod}
        className="mt-4 w-full md:w-auto"
        size="small"
        loading={isLoading}
        outlined
      >update payment method
      </Button>
    </Block>
  )
}

const DisplaySubscriptionSettings = ({ subscription }) => {
  const [showModalDowngrade, setShowModalDowngrade] = useState(false)
  const [showModalPaymentDuration, setShowPaymentDuration] = useState(false)
  const [showModalPaymentMethod, setShowModalPaymentMethod] = useState(false)

  return (
    <>
      {showModalDowngrade && (
        <ModalDowngrageConfirm
          onClose={() => setShowModalDowngrade(false)}
        />
      )}

      {showModalPaymentDuration && (
        <ModalPaymentDuration
          onClose={() => setShowPaymentDuration(false)}
        />
      )}

      {showModalPaymentMethod && (
        <ModalPaymentMethod
          onClose={() => setShowModalPaymentMethod(false)}
        />
      )}

      <div className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Block
            shined={false}
            className="py-4 px-6 flex items-center flex-col text-center lg:flex-row lg:text-left"
          >
            <Hexagon
              size={60}
              className="text-primary-500 mr-0 lg:mr-4"
              icon={<IconReceipt size={20} />}
            />
            <div className="flex flex-col flex-1">
              <span className="uppercase text-gray-900 text-sm mt-2 lg:mt-0">Current {subscription.plan.interval === 'month' ? 'monthly' : 'annual'} bill</span>
              <span className="text-white font-semibold text-xl">${subscription.plan.amount / 100}</span>
            </div>
            {/* <Button
              onClick={() => setShowPaymentDuration(true)}
              className="mt-4 w-full md:w-auto"
              size="small"
              outlined
            >Switch to yearly billing
            </Button> */}
          </Block>

          <DisplayPaymentDue subscription={subscription} />
        </div>

        <Block className="mt-4 p-4 md:p-6">
          <Section.Header
            title="Your"
            titleSecondary="current plan"
            icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconGame />} />}
            actions={
              <Button.Group className="w-full flex-wrap space-x-0 space-y-2 mt-2 md:space-x-4 md:space-y-0 md:mt-0 md:w-auto">
                {/* <Button className="w-full md:w-auto" size="small" outlined>upgrade membership</Button> */}
                {/* <Button.Link
                  onClick={() => setShowModalDowngrade(true)}
                  className="w-full md:w-auto justify-center"
                >downgrade membership to free
                </Button.Link> */}
                <Link href="/membership" passHref>
                  <Button className="w-full md:w-auto" size="small" outlined>comapre plans</Button>
                </Link>
              </Button.Group>
            }
          />
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="h-[152px] flex flex-col items-center justify-center md:h-auto md:w-64 " style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              {/* <div className="text-gray-500 text-xl font-semibold">Free Member</div> */}
              <div className="text-gray-500 text-xl font-semibold">{subscription.plan.name}</div>
              <div className="mt-2">
                <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                <span className="text-white text-[40px] font-semibold leading-none">{subscription.plan.amount / 100}</span>
                <span className="text-gray-500 text-[30px] font-semibold">/{subscription.plan.interval === 'month' ? 'mo' : 'yr'}</span>
              </div>
            </div>

            <List className="mt-2 flex-1 md:ml-2 md:mt-0 lg:h-[160px]">
              {subscription.plan.includes.map((item, idx) => <List.Item key={idx} icon={<IconCheckCircle size={18} />}>{item}</List.Item>)}
            </List>
          </div>
        </Block>

        {/* <Block className="mt-4 p-4 md:p-6">
          <Section.Header
            title="Your"
            titleSecondary="billing history"
            icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconGame />} />}
          />
          <TableBillingHistory />
          <Empty
            image="/assets/images/empty-game.svg"
            description="You have not made any payments."
            className="pt-7 md:py-10 mt-4"
          >
            <Button size="small" className="w-full md:w-auto" outlined>upgrade membership</Button>
          </Empty>
        </Block> */}

      </div>
    </>
  )
}

const TabProfileSubscriptionSettings = () => {
  const { data: subscription, isLoading } = useQuery('my-subscription', ApiService.membershipMySubscription, {
    retry: false,
    refetchOnWindowFocus: false
  })
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage({
        type: 'success',
        text: 'Subscription successful!'
      })
    }

    if (query.get('canceled')) {
      setMessage({
        type: 'error',
        text: 'Order canceled'
      })
    }
  }, [])

  if (isLoading) {
    return (
      <Spinner className="h-80" />
    )
  }

  if (!isLoading && !subscription) {
    return (
      <>
        {message && <Message className="mt-4" type={message.type} onClose={() => setMessage(null)}>{message.text}</Message>}
        <Empty
          image="/assets/images/empty-game.svg"
          description="You do not have a subscription"
          className="pt-7 md:py-10 mt-4"
        >
          <Link href="/membership" passHref>
            <Button size="small" className="w-full md:w-auto" outlined>upgrade membership</Button>
          </Link>
        </Empty>
      </>
    )
  }

  return (
    <>
      {message && <Message className="mt-4" type={message.type} onClose={() => setMessage(null)}>{message.text}</Message>}
      <DisplaySubscriptionSettings subscription={subscription} />
    </>
  )
}

export default TabProfileSubscriptionSettings
