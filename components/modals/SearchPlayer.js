'use client';

import { CANNOT_FIND_PLAYER, EMPTY_SEARCH_INPUT } from '@/util/variable';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getPlayerData, getSeasonData } from '@/app/apis/data';
import { useSquad } from '@/hooks/SquadContext';
import Loading from '../Loading';
import searchModal from '../../styles/components/modal/searchModal.module.scss';

export default function SearchPlayer() {
  const router = useRouter();
  const { position } = useParams();
  const { addPlayer } = useSquad();

  // dataState
  const [playerData, setPlayerData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  // handlingState
  // eslint-disable-next-line no-unused-vars
  const [retryCount, setRetryCount] = useState({});
  const [loadList, setLoadList] = useState({});
  const [isAllLoad, setIsAllLoad] = useState(true);
  const [error, setError] = useState(null);

  // refs
  const inputRef = useRef(null);

  // 선수검색
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchData(null);
    // name으로 선수 고유식별자 찾기
    if (inputRef.current.value.trim() === '') {
      return setError(EMPTY_SEARCH_INPUT);
    }
    const searchedNameList = playerData.filter((el) =>
      el.name.includes(inputRef.current.value),
    );
    if (searchedNameList.length === 0) {
      setError(CANNOT_FIND_PLAYER);
      return setIsAllLoad(true);
    }

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
    setRetryCount({});
    setError(false);
    setIsAllLoad(false);
    return setSearchData(addSeason);
  };

  // 이미지 로드 핸들링
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
      }
      return newRetryCount;
    });
  };

  // 선수 이미지 로딩
  const handleOnLoad = (id) => {
    const newLoadList = { ...loadList, [id]: true };
    setLoadList(newLoadList);
    const checkAllLoad = Object.values(newLoadList).every(
      (value) => value === true,
    );
    if (checkAllLoad) {
      setIsAllLoad(true);
    }
  };

  // 선수 추가
  const handleClickPlayer = (event, id, seasonImg, name, className) => {
    const playerImg = event.target.children[0].src;
    router.back();
    addPlayer(position, id, playerImg, seasonImg, name, className);
    console.log('추가 성공');
  };

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
      {isAllLoad ? null : <Loading />}
      <div className={searchModal.search_list}>
        {searchData ? (
          searchData.map((el) => {
            const { id, name, seasonImg, className } = el;

            return (
              <div
                key={id}
                className={searchModal.search_list_player}
                onClick={(event) => {
                  handleClickPlayer(event, id, seasonImg, name, className);
                }}
              >
                <img
                  className={searchModal.search_list_player_img}
                  alt={name}
                  src={`https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${id}.png`}
                  onError={(e) => {
                    handleImageError(e, id);
                  }}
                  onLoad={() => {
                    handleOnLoad(id);
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
          })
        ) : (
          <p>검색된 데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
