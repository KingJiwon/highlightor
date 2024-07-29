'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'next-cloudinary/dist/cld-video-player.css';

export default function SwiperHighlight({ publicId }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {publicId.map((id) => (
        <SwiperSlide key={id}>
          <CldVideoPlayer
            src={id}
            aspectRatio="16:9"
            alt="Uploaded Image Not Found"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
