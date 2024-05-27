import Link from 'next/link';
import header from '../styles/header.module.scss';

export default function Header() {
  return (
    <div className={header.container}>
      <div className={header.top_menu}>
        <p className={header.login_btn}>로그인</p>
      </div>
      <div className={header.logo_container}>
        <Link href={'/'} className={header.logo}>
          HighLightor
        </Link>
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
