import React, { useState } from 'react';
import TilesImage from './TilesImageMap';

import './Tiles.scss';

// get static state (or rando) -> choose random 4 indexs -> create image place holders -> set to match on click -> show if match
// requires console buttons to check answer / refresh game

const Tiles: React.FC = () => {
  const [gameState] = useState({
    list: TilesImage.TilesImageMap()
  });
  const Grey: React.FC = TilesImage.UnchoosenTile;

  const getFourRandomFromArray = (array: Array<string>) => {
    const indexList = array.map((val, index) => index);
    const randomArray = indexList.sort(() => 0.5 - Math.random());
    return randomArray.slice(0, 4);
  };

  const [randomList, setRandom] = useState({
    list: getFourRandomFromArray(gameState.list),
    ansStack: [-1]
  });

  /* global HTMLButtonElement, MouseEvent */
  const handleMouseClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: number
  ) => {
    e.preventDefault();
    const copy = randomList.ansStack;
    copy.push(data);
    setRandom({
      ...randomList,
      ansStack: copy
    });
  };

  const DisplayRandom: React.FC = () => {
    return (
      <div className="columns is-mobile">
        <figure className="column image is-128by128 is-2 has-text-centered has-text-black">
          <p> Match accordingly! </p>
        </figure>
        {randomList.list.map((val, ind) => {
          const src = gameState.list[val];
          return (
            <figure className="column image is-128by128 is-2" key={val}>
              <img src={src} alt={ind.toString()} />
            </figure>
          );
        })}
      </div>
    );
  };

  const PlayArea: React.FC = () => {
    return <div>Play Area! </div>;
  };

  const ImHeader: React.FC = () => {
    return (
      <div className="columns is-mobile">
        {gameState.list.map((val, ind) => {
          return (
            <figure className="column image is-128by128" key={val}>
              <button onClick={e => handleMouseClick(e, ind)} type="button">
                <img src={val} alt={ind.toString()} />
              </button>
            </figure>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container notification is-warning">
      <div>
        <article className="has-text-centered has-text-black">
          <p>
            Welcome to the tiles game, click on the right tiles matching the
            pattern shown!
          </p>
        </article>
      </div>
      <ImHeader />
      <DisplayRandom />
      <Grey />
      <PlayArea />
    </div>
  );
};

export default Tiles;
