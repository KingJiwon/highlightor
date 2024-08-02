'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import playerBox from '../../styles/components/detail/playerbox.module.scss';

export default function PlayerBox({ postData, league, team, uniqueClass }) {
  const [selectedPosition, setSelectedPosition] = useState('fw');

  const positions = ['fw', 'mf', 'df', 'gk'];

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  useEffect(() => {
    // 배경 이미지 설정
    document.documentElement.style.setProperty(
      '--background-image',
      `url('/icon/teams/${league}/${team}.svg')`,
    );
  });
  return (
    <div className={playerBox.player_container}>
      <div className={playerBox.position_container}>
        {positions.map((position) => (
          <p
            className={
              selectedPosition === position
                ? playerBox.player_position_selected
                : playerBox.player_position
            }
            key={position}
            onClick={() => handlePositionSelect(position)}
          >
            {position.toUpperCase()}
          </p>
        ))}
      </div>
      <div className={`${playerBox.player_list} ${uniqueClass}`}>
        {postData.squad[selectedPosition].map((player) => (
          <div key={player.id} className={playerBox.player}>
            <Image
              width={120}
              height={120}
              src={`${player.playerImg}`}
              alt={player.name}
            />
            <div className={playerBox.player_info}>
              <Image
                width={25}
                height={20}
                className={playerBox.player_season}
                src={`${player.seasonImg}`}
                alt={player.className}
              />
              <p className={playerBox.player_name}>{player.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
