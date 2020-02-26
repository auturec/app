import React, { useState } from 'react';
import TilesImage from './TilesImageMap';

import './Tiles.scss';

// get static state (or rando) -> choose random 4 indexs -> create image place holders -> set to match on click -> show if match
// requires console buttons to check answer / refresh game

const Tiles: React.FC = () => {
  const list = TilesImage.TilesImageMap();
  const getFourRandomFromArray = (array: Array<string>) => {
    const indexList = array.map((val, index) => index);
    const randomArray = indexList.sort(() => 0.5 - Math.random());
    return randomArray.slice(0, 4);
  };
  const ans = getFourRandomFromArray(list);

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * from https://stackoverflow.com/users/310500/laurens-holst
   * This works, but apparent it binds on the second call for both ans and random list
   */
  const shuffleArray: (original: Array<number>) => Array<number> = original => {
    const array = original;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [gameState] = useState({
    list,
    ans
  });
  const Grey: React.FC = TilesImage.UnchoosenTile;

  const [randomList] = useState({
    display: shuffleArray(gameState.ans),
    ansStack: [-1, -1, -1, -1],
    currPos: 0,
    ans: [-1]
  });

  /* global HTMLButtonElement, MouseEvent */
  const handleImageClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: number
  ) => {
    e.preventDefault();
    randomList.ans.push(data);
    // console.log(gameState);
    // console.log(randomList);
  };

  const DisplayRandom: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        {gameState.ans.map((val, ind) => {
          const src = gameState.list[val];
          return (
            <div className="column" key={val}>
              <img src={src} alt={ind.toString()} />
            </div>
          );
        })}
      </div>
    );
  };

  const PlayArea: React.FC = () => {
    return <div> Play Area! </div>;
  };

  const ImHeader: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        {randomList.display.map(val => {
          return (
            <div className="column" key={val}>
              <button
                className="has-background-warning	"
                onClick={e => handleImageClick(e, val)}
                type="button"
              >
                <img src={gameState.list[val]} alt={gameState.list[val]} />
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  const HeaderTitle: React.FC = () => {
    return (
      <div className="columns">
        <article className="column has-text-centered has-text-black">
          <p>
            Welcome to the tiles game, click on the right tiles matching the
            pattern shown!
          </p>
        </article>
      </div>
    );
  };

  return (
    <div className="container notification is-warning">
      <HeaderTitle />
      <ImHeader />
      <DisplayRandom />
      <Grey />
      <PlayArea />
    </div>
  );
};

export default Tiles;
