import Uppy from '@uppy/core'
import XHRUpload from '@uppy/xhr-upload'
import { DragDrop } from '@uppy/react'
import { useMemo } from 'react'

import '@uppy/core/dist/style.css'
import ApiService from 'helpers/api-service'

export default function Uploader () {
  const uppyMemo = useMemo(() => {
    const uppy = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    })

    uppy.use(XHRUpload, {
      endpoint: ApiService.API_BASE + '/upload',
      fieldName: 'file'
    })

    uppy.on('complete', (result) => {
      console.log(result)
      const url = result.successful[0].uploadURL
      console.log('uploaded', url)
    })
    return uppy
  }, [])

  return (
    <div>
      <DragDrop
        uppy={uppyMemo}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Drop here or %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: 'browse'
          }
        }}
      />
    </div>
  )
}
