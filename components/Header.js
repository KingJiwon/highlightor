'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import header from '../styles/components/header.module.scss';

export default function Header() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <></>;
  }

  return (
    <div className={header.container}>
      <div className={header.inner}>
        <div className={header.top_menu}>
          {session?.user ? (
            <div>
              <Link
                href={'/'}
                onClick={() => {
                  signOut();
                }}
                className={header.login_btn}
              >
                로그아웃
              </Link>
            </div>
          ) : (
            <Link href={'/login'} className={header.login_btn}>
              로그인
            </Link>
          )}
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
    </div>
  );
}
