import { getPostData } from '@/app/apis/post';
import BtnUp from '@/components/detail/Btnup';
import PlayerBox from '@/components/detail/PlayerBox';
import SwiperHighlight from '@/components/SwiperHighlight';
import { getServerSession } from 'next-auth';
import { getSessionUser } from '@/app/apis/user';
import detail from '@/styles/pages/detail_highlight.module.scss';

import Image from 'next/image';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function page(props) {
  const { league, team, postId } = props.params;
  const postData = await getPostData(postId);
  const teamName = decodeURIComponent(team);
  const session = await getServerSession(authOptions);
  const sessionUserInfo = await getSessionUser(session?.user.email);

  return (
    <>
      <div className={detail.detail_inner}>
        <div className={detail.back_btn_container}>
          <p>목록으로</p>
          <Image
            alt="목록으로"
            height={12}
            width={12}
            src="/icon/normal/right.svg"
          />
        </div>
        <div className={detail.title_container}>
          <Image
            width={60}
            height={60}
            className={detail.title_logo}
            src={`/icon/teams/${league}/${teamName}.svg`}
            alt={teamName}
          />
          <p className={detail.title_name}>
            {postData.nickname}님의 {teamName} 하이라이트
          </p>
          <p className={detail.title_info}>추천10 조회29</p>
          {session ? (
            <BtnUp sessionUserInfo={sessionUserInfo} postId={postId} />
          ) : (
            <></>
          )}
        </div>
        <div className={detail.content_container}>
          <PlayerBox postData={postData} league={league} team={team} />
          <div className={detail.highlight_container}>
            <SwiperHighlight publicId={postData.publicId} />
          </div>
        </div>
      </div>
    </>
  );
}
