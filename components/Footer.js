import Link from 'next/link';
import footer from '../styles/components/footer.module.scss';

export default function Footer() {
  return (
    <footer className={footer.container}>
      <div className={footer.inner}>
        <ul className={footer.logo_container}>
          <li className={footer.logo}>
            <Link href={'/'}>HighLightor</Link>
          </li>
        </ul>
        <ul className={footer.nav_highlight}>
          Make HighLight
          <li>
            <Link href={'/'}>Upload HighLight</Link>
          </li>
          <li>
            <Link href={'/'}>How to make capture</Link>
          </li>
        </ul>
        <ul className={footer.nav_board}>
          HighLight Board
          <li>
            <Link href={'/'}>Premier League</Link>
          </li>
          <li>
            <Link href={'/'}>BundesLiga</Link>
          </li>
          <li>
            <Link href={'/'}>Laliga</Link>
          </li>
          <li>
            <Link href={'/'}>Ligue 1</Link>
          </li>
          <li>
            <Link href={'/'}>Serie A</Link>
          </li>
        </ul>
        <ul className={footer.info_container}>
          Contact
          <li className={footer.info_github}>
            <p className={footer.info_github_logo}></p>
            <Link href="https://github.com/KingJiwon">KingJiwon</Link>
          </li>
          <li className={footer.info_email}>
            <p className={footer.info_email_logo}></p>
            <p className={footer.info_email_text}>wldnjs0401@naver.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
