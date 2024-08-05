'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import { useSquad } from '@/hooks/SquadContext';
import UploadWidget from '@/components/UploadWidget';
import { uploadSquad } from '@/app/apis/upload';

import {
  TOO_MANY_PLAYER_IN_SQUAD,
  TOO_MANY_PLAYER_IN_POSITION,
  TOO_MANY_PLAYER_IN_GK,
  CANNOT_UPLOAD_SQUAD,
} from '@/util/variable';

import upload from '@/styles/pages/upload.module.scss';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Page({ params }) {
  const { league, team } = params;
  const { squad, removePlayer } = useSquad();

  const [alert, setAlert] = useState(null);
  const [publicId, setPublicId] = useState([]);

  const alertRef = useRef();
  const session = useSession();
  const router = useRouter();

  const squadLength = Object.values(squad).flat().length;

  useEffect(() => {
    // 배경 이미지 설정
    document.documentElement.style.setProperty(
      '--background-image',
      `url('/icon/teams/${league}/${team}.svg')`,
    );
  });

  const handleAlert = (message) => {
    alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setAlert(message);
  };
  const handleAddPublicId = (id) => {
    setPublicId((prev) => [...prev, id]);
  };
  const handleRemovePublicId = () => {
    setPublicId([]);
  };

  const handleRemove = (position, playerId) => {
    removePlayer(position, playerId);
    setAlert(null);
  };
  const handleAdd = (e, position) => {
    if (squadLength === 11) {
      e.preventDefault();
      return handleAlert(TOO_MANY_PLAYER_IN_SQUAD);
    }
    if (squad[position].length === 5) {
      e.preventDefault();
      return handleAlert(TOO_MANY_PLAYER_IN_POSITION);
    }
    if (position === 'gk' && squad[position].length === 1) {
      e.preventDefault();
      return handleAlert(TOO_MANY_PLAYER_IN_GK);
    }
    return setAlert(null);
  };

  const submitSquad = async (e) => {
    e.preventDefault();
    try {
      if (squadLength === 0) {
        return handleAlert('1명 이상의 선수를 선택 해주세요.');
      }
      if (publicId.length === 0) {
        return handleAlert('하이라이트 영상을 1개 이상 업로드 해주세요.');
      }
      const { email, nickname } = session.data.user;
      const res = await uploadSquad(
        squad,
        publicId,
        email,
        nickname,
        league,
        team,
      );
      const { insertedId } = res.data;
      return router.push(`/detail_highlight/${league}/${team}/${insertedId}`);
    } catch (error) {
      console.error('Failed to upload Squad:', error);
      handleAlert(CANNOT_UPLOAD_SQUAD);
      return alertRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  if (!session.data) {
    return <div>권한이 없습니다.</div>;
  }
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
          <div className={upload.player}>
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
                    href={`/create_highlight/upload/${league}/${team}/search_modal/${position}`}
                    scroll={false}
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
                        width={130}
                        height={130}
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
          </div>
          <div className={upload.highlight_container}>
            <UploadWidget
              handleAlert={handleAlert}
              alertRef={alertRef}
              publicId={publicId}
              addPublicId={handleAddPublicId}
              removePublicId={handleRemovePublicId}
            />
          </div>
          <button
            type="button"
            className={upload.create_btn}
            onClick={(e) => {
              submitSquad(e);
            }}
          >
            하이라이트 생성
          </button>
        </div>
      </div>
    </>
  );
}
