import { forwardRef } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const InputPhone = forwardRef((props, ref) => {
  const { label } = props
  return (
    <div className="ui-input__container">
      {label && <label className="ui-input__label">{label}</label>}
      <PhoneInput
        containerClass="ui-input-phone"
        country="us"
        ref={ref}
        {...props}
      />
    </div>
  )
})

InputPhone.displayName = 'InputPassword'

export default InputPhone
