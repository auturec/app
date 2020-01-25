import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useToasts } from 'react-toast-notifications';
// add image links separately
import tempImg from '../../../assets/images/associate/scooter.svg';

import Item from './Item';
import ItemDropContainer from './ItemDropContainer';

interface CategoryState {
  state: string[];
}

const DefaultCategories: CategoryState = {
  state: ['Vehicles', 'Food', 'Shapes', 'Color', 'Numbers']
};

export const Game: React.FC = () => {
  const { addToast } = useToasts();
  const [globalGameState] = useState(DefaultCategories);

  const getRandomFromArray = (array: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const [currentGameState, setCurrentGameState] = useState({
    currentState: getRandomFromArray(globalGameState.state)
  });

  useEffect(() => {
    setCurrentGameState({
      currentState: getRandomFromArray(globalGameState.state)
    });
  }, [globalGameState.state]);

  const handleDropped: (name: string) => void = name => {
    addToast(`Correct to match ${name}!`, {
      appearance: 'success',
      autoDismiss: true
    });
  };
  return (
    <div className="row">
      <BrowserView>
        <DndProvider backend={Backend}>
          <div className="column left">
            <Item
              name={currentGameState.currentState}
              image={tempImg}
              handleDroppedItem={handleDropped}
            />
          </div>
          <div className="column right">
            <ItemDropContainer
              name={currentGameState.currentState}
              image={tempImg}
            />
          </div>
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend}>
          <div className="column left">
            <Item
              name={currentGameState.currentState}
              image={tempImg}
              handleDroppedItem={handleDropped}
            />
          </div>
          <div className="column right">
            <ItemDropContainer
              name={currentGameState.currentState}
              image={tempImg}
            />
          </div>
        </DndProvider>
      </MobileView>
    </div>
  );
};

export default Game;
