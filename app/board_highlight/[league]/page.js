import { getLeaguePostData } from '@/app/apis/post';
import Image from 'next/image';
import BoardCard from '@/components/board/BoardCard';
import board from '@/styles/pages/board_highlight.module.scss';

export default async function page(props) {
  const { league } = props.params;
  const leagueObj = {
    pl: '프리미어리그',
    bundes: '분데스리가',
    laliga: '라리가',
    ligue1: '리그앙',
    serie: '세리에 A',
  };
  const posts = await getLeaguePostData(league);
  return (
    <>
      <div className={board.title}>
        <Image
          alt={`${league}로고`}
          height={150}
          width={150}
          src={`/icon/league/${league}.svg`}
        />
        <p>{leagueObj[league]} 하이라이트</p>
      </div>
      <div className={board.board_container}>
        <div className={board.inner}>
          {posts?.map((el) => {
            const videoLength = el.publicId.length;
            return (
              <BoardCard
                key={el._id}
                id={el._id}
                nickName={el.nickname}
                teamName={el.teamName}
                league={league}
                up={el.up}
                view={el.view}
                videoLength={videoLength}
                squad={el.squad}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
