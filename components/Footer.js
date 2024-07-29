import Link from 'next/link';
import footer from '../styles/components/footer.module.scss';

export default function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.inner}>
        <div className={footer.logo_container}>
          <p className={footer.logo}>HighLightor</p>
        </div>
        <div className={footer.info_container}>
          <div className={footer.info_github}>
            <p className={footer.info_github_logo}></p>
            <Link href="https://github.com/KingJiwon">KingJiwon</Link>
          </div>
          <div className={footer.info_email}>
            <p className={footer.info_email_logo}></p>
            <p className={footer.info_email_text}>wldnjs0401@naver.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
