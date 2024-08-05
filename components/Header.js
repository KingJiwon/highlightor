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
            <Link href={'/login'} scroll={false} className={header.login_btn}>
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
            <li>
              <Link href={'/board_highlight'}>MY 하이라이트</Link>
            </li>
            <li>
              <Link href={'/board_highlight/pl'}>Premier League</Link>
            </li>
            <li>
              <Link href={'/board_highlight/laliga'}>La Liga</Link>
            </li>
            <li>
              <Link href={'/board_highlight/serie'}>SERIE A</Link>
            </li>
            <li>
              <Link href={'/board_highlight/bundes'}>Bundesliga</Link>
            </li>
            <li>
              <Link href={'/board_highlight/ligue1'}>LIGUE 1</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
