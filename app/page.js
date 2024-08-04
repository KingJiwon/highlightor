import Link from 'next/link';

import PopularHighlight from '@/components/main/PopularHighlight';
import MyHighLight from '@/components/main/MyHighLight';
import { getTopPosts } from '@/app/apis/post';

import main from '../styles/pages/main.module.scss';

export default async function Home() {
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

      <MyHighLight />
    </div>
  );
}
