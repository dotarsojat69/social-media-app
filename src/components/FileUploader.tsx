// import React, {useCallback, useState} from 'react';
// import { useDropzone } from 'react-dropzone';
import { Button } from "./ui/button";

const FileUploader = () => {
  // const [fileUrl, setFileUrl] = useState('')

  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  // }, [])

  const {getRootProps, getInputProps} = useDropzone
  ({onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg']
    }
  })

  return (
    <div className="flex flex-center flex-col rounded-xl cursor-pointer bg-dark-2">
      <div className="file_uploader-box">
        <img
          src="/assets/icons/file-upload.svg"
          width={96}
          height={77}
          alt="file-upload"
        />
        <h3 className="base-medium mb-2 mt-6">Drag photo here</h3>
        <p className="small-regular mb-6">SVG, PNG, JPG</p>

        <Button className="shad-button_dark_4">Select from Device</Button>
      </div>
    </div>
  );
};

export default FileUploader;
