'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { getUserHighlight } from '@/app/apis/user';

import myhighlight from '@/styles/components/main/myhighlight.module.scss';
import { useEffect, useState } from 'react';
import Loading from '../Loading';

export default function MyHighLight() {
  const { data: session, status } = useSession();

  const [userTeam, setUserTeam] = useState([]);
  const userEmail = session?.user?.email;

  useEffect(() => {
    const getHighlight = async () => {
      const result = await getUserHighlight(userEmail);
      return setUserTeam(result);
    };
    getHighlight();
  }, [userEmail]);
  if (status === 'loading') {
    return <Loading />;
  }
  return (
    <div className={myhighlight.container}>
      {session ? (
        <div className={myhighlight.inner}>
          <div className={myhighlight.header}>
            <p>{session?.user.nickname}님의 하이라이트</p>
          </div>
          <div className={myhighlight.teams}>
            {userTeam.length === 0 ? (
              <div className={myhighlight.teams_empty}>
                하이라이트를 생성하고 내 하이라이트를 확인해보세요!
              </div>
            ) : (
              userTeam.map((team) => {
                const { league, teamName, _id } = team;
                const url = `detail_highlight/${league}/${teamName}/${_id}`;
                return (
                  <Link key={_id} href={url} className={myhighlight.teams_logo}>
                    <Image
                      width={70}
                      height={70}
                      alt={team}
                      src={`/icon/teams/${league}/${teamName}.svg`}
                    />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div className={`${myhighlight.inner} ${myhighlight.guest}`}>
          <div className={myhighlight.header}>
            <p>지원님의 하이라이트</p>
          </div>
          <div className={myhighlight.teams}>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/아스널.svg"
              />
            </div>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/첼시.svg"
              />
            </div>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/리버풀.svg"
              />
            </div>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/맨체스터 유나이티드.svg"
              />
            </div>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/토트넘 홋스퍼.svg"
              />
            </div>
            <div className={myhighlight.teams_logo}>
              <Image
                width={70}
                height={70}
                alt="미리보기 이미지"
                src="/icon/teams/pl/맨체스터 시티.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
