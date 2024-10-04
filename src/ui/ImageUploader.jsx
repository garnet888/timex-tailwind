'use client';

import { useEffect, useState } from 'react';
import { LuUploadCloud } from 'react-icons/lu';
import { v4 as uuid } from 'uuid';

const NO_FILE = '/images/no-file.png';
const NO_IMAGE = '/images/no-image.png';

const ImageUploader = ({ file, getFile, avatar = false }) => {
  const [inputID, setInputID] = useState('');

  const [currentFile, setCurrentFile] = useState(NO_IMAGE);
  const [hasFile, setHasFile] = useState(false);

  useEffect(() => {
    setInputID(uuid());

    if (file) {
      setHasFile(true);
      setCurrentFile(file);
    } else {
      setHasFile(false);
      setCurrentFile(NO_IMAGE);
    }
  }, [file]);

  const handleFileChanger = (e) => {
    let fileReader = new FileReader();
    let uploadingFile = e.target.files[0];

    fileReader.onloadend = () => {
      setHasFile(true);

      getFile(uploadingFile);
      setCurrentFile(fileReader.result);
    };

    if (uploadingFile) {
      fileReader.readAsDataURL(uploadingFile);
    }
  };

  return (
    <div>
      <input
        type='file'
        id={inputID}
        accept='image/jpeg, image/png, image/svg+xml, image/gif'
        onChange={handleFileChanger}
      />
      <label
        className='group cursor-pointer w-full flex flex-col items-center gap-6 bg-[#fafafa] rounded border border-dashed border-[#d9d9d9] transition duration-300 p-8 hover:border-primary'
        htmlFor={inputID}
      >
        {hasFile && (
          <figure className='w-[160px] h-[160px]'>
            <img
              className='w-full h-full object-contain'
              src={currentFile}
              alt='no file'
              onError={(event) => {
                event.target.onerror = null;
                event.target.src = NO_FILE;
              }}
            />
          </figure>
        )}

        <div className='w-full flex flex-col justify-center items-center text-center'>
          <div className='grid place-content-center'>
            <div className='w-[48px] h-[48px] grid place-content-center bg-[#f2f3f5] rounded-full p-1 group-hover:bg-purple-200'>
              <div className='w-[36px] h-[36px] grid place-content-center bg-[#e6e8ea] rounded-full p-2 group-hover:bg-purple-300 group-hover:text-gray-100'>
                <LuUploadCloud size={20} />
              </div>
            </div>
          </div>

          <p className='text-primary text-sm mt-1'>Энд дарж хуулна уу</p>

          <p className='text-[#687482] text-xs'>
            Зөвхөн PNG, JPG, JPEG өргөтгөлтэй файл хуулна уу (ихдээ 5MB)
          </p>
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;
