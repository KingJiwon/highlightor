'use client';

import Link from 'next/link';
import { useSquad } from '@/util/context/SquadContext';
import Image from 'next/image';

import upload from '../../../styles/pages/upload.module.scss';

export default function Page() {
  const { squad, removePlayer } = useSquad();
  const squadLength = Object.values(squad).flat().length;
  const handleRemove = (e, position, playerId) => {
    removePlayer(position, playerId);
  };
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
      <div className={upload.container}>
        <div className={upload.inner}>
          <div className={upload.counter_container}>
            <p className={upload.counter}>{squadLength}/11</p>
          </div>
          {Object.keys(squad).map((position, idx) => (
            <div key={idx} className={upload.player_container}>
              <div className={upload.player_container_left}>
                <div className={upload.player_position}>
                  {position.toUpperCase()}
                </div>
                <Link
                  className={upload.player_add_btn}
                  href={`/create_highlight/upload/search_modal/${position}`}
                >
                  선수 검색
                </Link>
              </div>
              <div className={upload.player_container_right}>
                {squad[position].map((player) => (
                  <div
                    className={upload.player_info}
                    key={player.name}
                    onClick={(e) => {
                      handleRemove(e, position, player.id);
                    }}
                  >
                    <Image
                      width={110}
                      height={110}
                      className={upload.player_img}
                      src={player.playerImg}
                      alt={player.name}
                    />
                    <div className={upload.player_text}>
                      <Image
                        width={25}
                        height={20}
                        className={upload.player_season}
                        src={player.seasonImg}
                        alt={player.className}
                      />
                      <p className={upload.player_name}>{player.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={upload.highlight_container}>
            <img
              className={upload.highlight}
              src="/images/test/test_img.jpg"
              alt="테스트 이미지"
            />
            <Link href={'/'}>영상 업로드</Link>
          </div>
          <Link href={'/detail_highlight/1234'} className={upload.create_btn}>
            <p>하이라이트 생성</p>
          </Link>
        </div>
      </div>
    </>
  );
}
