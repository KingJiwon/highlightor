import { useState } from 'react';
import { CldUploadWidget, CldVideoPlayer } from 'next-cloudinary';
import widget from '../styles/components/uploadWidget.module.scss';

export default function UploadWidget({ handleAlert }) {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      <div className={widget.highlight_video_container}>
        {publicId && (
          <CldVideoPlayer
            src={publicId}
            aspectRatio="16:9"
            alt="Uploaded Image Not Found"
          />
        )}
      </div>
      <CldUploadWidget
        signatureEndpoint="/api/upload/cloudinary-params"
        folder="test"
        onSuccess={(result) => {
          const { info } = result;
          if (!info || !info.public_id) {
            return handleAlert('업로드 실패');
          }
          handleAlert(null);
          return setPublicId(info.public_id);
        }}
        onFailure={(error) => {
          console.error(error);
          return handleAlert('업로드 실패');
        }}
      >
        {({ open }) => (
          <button
            className={widget.highlight_upload_btn}
            onClick={() => open()}
          >
            영상 업로드
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
