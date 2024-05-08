import header from '../styles/header.module.scss';

export default function Header() {
  return (
    <div className={header.container}>
      <div className={header.top_menu}>
        <div className={header.login_btn}>로그인</div>
      </div>
      <div className={header.logo_container}>
        <h1 className={header.logo}>HighLightor</h1>
      </div>
      <div className={header.discriptor}>
        FC온라인 플레이 하이라이트를 생성하고 공유해보세요!
      </div>
      <div className={header.nav_bar}>
        <ul>
          <li>MY 하이라이트</li>
          <li>Premier League</li>
          <li>La Liga</li>
          <li>SERIE A</li>
          <li>Bundesliga</li>
          <li>LIGUE 1</li>
        </ul>
      </div>
    </div>
  );
}
