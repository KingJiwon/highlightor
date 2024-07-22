'use client';

import { useContext, createContext, useState } from 'react';

const SquadContext = createContext();
export const useSquad = () => useContext(SquadContext);
export default function SquadProvider({ children }) {
  const [squad, setSquad] = useState({
    fw: [],
    mf: [],
    df: [],
    gk: [],
  });

  const addPlayer = (position, playerImg, seasonImg, name, className) => {
    setSquad((prev) => ({
      ...prev,
      [position]: [
        ...prev[position],
        { playerImg, seasonImg, name, className },
      ],
    }));
  };

  const removePlayer = (position, id) => {
    setSquad((prev) => ({
      ...prev,
      [position]: prev[position].filter((player) => player.id !== id),
    }));
  };

  return (
    <SquadContext.Provider value={{ squad, addPlayer, removePlayer }}>
      {children}
    </SquadContext.Provider>
  );
}
