import getPostData from '@/app/apis/post';
import PlayerBox from '@/components/detail/PlayerBox';
import SwiperHighlight from '@/components/SwiperHighlight';
import detail from '../../../styles/pages/detail_highlight.module.scss';

export default async function page(props) {
  const postData = await getPostData(props.params.post_id);

  return (
    <>
      <div className={detail.detail_inner}>
        <div className={detail.back_btn_container}>
          <p>목록으로</p>
          <img src="/icon/normal/right.svg" />
        </div>
        <div className={detail.title_container}>
          <img className={detail.title_logo} src="/icon/teams/pl/arsenal.svg" />
          <p className={detail.title_name}>
            {postData.nickname}님의 아스널 하이라이트
          </p>
          <p className={detail.title_info}>추천10 조회29</p>
        </div>
        <div className={detail.content_container}>
          <PlayerBox postData={postData} />
          <div className={detail.highlight_container}>
            <SwiperHighlight publicId={postData.publicId} />
          </div>
        </div>
      </div>
    </>
  );
}
