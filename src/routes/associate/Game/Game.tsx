import React, { useState, useEffect } from 'react';
import DragContainer from '../DragContainer/DragContainer';

export const Game: React.FC = () => {
  const getRandomFromArray = (array: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const [globalGameState] = useState({
    state: ['vehicles', 'food', 'shapes', 'color', 'numbers']
  });

  const [currentGameState, setCurrentGameState] = useState({
    currentState: getRandomFromArray(globalGameState.state)
  });

  useEffect(() => {
    setCurrentGameState({
      currentState: getRandomFromArray(globalGameState.state)
    });
  }, [globalGameState.state]);

  return (
    <div>
      <DragContainer name={currentGameState.currentState} />
      <DragContainer name={currentGameState.currentState} />
    </div>
  );
};

export default Game;
