import boardCard from '@/styles/components/board/boardCard.module.scss';
import Image from 'next/image';

export default function BoardCard({
  id,
  nickName,
  teamName,
  league,
  videoLength,
}) {
  return (
    <div className={boardCard.board_card}>
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
        <p className={boardCard.video_icon}></p>
        <p className={boardCard.video_length}>{videoLength}</p>
        <p>추천10</p>
        <p>조회39</p>
      </div>
    </div>
  );
}
