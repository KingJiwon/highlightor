import detail from '../../../styles/detail_highlight.module.scss';

export default function page() {
  return (
    <>
      <div className={detail.main_container}>
        <div className={detail.back_btn_container}>
          <p>목록으로</p>
          <img src="/icon/normal/right.svg" />
        </div>
        <div className={detail.title_container}>
          <img className={detail.title_logo} src="/icon/teams/arsenal.svg" />
          <p className={detail.title_name}>MADDD님의 아스널 하이라이트</p>
          <p className={detail.title_info}>추천10 조회29</p>
        </div>
        <div className={detail.content_container}>
          <div className={detail.content_player_container}>
            <div className={detail.content_player_position}>
              <p>FW</p>
              <p>MF</p>
              <p>DF</p>
              <p>GK</p>
            </div>
            <div className={detail.content_player_list}>
              <div className={detail.content_player}>
                <img src="/images/test/player.jpg" alt="선수 이미지" />
                <p>마르틴 외데고르</p>
              </div>
              <div className={detail.content_player}>
                <img src="/images/test/player.jpg" alt="선수 이미지" />
                <p>마르틴 외데고르</p>
              </div>
              <div className={detail.content_player}>
                <img src="/images/test/player.jpg" alt="선수 이미지" />
                <p>마르틴 외데고르</p>
              </div>
            </div>
          </div>
          <div className={detail.content_highlight_container}>
            <img
              className={detail.content_highlight}
              src="/images/test/test_img.jpg"
              alt="하이라이트 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
