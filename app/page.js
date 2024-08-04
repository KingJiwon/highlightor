import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import PopularHighlight from '@/components/main/PopularHighlight';
import MyHighLight from '@/components/main/MyHighLight';
import { getTopPosts } from '@/app/apis/post';
import { getUserHighlight } from './apis/user';

import main from '../styles/pages/main.module.scss';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const topPosts = await getTopPosts();
  const userTeam = await getUserHighlight(session.user.email);

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

      <MyHighLight name={session.user.nickname} userTeam={userTeam} />
    </div>
  );
}
