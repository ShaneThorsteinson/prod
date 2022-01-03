import Input from 'components/ui/input'
import Radio from 'components/ui/radio'
import Select from 'components/ui/select'
import { useState } from 'react'

export default function PaymentMethod ({ onChange = f => f, ...props }) {
  const [value, setValue] = useState('cards')

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div {...props}>
      <Radio.Group className="grid md:grid-cols-2 gap-2">
        <Radio defaultChecked name="pay_method" value="cards" onChange={handleChange}>
          <div className="flex justify-between items-center">
            <span>Credit card</span>
            <img src="/assets/images/credit-cards.png" style={{ height: 20 }} alt="" />
          </div>
        </Radio>
        <Radio name="pay_method" value="paypal" onChange={handleChange}>
          <div className="flex justify-between items-center">
            <span>PayPal</span>
            <img src="/assets/images/paypal.png" style={{ height: 20 }} alt="" />
          </div>
        </Radio>
      </Radio.Group>

      {value === 'cards' && (
        <div>
          <div className="mt-4 grid md:grid-cols-3 gap-2">
            <Input label="Card number" placeholder="Enter card number" className="md:col-span-3" />
            <Input label="Exp. month" placeholder="Enter last name" />
            <Input label="Exp. year" placeholder="Enter exp. year" />
            <Input label="CVC" placeholder="Enter CVC code" />
          </div>
        </div>
      )}

      {value === 'paypal' && (
        <div className="my-4 text-gray-500 text-sm font-roboto text-center">
          After submitting your order, you will be redirected to the PayPal website where you can make your payment. Once your payment has been successfully completed and confirmed by PayPal, delivery of the ordered products will be initiated.
        </div>
      )}
    </div>
  )
}
