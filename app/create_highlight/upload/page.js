'use client';

import Link from 'next/link';
import { useSquad } from '@/util/context/SquadContext';
import Image from 'next/image';

import upload from '../../../styles/pages/upload.module.scss';

export default function Page() {
  const { squad } = useSquad();

  return (
    <>
      <div className={upload.discriptor_container}>
        <div className={upload.discriptor_inner}>
          <p className={upload.discriptor_logo}>HighLighter</p>
          <p className={upload.discriptor_ment}>
            선수를 선택하고 하이라이트 영상을 업로드해주세요
          </p>
        </div>
      </div>
      <div className={upload.uploader_container}>
        <div className={upload.uploader_inner}>
          <div className={upload.uploader_counter_container}>
            <p className={upload.uploader_counter}>0/11</p>
          </div>
          {Object.keys(squad).map((position, idx) => (
            <div key={idx} className={upload.uploader_main_container}>
              <div className={upload.uploader_btn_container}>
                <div className={upload.uploader_position}>{position}</div>
                <div className={upload.uploader_btn_upload}>
                  <Link
                    href={`/create_highlight/upload/search_modal/${position}`}
                  >
                    선수 검색
                  </Link>
                  <Link href={'/'}>영상 업로드</Link>
                </div>
              </div>
              <div className={upload.uploader_player_container}>
                <div className={upload.uploader_player}>
                  {squad[position].map((player) => (
                    <>
                      <Image
                        width={200}
                        height={100}
                        className={upload.uploader_player_img}
                        src={player.playerImg}
                        alt={player.name}
                      />
                      <p className={upload.uploader_player_name}>
                        {player.name}
                      </p>
                    </>
                  ))}
                </div>
              </div>
              <div className={upload.uploader_highlight}>
                <img src="/images/test/test_img.jpg" alt="테스트 이미지" />
              </div>
            </div>
          ))}
          <Link
            href={'/detail_highlight/1234'}
            className={upload.uploader_create_btn_container}
          >
            <p>하이라이트 생성</p>
          </Link>
        </div>
      </div>
    </>
  );
}
