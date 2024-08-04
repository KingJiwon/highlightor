'use client';

import myhighlight from '@/styles/components/main/myhighlight.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function MyHighLight({ name, userTeam }) {
  return (
    <div className={myhighlight.container}>
      <div className={myhighlight.inner}>
        <div className={myhighlight.header}>
          <p>{name}님의 하이라이트</p>
        </div>
        <div className={myhighlight.teams}>
          {userTeam.map((team) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
