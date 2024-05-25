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
      </div>
    </>
  );
}
