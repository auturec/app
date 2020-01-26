import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useToasts } from 'react-toast-notifications';
// add image links separately
import tempImg from '../../../assets/images/associate/vehicles/scooter.svg';
import { ImageKeys } from './GameLogic';

import Item from './Item';
import ItemDropContainer from './ItemDropContainer';

interface CategoryState {
  state: string[];
}

const DefaultCategories: CategoryState = {
  state: ImageKeys()
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
          <div className="left">
            <h5>Items</h5>
            <Item
              name={currentGameState.currentState}
              image={tempImg}
              handleDroppedItem={handleDropped}
            />
            <Item
              name={currentGameState.currentState}
              image={tempImg}
              handleDroppedItem={handleDropped}
            />
          </div>
          <div className="right">
            <h5>Categories</h5>
            <ItemDropContainer
              name={currentGameState.currentState}
              image={tempImg}
            />
          </div>
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend}>
          <div className="left">
            <h5>Items</h5>
            <Item
              name={currentGameState.currentState}
              image={tempImg}
              handleDroppedItem={handleDropped}
            />
          </div>
          <div className="right">
            <h5>Categories</h5>
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
