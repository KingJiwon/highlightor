'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useSquad } from '@/util/context/SquadContext';
import Image from 'next/image';
import { CldUploadWidget, CldVideoPlayer } from 'next-cloudinary';
import upload from '../../../styles/pages/upload.module.scss';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Page() {
  const { squad, removePlayer } = useSquad();

  const [alert, setAlert] = useState(null);
  const [publicId, setPublicId] = useState('');

  const alertRef = useRef();

  const squadLength = Object.values(squad).flat().length;

  const handleRemove = (position, playerId) => {
    removePlayer(position, playerId);
    setAlert(null);
  };
  const handleAdd = (e, position) => {
    if (squadLength === 11) {
      e.preventDefault();
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return setAlert('스쿼드는 11명 이상으로 구성할 수 없습니다.');
    }
    if (squad[position].length === 5) {
      e.preventDefault();
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return setAlert('한 포지션에 5명 이상의 선수를 구성할 수 없습니다.');
    }
    if (position === 'gk' && squad[position].length === 1) {
      e.preventDefault();
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return setAlert('GK 포지션은 최대 1명으로 구성 가능합니다.');
    }
    return setAlert(null);
  };
  console.log(publicId);
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
            <p className={upload.counter}>{squadLength} / 11</p>
            {setAlert && (
              <p ref={alertRef} className={upload.alert}>
                {alert}
              </p>
            )}
          </div>
          {Object.keys(squad).map((position, idx) => (
            <div key={idx} className={upload.player_container}>
              <div className={upload.player_container_left}>
                <div
                  className={`${upload.player_position} ${upload[position]}`}
                >
                  {position.toUpperCase()}
                </div>
                <Link
                  onClick={(e) => {
                    handleAdd(e, position);
                  }}
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
                    onClick={() => {
                      handleRemove(position, player.id);
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
            <div className={upload.highlight_video_container}>
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
                  return setAlert('업로드 실패');
                }
                setPublicId(info.public_id);
                return setAlert(null);
              }}
              onFailure={(error) => {
                console.error(error);
                return setAlert('업로드 실패');
              }}
            >
              {({ open }) => (
                <button
                  className={upload.highlight_upload_btn}
                  onClick={() => open()}
                >
                  영상 업로드
                </button>
              )}
            </CldUploadWidget>
          </div>
          <Link href={'/detail_highlight/1234'} className={upload.create_btn}>
            <p>하이라이트 생성</p>
          </Link>
        </div>
      </div>
    </>
  );
}
