'use client';

import Link from 'next/link';
import Loading from '@/components/Loading';
import { useSession } from 'next-auth/react';

import main from '../styles/pages/main.module.scss';

export default function Home() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <Loading />;
  }

  return (
    <div className={main.main_container}>
      <div className={main.popular_highlight_container}>
        <div className={main.popular_highlight_inner}>
          <div className={main.popular_highlight_header}>
            <img
              src="/icon/teams/pl/arsenal.svg"
              alt="팀 로고"
              className={main.popular_highlight_header_logo}
            />
            <p className={main.popular_highlight_header_title}>
              MADDD님의 아스널 하이라이트
            </p>
            <p className={main.popular_highlight_header_info}>추천10 조회28</p>
          </div>
          <div className={main.popular_highlight_main}>
            <img
              className={main.popular_highlight_main_btn_left}
              src="/icon/normal/left.svg"
              alt="왼쪽 화살표"
            />
            <div className={main.popular_highlight_main_player}>
              <div className={main.popular_highlight_main_player_container}>
                <p className={main.popular_highlight_main_player_position}>
                  FW
                </p>
                <div className={main.popular_highlight_main_player_img}>
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                </div>
              </div>
              <div className={main.popular_highlight_main_player_container}>
                <p className={main.popular_highlight_main_player_position}>
                  MF
                </p>
                <div className={main.popular_highlight_main_player_img}>
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                </div>
              </div>
              <div className={main.popular_highlight_main_player_container}>
                <p className={main.popular_highlight_main_player_position}>
                  DF
                </p>
                <div className={main.popular_highlight_main_player_img}>
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                </div>
              </div>
              <div className={main.popular_highlight_main_player_container}>
                <p className={main.popular_highlight_main_player_position}>
                  GK
                </p>
                <div className={main.popular_highlight_main_player_img}>
                  <img src="/images/test/player.jpg" alt="선수 이미지" />
                </div>
              </div>
            </div>
            <img
              src="/images/test/test_img.jpg"
              className={main.popular_highlight_main_video}
            />
            <img
              className={main.popular_highlight_main_btn_right}
              src="/icon/normal/right.svg"
              alt="오른쪽 화살표"
            />
          </div>
        </div>
      </div>

      <div className={main.create_highlight_btn_container}>
        <div className={main.create_highlight_btn_inner}>
          <Link
            href={'/create_highlight/league'}
            className={main.create_highlight_btn}
          >
            내 구단 하이라이트 만들기
          </Link>
        </div>
      </div>

      <div className={main.user_highlight_container}>
        <div className={main.user_highlight_inner}>
          <div className={main.user_highlight_header}>
            <p>{session?.user.nickname}님의 하이라이트</p>
          </div>
          <div className={main.user_highlight_teams}>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/arsenal.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/chelsea.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/liverpool.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/manchester-united.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/tottenham.svg" />
            </div>
            <div className={main.user_highlight_teams_logo}>
              <img src="/icon/teams/pl/manchester-city.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
