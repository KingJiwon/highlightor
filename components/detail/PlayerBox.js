'use client';

import { useState } from 'react';
import Image from 'next/image';
import playerBox from '../../styles/components/detail/playerbox.module.scss';

export default function PlayerBox({ postData }) {
  const [selectedPosition, setSelectedPosition] = useState('fw');

  const positions = ['fw', 'mf', 'df', 'gk'];

  console.log(postData.squad[selectedPosition]);

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };
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
      <div className={playerBox.player_list}>
        {postData.squad[selectedPosition].map((player) => (
          <div key={player.id} className={playerBox.player}>
            <Image
              width={130}
              height={130}
              src={`${player.playerImg}`}
              alt="선수 이미지"
            />
            <div className={playerBox.player_info}>
              <Image
                width={25}
                height={20}
                className={playerBox.player_season}
                src={`${player.seasonImg}`}
              />
              <p className={playerBox.player_name}>{player.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
