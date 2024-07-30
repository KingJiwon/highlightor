import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import team from '../../../styles/pages/team.module.scss';

export default async function page(props) {
  const { league } = props.params;
  const directoryPath = path.join(process.cwd(), 'public/icon/teams/', league);
  const teamList = fs.readdirSync(directoryPath);

  return (
    <>
      <div className={team.discriptor_container}>
        <div className={team.discriptor_inner}>
          <p className={team.discriptor_logo}>HighLighter</p>
          <p className={team.discriptor_ment}>
            하이라이트를 만드실 스쿼드의 팀을 선택하세요
          </p>
        </div>
      </div>

      <div className={team.team_container}>
        <div className={team.team_inner}>
          {teamList.map((teamFile) => {
            const teamName = teamFile.replace('.svg', '');
            return (
              <Link
                key={teamFile}
                href={`/create_highlight/upload/${league}/${teamName}`}
              >
                <img src={`/icon/teams/${league}/${teamFile}`} />
                <p className={team.team_name}>{teamName}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
