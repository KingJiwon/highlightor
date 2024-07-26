'use cilent';

import { useState } from 'react';
import { CldUploadWidget, CldVideoPlayer } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import deleteCloudData from '@/app/apis/upload';
import widget from '../styles/components/uploadWidget.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UploadWidget({ handleAlert, alertRef }) {
  const [publicId, setPublicId] = useState([]);

  const handleSuccess = (result) => {
    const { info } = result;
    handleAlert(null);
    return setPublicId((prev) => [...prev, info.public_id]);
  };
  const handleError = (error, options) => {
    if (error.statusText.includes('File size')) {
      handleAlert('파일 크기가 10MB를 초과합니다.');
    } else if (error.statusText.includes('Unsupported video format or file')) {
      handleAlert(
        '허용되지 않은 파일 형식입니다. 비디오 파일만 업로드 할 수 있습니다.',
      );
    } else {
      handleAlert('업로드 실패');
    }
    alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    options.close({ quiet: true });
  };
  const handleReplaceVideos = async (open) => {
    try {
      await deleteCloudData(publicId);
      setPublicId([]);
      open();
    } catch (error) {
      console.error('Failed to delete files:', error);
      handleAlert('파일 삭제 실패');
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <div className={widget.highlight_video_container}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {publicId.length !== 0 ? (
            publicId.map((id) => (
              <SwiperSlide key={id}>
                <CldVideoPlayer
                  src={id}
                  aspectRatio="16:9"
                  alt="Uploaded Image Not Found"
                />
              </SwiperSlide>
            ))
          ) : (
            <div className={widget.highlight_video_empty}>HighLightor</div>
          )}
        </Swiper>
      </div>
      <CldUploadWidget
        signatureEndpoint="/api/upload/cloudinary-params"
        options={{
          folder: 'user_highlight',
          maxFileSize: 10485760,
          sources: ['local', 'url', 'camera', 'google_drive'],
          resource_type: 'video',
          maxFiles: 8,
        }}
        onSuccess={(result, options) => {
          handleSuccess(result, options);
        }}
        onError={(error, options) => {
          handleError(error, options);
        }}
      >
        {({ open }) =>
          publicId.length === 0 ? (
            <button
              className={widget.highlight_upload_btn}
              onClick={() => open()}
            >
              영상 업로드
            </button>
          ) : (
            <button
              className={widget.highlight_upload_btn}
              onClick={() => handleReplaceVideos(open)}
            >
              영상 교체
            </button>
          )
        }
      </CldUploadWidget>
    </>
  );
}
