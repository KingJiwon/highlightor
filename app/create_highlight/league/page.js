import Link from 'next/link';
import Image from 'next/image';
import league from '../../../styles/pages/league.module.scss';

export default function page() {
  return (
    <>
      <div className={league.discriptor_container}>
        <div className={league.discriptor_inner}>
          <p className={league.discriptor_logo}>HighLighter</p>
          <p className={league.discriptor_ment}>
            하이라이트를 만드실 스쿼드의 리그를 선택하세요
          </p>
        </div>
      </div>
      <div className={league.selector_container}>
        <div className={league.selector_inner}>
          <Link href={'/create_highlight/pl'} className={league.selector_pl}>
            <Image
              width={50}
              height={50}
              alt="프리미어리그"
              src="/icon/league/pl.svg"
            />
          </Link>
          <Link
            href={'/create_highlight/laliga'}
            className={league.selector_laliga}
          >
            <Image
              width={50}
              height={50}
              alt="라리가"
              src="/icon/league/laliga.svg"
            />
          </Link>
          <Link
            href={'/create_highlight/ligue1'}
            className={league.selector_ligue1}
          >
            <Image
              width={50}
              height={50}
              alt="리그앙"
              src="/icon/league/ligue1.svg"
            />
          </Link>
          <Link
            href={'/create_highlight/bundes'}
            className={league.selector_bundes}
          >
            <Image
              width={50}
              height={50}
              alt="분데스리가"
              src="/icon/league/bundes.svg"
            />
          </Link>
          <Link
            href={'/create_highlight/serie'}
            className={league.selector_serie}
          >
            <Image
              width={50}
              height={50}
              alt="세리에A"
              src="/icon/league/serie.svg"
            />
          </Link>
          <Link
            href={'/create_highlight/international'}
            className={league.selector_international}
          >
            <Image
              width={50}
              height={50}
              alt="인터내셔널"
              src="/icon/league/international.svg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
