import Spinner from 'components/spinner'
import TeamCard from 'components/team/team-card'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Empty from 'components/ui/empty'
import Hexagon from 'components/ui/hexagon'
// import Button from 'components/ui/button'
// import Empty from 'components/ui/empty'
import Select from 'components/ui/select'
import ApiService from 'helpers/api-service'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'
// import Link from 'next/link'
import IconCreditCard from 'icons/credit-card'
import ModalCreateWallet from './modal-create-wallet'
import { useEffect, useState } from 'react'
import ModalVerifyWallet from './modal-verify-wallet'
import ModalWalletPayout from './modal-wallet-payout'
import ModalWalletRefill from './modal-wallet-refill'

const IconHelp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#C63535"
        d="M10 20.796c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.69"
        d="M10 12.93v-.834a3.334 3.334 0 10-3.333-3.333"
      />
      <path fill="#fff" d="M10 16.884a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  )
}
export default function TabProfileMyWallet () {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const [showPayoutModal, setShowPayoutModal] = useState(false)
  const [showRefillModal, setShowRefillModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [wallet, setWallet] = useState(null)
  const [verificationId, setVerificationId] = useState(null)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ApiService.getWallet()
      .then(setWallet)
      .catch(() => null)
      .finally(() => setIsLoading(false))
  }, [reload])

  return (
    <>
      {showCreateModal && (
        <ModalCreateWallet
          onClose={() => setShowCreateModal(false)}
          onSuccess={data => {
            setVerificationId(data.verificationId)
            setShowVerifyModal(true)
          }}
        />
      )}

      {showVerifyModal && (
        <ModalVerifyWallet
          verificationId={verificationId}
          onClose={() => setShowVerifyModal(false)}
          onSuccess={() => setReload(!reload)}
        />
      )}

      {showPayoutModal && (
        <ModalWalletPayout onClose={() => setShowPayoutModal(false)} />
      )}

      {showRefillModal && (
        <ModalWalletRefill onClose={() => setShowRefillModal(false)} />
      )}

      {isLoading && <Spinner className="h-80" />}

      {!isLoading && (
        <div className="mt-4 mb-20">
          <div className="flex flex-col items-center md:flex-row justify-between">
            <div className="font-semibold text-white text-[22px] mb-4 md:mb-0">Pay tournaments tickets and get paid out instantly with you preferred  payment method!</div>
            {/* <Select size="small" defaultValue="">
              <Select.Option disabled value="">Sort By</Select.Option>
              <Select.Option value="date">Date</Select.Option>
            </Select> */}
          </div>

          <div className="mt-4 gap-4 grid lg:grid-cols-12">
            <Block
              shined={false}
              className="py-3 px-4 lg:col-span-8 flex items-center justify-between"
            >
              <div className="flex-1 flex flex-wrap justify-between items-center">
                <Hexagon
                  size={60}
                  className="mr-4 text-primary-500"
                  icon={<IconCreditCard />}
                />
                <div className="flex flex-col flex-1">
                  <div className="uppercase text-gray-900 text-sm">Balance</div>
                  {wallet && <span className="text-success-500 font-semibold text-xl">${wallet.amount / 100} USD</span>}
                  {!wallet && (
                    <div className="inline-flex items-center gap-2 font-roboto text-primary-500">
                      <IconHelp />
                      <span>Not linked</span>
                    </div>
                  )}
                </div>
              </div>
              {!wallet && (
                <Button
                  size="small"
                  onClick={() => setShowCreateModal(true)}
                  outlined
                >Create or link</Button>
              )}
              {wallet && (
                <div className="space-x-4">
                  <Button
                    size="small"
                    outlined
                    onClick={() => setShowRefillModal(true)}
                  >Add Funds</Button>
                  <Button
                    size="small"
                    outlined
                    onClick={() => setShowPayoutModal(true)}
                  >Withdraw</Button>
                </div>
              )}
            </Block>
            <Block
              shined={false}
              className="py-3 px-4 lg:col-span-4"
            >
              <div className="flex items-center justify-center h-[60px]">
                <Image src="/assets/images/payment-cards.png" width={280} height={30} alt="" />
              </div>
            </Block>
          </div>
          {/* {!isLoading && teams?.length === 0 && (
            <Empty
              image="/assets/images/empty-game.svg"
              description="You currently have no teams. In order to create team, go to Scrim Finder page!"
              className="mt-4 py-[80px] md:py-[120px]"
            >
              <Link href="/scrim-finder">
                <Button size="small" className="w-full md:w-auto" outlined>scrim finder</Button>
              </Link>
            </Empty>
          )} */}
        </div>
      )}
    </>
  )
}
