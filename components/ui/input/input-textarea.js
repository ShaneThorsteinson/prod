import { useState, forwardRef } from 'react'
import Input from './input'

const InputTextarea = forwardRef(({ onChange, maxLength = null, showCount = false, ...props }, ref) => {
  const [helpText, setHelpText] = useState(`${(props.value?.length || props.defaultValue?.length) ?? 0}/${maxLength}`)

  const handleChange = (e) => {
    const length = e.target.value.length ?? 0
    setHelpText(`${length}/${maxLength}`)
    if (length >= maxLength) {
      return
    }
    onChange(e)
  }

  return (
    <Input
      ref={ref}
      onChange={handleChange}
      elementType="textarea"
      className="ui-input-textarea"
      help={maxLength ? helpText : null}
      {...props}
    />
  )
})

InputTextarea.displayName = 'InputTextarea'

export default InputTextarea
