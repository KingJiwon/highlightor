'use client';

import popular from '@/styles/components/main/popular.module.scss';
import playerBox from '@/styles/components/detail/playerbox.module.scss';
import Image from 'next/image';

import { CldVideoPlayer } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import PlayerBox from '../detail/PlayerBox';

import 'swiper/css';
import 'swiper/css/pagination';

import 'next-cloudinary/dist/cld-video-player.css';

export default function PopularHighlight({ topPosts }) {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className={popular.swiper}
    >
      {topPosts.map((post) => {
        const { league, teamName, nickname, up, view } = post;
        const firstVideoUrl = post.publicId[0];
        return (
          <SwiperSlide key={post._id}>
            <div className={popular.header}>
              <Image
                height={45}
                width={45}
                src={`/icon/teams/${league}/${teamName}.svg`}
                alt="팀 로고"
                className={popular.header_logo}
              />
              <p className={popular.header_title}>
                {nickname}님의 {teamName} 하이라이트
              </p>
              <p className={popular.header_info}>
                추천{up} 조회{view}
              </p>
            </div>
            <div className={popular.main}>
              <div className={popular.main_player}>
                <PlayerBox postData={post} uniqueClass={playerBox.popular} />
              </div>
              <div className={popular.main_video}>
                <CldVideoPlayer
                  className={popular.main_video_stream}
                  src={firstVideoUrl}
                  aspectRatio="16:9"
                  alt="Uploaded Image Not Found"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
