import league from '../../../styles/league.module.scss';

export default function page() {
  return (
    <>
      <div className={league.discriptor}>
        <p className={league.discriptor_logo}>HighLighter</p>
        <p className={league.discriptor_ment}>
          하이라이트를 만드실 스쿼드의 리그를 선택하세요
        </p>
      </div>
      <div className={league.selector_container}>
        <img src="/icon/league/premierleague.svg" />
        <img src="/icon/league/laliga.svg" />
        <img src="/icon/league/ligue1.svg" />
        <img src="/icon/league/bundesliga.svg" />
        <img src="/icon/league/serie_a.svg" />
        <img src="/icon/league/international.svg" />
      </div>
    </>
  );
}
