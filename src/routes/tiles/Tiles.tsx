import React, { useState } from 'react';
import TilesImage from './TilesImageMap';

import './Tiles.scss';

// requires console buttons to check answer / refresh game

const Tiles: React.FC = () => {
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * from https://stackoverflow.com/users/310500/laurens-holst
   * This works, but apparent it binds on the second call for both ans and random list
   */
  const shuffleArray: (original: any[]) => any[] = original => {
    const copy = original.slice();
    for (let i = copy.length - 1; i > 1; i = -1) {
      const j = Math.floor(Math.random() * i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const getFourRandomFromArray = (array: Array<string>) => {
    const indexList = array.map((val, index) => index);
    const randomArray = shuffleArray(indexList);
    return randomArray.slice(0, 4);
  };

  const [gameState] = useState({
    list: TilesImage.TilesImageMap(),
    ans: getFourRandomFromArray(TilesImage.TilesImageMap())
  });

  const [randomList] = useState({
    display: shuffleArray(gameState.ans)
  });

  const [ansState, setAnswer] = useState({
    list: [-1, -1, -1, -1],
    pos: 0
  });

  /* global HTMLButtonElement, MouseEvent */
  const handleImageClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: number
  ) => {
    e.preventDefault();
    if (ansState.pos < ansState.list.length) {
      let curr = ansState.pos;
      const currList = ansState.list.slice();
      currList[curr] = data;
      curr += 1;
      setAnswer({
        ...ansState,
        list: currList,
        pos: curr
      });
    }
    // console.log(data);
    // console.log(ansState);
  };

  const DisplayRandom: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        {gameState.ans.map((val, ind) => {
          const src = gameState.list[val];
          return (
            <div className="column" key={val}>
              <button className="has-background-danger" disabled type="button">
                <img src={src} alt={ind.toString()} />
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  const Grey: React.FC = () => {
    return (
      <div className="column">
        <img src={TilesImage.GREY_TILE} alt="grey-tile" />
      </div>
    );
  };

  // Add onclick to remove just the last tile
  const PlayArea: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        <Grey />
        <Grey />
        <Grey />
        <Grey />
      </div>
    );
  };

  const ImHeader: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        {randomList.display.map(val => {
          return (
            <div className="column" key={val}>
              <button
                className="has-background-primary	"
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
            Welcome to the tiles game, click on the right tiles matching the red
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
      <PlayArea />
    </div>
  );
};

export default Tiles;
