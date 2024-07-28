'use cilent';

import { CldUploadWidget, CldVideoPlayer } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { deleteCloudData } from '@/app/apis/upload';
import {
  EXCEED_FILE_SIZE,
  NOT_ALLOWED_FILE,
  CANNOT_UPLOAD_CLOUD_FILE,
  CANNOT_DELETE_CLOUD_FILE,
} from '@/util/variable';

import widget from '../styles/components/uploadWidget.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UploadWidget({
  handleAlert,
  alertRef,
  publicId,
  addPublicId,
  removePublicId,
}) {
  const handleSuccess = (result) => {
    const { info } = result;
    handleAlert(null);
    return addPublicId(info.public_id);
  };
  const handleError = (error, options) => {
    if (error.statusText.includes('File size')) {
      handleAlert(EXCEED_FILE_SIZE);
    } else if (error.statusText.includes('Unsupported video format or file')) {
      handleAlert(NOT_ALLOWED_FILE);
    } else {
      handleAlert(CANNOT_UPLOAD_CLOUD_FILE);
    }
    alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    options.close({ quiet: true });
  };
  const handleReplaceVideos = async (open) => {
    try {
      await deleteCloudData(publicId);
      removePublicId();
      open();
    } catch (error) {
      console.error('Failed to delete files:', error);
      handleAlert(CANNOT_DELETE_CLOUD_FILE);
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
