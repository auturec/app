import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useToasts } from 'react-toast-notifications';
import { DraggableEventHandler } from 'react-draggable';

import { ImageKeys, GameLogic } from './GameImages';
import Item from './Item';
import ItemDropContainer from './ItemDropContainer';

interface CategoryState {
  state: string[];
}

const DefaultCategories: CategoryState = {
  state: ImageKeys()
};

interface GameImgProp {
  img: string;
  category: string;
}

interface GameComponentProp {
  store: GameImgProp[];
}

export const Game: React.FC = () => {
  const { addToast } = useToasts();
  const [globalGameState] = useState(DefaultCategories);

  const getRandomFromArray = (array: Array<string>) => {
    const randomArray = array.sort(() => 0.5 - Math.random());
    return randomArray.slice(0, 2);
  };

  const getRanEleFromArray = (array: GameImgProp[]) => {
    const ranId = Math.floor(array.length * Math.random());
    return array[ranId];
  };

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * from https://stackoverflow.com/users/310500/laurens-holst
   */
  const shuffleArray: (
    original: Array<GameImgProp>
  ) => Array<GameImgProp> = original => {
    const array = original;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getImages = (category: string) => {
    const allImages = GameLogic();
    const categoryImages = allImages[category];
    const selectedImages = getRandomFromArray(categoryImages);
    const itemImg = selectedImages[0];
    const containerImg = selectedImages[selectedImages.length - 1];
    return { itemImg, containerImg, category };
  };

  const setUpGame = () => {
    const items: GameImgProp[] = [];
    const containers: GameImgProp[] = [];
    globalGameState.state.forEach(val => {
      const img = getImages(val);
      const itemVal: GameImgProp = {
        img: img.itemImg,
        category: img.category
      };
      const containerVal: GameImgProp = {
        img: img.containerImg,
        category: img.category
      };
      items.push(itemVal);
      containers.push(containerVal);
    });
    const shuffledItems = shuffleArray(items);
    const shuffledContainers = shuffleArray(containers);
    return {
      shuffledItems,
      shuffledContainers
    };
  };

  const [displayGame] = useState(setUpGame());
  const [displayWindow] = useState({
    window: getRanEleFromArray(displayGame.shuffledContainers)
  });

  const handleDropped: DraggableEventHandler = (e, data) => {
    if (displayWindow.window.category === data.node.classList[0]) {
      addToast(`Correct to match ${displayWindow.window.category}!`, {
        appearance: 'success',
        autoDismiss: true
      });
    } else {
      addToast(`Wrong Category!`, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  const DisplayItems: React.FC<GameComponentProp> = ({ store }) => {
    return (
      <div>
        {store.map((val, index) => {
          return (
            <div
              key={val.img}
              className={index < store.length / 2 ? 'left' : 'right'}
            >
              <div>
                <Item
                  name={val.category}
                  image={val.img}
                  handleDroppedItem={handleDropped}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const DisplayContainer: React.FC = () => {
    return (
      <div>
        <ItemDropContainer image={displayWindow.window.img} />
      </div>
    );
  };

  return (
    <div className="row">
      <BrowserView>
        <DndProvider backend={Backend}>
          <DisplayContainer />
          <DisplayItems store={displayGame.shuffledItems} />
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend} />
        <DisplayContainer />
        <DisplayItems store={displayGame.shuffledItems} />
      </MobileView>
    </div>
  );
};

export default Game;
