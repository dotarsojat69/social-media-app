import {useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';

const FileUploader = () => {
  const [fileUrl] = useState('')

  const onDrop = useCallback(() => {
    // Do something with the files
  }, [])

  const {getRootProps, getInputProps} = useDropzone
  ({onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg']
    }
  })

  return (
    <div {...getRootProps()} className="flex flex-center flex-col rounded-xl cursor-pointer bg-dark-2">
      <input {...getInputProps()} className="cursor-pointer" />
      {
      fileUrl ? (
        <div>
          test 1
        </div>
      ) : (
        <div className="file_uploader-box">
          <img src="/assets/icons/file-upload.svg" width={96} height={77} alt="file-upload" />
          <h3 className="base-medium mb-2 mt-6">Drag photo here</h3>
          <p className="small-regular mb-6">SVG, PNG, JPG</p>

          <Button className="shad-button_dark_4">
            Select from Device
          </Button>
        </div>
      )
    }    
    </div>
  )
}

export default FileUploader