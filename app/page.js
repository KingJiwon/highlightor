import PopularHighlight from '@/components/main/PopularHighlight';
import MyHighLight from '@/components/main/MyHighLight';
import CreatBtn from '@/components/main/CreateBtn';
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
          <CreatBtn />
        </div>
      </div>

      <MyHighLight />
    </div>
  );
}
