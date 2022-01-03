import RcUpload from 'rc-upload'
import { useState } from 'react'
import ApiService from '../../helpers/api-service'

export default function Upload (props) {
  const [message, setMessage] = useState('Select a file')

  const onStart = (file) => {
    setMessage(`Uploading: ${file.name}`)
    if (props.onStart) {
      props.onStart(file)
    }
  }

  const onError = err => {
    setMessage(err.message)
    if (props.onError) {
      props.onError(err)
    }
  }

  const onSuccess = (res) => {
    setMessage(`Uploaded: ${res.name}`)
    if (props.onSuccess) {
      props.onSuccess(res)
    }
  }

  return (
    <RcUpload
      action={ApiService.UPLOAD_URL}
      {...props}
      className="upload"
      onStart={onStart}
      onError={onError}
      onSuccess={onSuccess}
    >
      {message}
    </RcUpload>
  )
}
