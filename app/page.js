import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import PopularHighlight from '@/components/main/PopularHighlight';
import { getTopPosts } from '@/app/apis/post';

import main from '../styles/pages/main.module.scss';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const topPosts = await getTopPosts();
  return (
    <div className={main.main_container}>
      <div className={main.popular_highlight_container}>
        <div className={main.popular_highlight_inner}>
          <PopularHighlight topPosts={topPosts} />
        </div>
      </div>
      <div className={main.create_highlight_btn_container}>
        <div className={main.create_highlight_btn_inner}>
          <Link
            href={'/create_highlight/league'}
            className={main.create_highlight_btn}
          >
            내 구단 하이라이트 만들기
          </Link>
        </div>
      </div>

      <div className={main.user_highlight_container}>
        <div className={main.user_highlight_inner}>
          <div className={main.user_highlight_header}>
            <p>{session?.user.nickname}님의 하이라이트</p>
          </div>
          <div className={main.user_highlight_teams}>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/아스널.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/첼시.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/리버풀.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/맨체스터 유나이티드.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/토트넘 홋스퍼.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/맨체스터 시티.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
