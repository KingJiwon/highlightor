'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getPlayerData, getSeasonData } from '@/app/apis/data';
import searchModal from '../../styles/components/modal/searchModal.module.scss';

export default function SearchPlayer() {
  const router = useRouter();
  const [playerData, setPlayerData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [retryCount, setRetryCount] = useState({});
  // const [loadList, setLoadList] = useState({});
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // 선수검색
  const handleSubmit = (e) => {
    e.preventDefault();
    // name으로 선수 고유식별자 찾기
    if (inputRef.current.value.trim() === '') {
      return setError('검색어를 입력해주세요');
    }
    setRetryCount({});
    const searchedNameList = playerData.filter((el) =>
      el.name.includes(inputRef.current.value),
    );

    // 시즌이미지 정보 추가 (고유 식별자 앞 3자리 -> 시즌id)
    const addSeason = searchedNameList.map((el) => {
      const findSeason = seasonData.find(
        (season) => season.seasonId === +String(el.id).slice(0, 3),
      );
      const { seasonImg, className } = findSeason;
      return {
        ...el,
        seasonImg,
        className,
      };
    });
    setError(false);
    return setSearchData(addSeason);
  };

  // 이미지 검색
  const handleImageError = (e, id) => {
    setRetryCount((prev) => {
      const retry = (prev[id] || 0) + 1;
      const newRetryCount = { ...prev, [id]: retry };
      if (retry === 1) {
        e.target.src = `https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${id}.png`;
      } else if (retry === 2) {
        const pid = String(id).slice(-6).replace(/^0+/, '');
        e.target.src = `https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${pid}.png`;
      } else if (retry === 3) {
        e.target.src = '/images/undefined_player.png';
        e.target.onerror = () => console.log('이미지 로드 오류');
      }
      return newRetryCount;
    });
  };

  // const handleOnLoad = (id) => {
  //   const newLoadList = { ...loadList, [id]: true };
  //   // console.log(Object.values(newLoadList));
  //   return setLoadList(newLoadList);
  // };

  useEffect(() => {
    // data fetch 서버컴포넌트에서 보내기
    const player = async () => setPlayerData((await getPlayerData()).data);
    player();
    const season = async () => setSeasonData((await getSeasonData()).data);
    season();
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
        {error && <p className={searchModal.form_caption}>{error}</p>}
        <div className={searchModal.form_input_box}>
          <input
            ref={inputRef}
            type="text"
            placeholder="선수명을 입력해주세요"
          />
          <button type="submit">검색</button>
        </div>
      </form>
      <div className={searchModal.search_list}>
        {searchData.map((el) => {
          const { id, name, seasonImg, className } = el;

          return (
            <div key={id} className={searchModal.search_list_player}>
              <img
                className={searchModal.search_list_player_img}
                alt={name}
                src={`https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${id}.png`}
                onError={(e) => {
                  handleImageError(e, id);
                }}
              />
              <div className={searchModal.search_list_player_info}>
                <Image
                  width={30}
                  height={20}
                  className={searchModal.search_list_player_season}
                  alt={className}
                  src={seasonImg}
                />
                <p className={searchModal.search_list_player_name}>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
