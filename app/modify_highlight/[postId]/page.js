'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

import { useSquad } from '@/hooks/SquadContext';
import UploadWidget from '@/components/UploadWidget';
import { modifyPostData, getPostData } from '@/app/apis/post';

import {
  TOO_MANY_PLAYER_IN_SQUAD,
  TOO_MANY_PLAYER_IN_POSITION,
  TOO_MANY_PLAYER_IN_GK,
  CANNOT_PULL_DATA,
  CANNOT_MODIFY_SQUAD,
} from '@/util/variable';

import upload from '@/styles/pages/upload.module.scss';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Page({ params }) {
  const { postId } = params;
  const { squad, setSquad, removePlayer } = useSquad();

  const [squadInfo, setSquadInfo] = useState({});
  const [alert, setAlert] = useState(null);
  const [publicId, setPublicId] = useState([]);

  const alertRef = useRef();
  const router = useRouter();

  const squadLength = Object.values(squad).flat().length;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const result = await getPostData(postId);
        const decodeTeamName = decodeURIComponent(result.teamName);
        setSquad(result.squad);
        setPublicId(result.publicId);
        setSquadInfo({ league: result.league, teamName: decodeTeamName });
        // 배경 이미지 설정
        document.documentElement.style.setProperty(
          '--background-image',
          `url('/icon/teams/${result.league}/${decodeTeamName}.svg')`,
        );
      } catch (error) {
        setAlert(CANNOT_PULL_DATA);
      }
    };

    fetchPostData();
  }, []);

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
      const res = await modifyPostData(postId, squad, publicId);

      if (res.modifiedCount === 1) {
        router.push(
          `/detail_highlight/${squadInfo.league}/${squadInfo.teamName}/${postId}`,
        );
      }
      // router.push(`/detail_highlight/${league}/${team}/${insertedId}`);
    } catch (error) {
      console.error('Failed to upload Squad:', error);
      handleAlert(CANNOT_MODIFY_SQUAD);
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <div className={upload.discriptor_container}>
        <div className={upload.discriptor_inner}>
          <p className={upload.discriptor_logo}>HighLighter</p>
          <p className={upload.discriptor_ment}>하이라이트 수정</p>
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
                    href={`/modify_highlight/${postId}/search_modal/${position}`}
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
            하이라이트 수정
          </button>
        </div>
      </div>
    </>
  );
}
