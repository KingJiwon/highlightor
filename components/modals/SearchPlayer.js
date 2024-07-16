'use client';

import { useRef, useState } from 'react';
import { getPlayerData } from '@/app/apis/data';
import searchModal from '../../styles/components/modal/searchModal.module.scss';

export default function SearchPlayer() {
  // 선수 고유 식별자의 앞 3자리가 시즌 정보
  // name으로 선수 고유식별자 찾기

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.filter(
      (el) => el.name === inputRef.current.value,
    );
    setSearchData(filteredData);
  };

  const playerData = async () => setData((await getPlayerData()).data);
  playerData(); // useEffect 처리 or 서버컴포넌트에서 보내기
  // // 액션샷 or 없으면 대갈 사진

  return (
    <div className={searchModal.container}>
      <div className={searchModal.header}>
        선수 검색
        <button type="button" className={searchModal.header_exit}></button>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={searchModal.form}
      >
        <input ref={inputRef} type="text" placeholder="선수명을 입력해주세요" />
        <button type="submit">검색</button>
      </form>
      <div className={searchModal.search_list}>
        {searchData.map((el) => {
          const { id } = el;
          return (
            <img
              key={id}
              src={`https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${id}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}
