import Input from './input'
import IconEye from 'icons/eye'
import IconEyeSlash from 'icons/eye-slash'
import { useState, forwardRef } from 'react'

const InputPassword = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <Input
      ref={ref}
      placeholder="Password"
      type={visible ? 'text' : 'password'}
      iconRight={<span className="cursor-pointer" onClick={handleVisible}>{visible ? <IconEyeSlash size={20} /> : <IconEye size={20} />}</span>}
      {...props}
    />
  )
})

InputPassword.displayName = 'InputPassword'

export default InputPassword
