'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import boardCard from '@/styles/components/board/boardCard.module.scss';

export default function BoardCard({
  id,
  nickName,
  teamName,
  league,
  videoLength,
  squad,
  up,
  view,
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/detail_highlight/${league}/${teamName}/${id}`);
  };
  const backgroundImageUrl = `/icon/teams/${league}/${encodeURIComponent(teamName)}.svg`;
  return (
    <>
      <div onClick={handleClick} className={boardCard.board_card}>
        <div className={boardCard.inner}>
          <div className={boardCard.front}>
            <p className={boardCard.title}>
              {nickName}님의 {teamName} 하이라이트
            </p>
            <Image
              className={boardCard.team_logo}
              alt={teamName}
              width={80}
              height={80}
              src={`/icon/teams/${league}/${teamName}.svg`}
            />
            <div className={boardCard.info}>
              <div className={boardCard.info_up}>
                <Image
                  src={'/icon/normal/up.svg'}
                  alt="추천수"
                  width={16}
                  height={16}
                  className={boardCard.up_icon}
                />
                <p className={boardCard.up_count}>{up}</p>
              </div>
              <div className={boardCard.info_view}>
                <Image
                  src={'/icon/normal/eye.svg'}
                  alt="조회수"
                  width={16}
                  height={16}
                  className={boardCard.view_icon}
                />
                <p className={boardCard.view_count}>{view}</p>
              </div>
              <div className={boardCard.info_video}>
                <Image
                  src={'/icon/normal/video.svg'}
                  alt="영상 개수"
                  width={16}
                  height={16}
                  className={boardCard.video_icon}
                />
                <p className={boardCard.video_length}>{videoLength}</p>
              </div>
            </div>
          </div>
          <div className={boardCard.back}>
            {Object.keys(squad).map((position) => (
              <div key={position} className={boardCard.back_player_container}>
                {squad[position].map((player) => (
                  <Image
                    src={player.playerImg}
                    width={50}
                    height={50}
                    key={player.id}
                    alt={player.name}
                  />
                ))}
              </div>
            ))}
          </div>
          <div
            className={boardCard.back_bg}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
        </div>
      </div>
    </>
  );
}
