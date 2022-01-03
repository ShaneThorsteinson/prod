import Link from 'next/link'
import Button from 'components/ui/button'
import Modal from 'components/ui/modal'
import IconCreditCard from 'icons/credit-card'
import IconCheck from 'icons/check'
import IconClose from 'icons/close'
import Spinner from 'components/spinner'
import { useQuery } from 'react-query'
import ApiService from 'helpers/api-service'
import { useEffect, useReducer, useState } from 'react'

const SuccessModalContent = ({ onClose }) => {
  return (
    <>
      <Modal.Header
        icon={<IconCheck size={18} />}
        iconClass="text-primary-500"
        title="Your payment is Confirmed! Thank you!"
      />
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} type="outline">Close</Button>
      </Modal.Footer>
    </>
  )
}

const ErrorModalContent = ({ onClose, message }) => {
  return (
    <>
      <Modal.Header
        icon={<IconClose size={18} />}
        iconClass="text-primary-500"
        title="Payment error"
      />
      <Modal.Body className="text-center font-roboto text-gray-500">
        {message}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={onClose} type="outline">Close</Button>
      </Modal.Footer>
    </>
  )
}

const ChooseModalContent = () => {
  return (
    <>
      <Modal.Header
        icon={<IconCreditCard size={18} />}
        iconClass="text-primary-500"
        title="Chose your payment method"
      />
      <Modal.Body className="text-center font-roboto text-gray-500">
        We now supports more payment methods and faster payouts with our Wallet
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Link href="/my-account/wallet" passHref>
          <Button type="primary" shined>Pay with our wallet</Button>
        </Link>
      </Modal.Footer>
    </>
  )
}

const PayModalContent = ({ amount, wallet, onClose, onSuccess, onFailure, paymentAsync, description = null, title = null }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = () => {
    setIsLoading(true)
    paymentAsync()
      .then(onSuccess)
      .catch(onFailure)
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Modal.Header
        icon={<IconCreditCard size={18} />}
        iconClass="text-primary-500"
        title={title ?? 'Pay with our Wallet'}
      />
      <Modal.Body className="text-center font-roboto text-gray-500">
        {description}
        <p>Available balance: <span className="text-green-500 font-bold">${wallet.amount / 100} USD</span></p>
        <p>You are about to pay: <strong className="text-white">${amount} USD</strong> for the entry player ticket.</p>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button type="outline" onClick={onClose}>Cancel</Button>
        <Button
          type="primary"
          onClick={handleConfirm}
          loading={isLoading}
          shined
        >Confirm</Button>
      </Modal.Footer>
    </>
  )
}

const initialState = {
  status: 'loading',
  error: null,
  wallet: null,
  receipt: null,
  payableAmount: 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'ERROR':
      return { ...state, status: 'error', error: action.payload }
    case 'SUCCESS':
      return { ...state, status: 'success' }
    case 'PAYMENT':
      return { ...state, status: 'payment', ...action.payload }
    case 'CHOOSE_PAYMENT':
      return { ...state, status: 'choose_payment' }
    default:
      throw new Error()
  }
}

export default function ModalPayment ({ onClose = f => f, onSuccess, description = null, title = null, payableAmount = 0, paymentAsync, ...props }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data: wallet, isLoading } = useQuery('wallet', ApiService.getWallet, {
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !wallet) {
      dispatch({ type: 'CHOOSE_PAYMENT' })
      return
    }
    if (!isLoading && wallet) {
      dispatch({ type: 'PAYMENT', payload: { wallet, payableAmount } })
    }
  }, [isLoading, wallet])

  const handleSuccess = (...args) => {
    dispatch({ type: 'SUCCESS' })
    onSuccess(...args)
  }

  const handleFailure = err => {
    dispatch({ type: 'ERROR', payload: err.message })
  }

  return (
    <Modal onClose={onClose} shined {...props}>
      {state.status === 'loading' && <Spinner className="py-8" />}
      {state.status === 'choose_payment' && <ChooseModalContent />}
      {state.status === 'payment' && (
        <PayModalContent
          amount={state.payableAmount}
          wallet={state.wallet}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          onClose={onClose}
          paymentAsync={paymentAsync}
          description={description}
          title={title}
        />
      )}
      {state.status === 'success' && <SuccessModalContent onClose={onClose} />}
      {state.status === 'error' && (
        <ErrorModalContent
          onClose={onClose}
          message={state.error}
        />
      )}
    </Modal>
  )
}
