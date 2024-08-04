import { getPostData } from '@/app/apis/post';
import Info from '@/components/detail/Info';
import PlayerBox from '@/components/detail/PlayerBox';
import SwiperHighlight from '@/components/SwiperHighlight';

import detail from '@/styles/pages/detail_highlight.module.scss';

import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function page(props) {
  const { league, team, postId } = props.params;
  const postData = await getPostData(postId);
  const teamName = decodeURIComponent(team);

  return (
    <>
      <div className={detail.detail_inner}>
        <div className={detail.btn_container}>
          <Link
            className={detail.btn_modify}
            href={`/modify_highlight/${postId}`}
          >
            <Image
              alt="수정"
              width={15}
              height={15}
              src={'/icon/normal/edit.svg'}
            />
            <p>수정</p>
          </Link>
          <Link className={detail.btn_delete} href={'/'}>
            <Image
              alt="삭제"
              width={15}
              height={15}
              src={'/icon/normal/trash.svg'}
            />
            <p>삭제</p>
          </Link>
          <Link className={detail.btn_back} href={`/board_highlight/${league}`}>
            <p>목록으로</p>
            <Image
              alt="목록으로"
              height={12}
              width={12}
              src="/icon/normal/right.svg"
            />
          </Link>
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
          <Info postId={postId} />
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
