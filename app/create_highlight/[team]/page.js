import Link from 'next/link';
import team from '../../../styles/team.module.scss';

export default function page() {
  return (
    <>
      <div className={team.discriptor}>
        <p className={team.discriptor_logo}>HighLighter</p>
        <p className={team.discriptor_ment}>
          하이라이트를 만드실 스쿼드의 팀을 선택하세요
        </p>
      </div>
      <div className={team.team_container}>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/arsenal.svg" />
          <p className={team.team_name}>아스널</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/chelsea.svg" />
          <p className={team.team_name}>첼시</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/liverpool.svg" />
          <p className={team.team_name}>리버풀</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/manchester_united.svg" />
          <p className={team.team_name}>맨체스터 유나이티드</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/tottenham.svg" />
          <p className={team.team_name}>토트넘</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/arsenal.svg" />
          <p className={team.team_name}>아스널</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/chelsea.svg" />
          <p className={team.team_name}>첼시</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/liverpool.svg" />
          <p className={team.team_name}>리버풀</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/manchester_united.svg" />
          <p className={team.team_name}>맨체스터 유나이티드</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/tottenham.svg" />
          <p className={team.team_name}>토트넘</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/arsenal.svg" />
          <p className={team.team_name}>아스널</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/chelsea.svg" />
          <p className={team.team_name}>첼시</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/liverpool.svg" />
          <p className={team.team_name}>리버풀</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/manchester_united.svg" />
          <p className={team.team_name}>맨체스터 유나이티드</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/tottenham.svg" />
          <p className={team.team_name}>토트넘</p>
        </Link>
        <Link href={'/create_highlight/upload'}>
          <img src="/icon/teams/arsenal.svg" />
          <p className={team.team_name}>아스널</p>
        </Link>
      </div>
    </>
  );
}
