import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useToasts } from 'react-toast-notifications';
import tempImg from '../../../assets/images/associate/scooter.svg';

import Item from './Item';

type CategoryState = {
  state: string[];
};

const DefaultCategories: CategoryState = {
  state: ['Vehicles', 'Food', 'Shapes', 'Color', 'Numbers']
};

export const Game: React.FC = () => {
  const getRandomFromArray = (array: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const [globalGameState] = useState(DefaultCategories);

  const [currentGameState, setCurrentGameState] = useState({
    currentState: getRandomFromArray(globalGameState.state)
  });

  useEffect(() => {
    setCurrentGameState({
      currentState: getRandomFromArray(globalGameState.state)
    });
  }, [globalGameState.state]);
  const { addToast } = useToasts();
  const handleClick = () => {
    addToast('Correct!', {
      appearance: 'success',
      autoDismiss: true
    });
  };
  return (
    <div>
      <BrowserView>
        <DndProvider backend={Backend}>
          <button type="button" onClick={handleClick}>
            <Item name={currentGameState.currentState} image={tempImg} />
          </button>
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend}>
          <button type="button" onClick={handleClick}>
            <Item name={currentGameState.currentState} image={tempImg} />
          </button>
        </DndProvider>
      </MobileView>
    </div>
  );
};

export default Game;
