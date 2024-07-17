'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getPlayerData } from '@/app/apis/data';
import searchModal from '../../styles/components/modal/searchModal.module.scss';

export default function SearchPlayer() {
  // 선수 고유 식별자의 앞 3자리가 시즌 정보

  const router = useRouter();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    // name으로 선수 고유식별자 찾기
    e.preventDefault();
    const filteredData = data.filter(
      (el) => el.name === inputRef.current.value,
    );
    setSearchData(filteredData);
  };

  // spid 액션샷 없으면 -> spid 대갈사진 없으면-> pid기본 대갈 사진
  const handleImageError = (e, id, retry) => {
    if (retry === 1) {
      e.target.src = `https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${id}.png`;
      e.target.onerror = () => handleImageError(e, id, 2);
    } else if (retry === 2) {
      const pid = String(id).slice(-6).replace(/^0+/, '');
      e.target.src = `https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${pid}.png`;
    }
  };

  useEffect(() => {
    // 서버컴포넌트에서 보내기
    const playerData = async () => setData((await getPlayerData()).data);
    playerData();
  }, []);

  return (
    <div className={searchModal.container}>
      <div className={searchModal.header}>
        선수 검색
        <button
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          type="button"
          className={searchModal.header_exit}
        ></button>
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
              onError={(e) => {
                handleImageError(e, id, 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
