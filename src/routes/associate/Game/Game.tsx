import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useToasts } from 'react-toast-notifications';

import { ImageKeys, GameLogic } from './GameLogic';
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

  const handleDropped: (name: string) => void = name => {
    addToast(`Correct to match ${name}!`, {
      appearance: 'success',
      autoDismiss: true
    });
  };

  const getRandomFromArray = (array: Array<string>) => {
    const randomArray = array.sort(() => 0.5 - Math.random());
    return randomArray.slice(0, 2);
  };

  const getImages = (category: string) => {
    const allImages = GameLogic();
    const categoryImages = allImages[category];
    const selectedImages = getRandomFromArray(categoryImages);
    const itemImg = selectedImages[0];
    const containerImg = selectedImages[selectedImages.length - 1];
    return { itemImg, containerImg };
  };

  return (
    <div className="row">
      <BrowserView>
        <DndProvider backend={Backend}>
          {globalGameState.state.map(val => {
            const catImg = getImages(val);
            return (
              <div>
                <div className="left">
                  <Item
                    name={val}
                    image={catImg.itemImg}
                    handleDroppedItem={handleDropped}
                  />
                </div>
                <div className="right">
                  <ItemDropContainer name={val} image={catImg.containerImg} />
                </div>
              </div>
            );
          })}
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend} />
      </MobileView>
    </div>
  );
};

export default Game;
