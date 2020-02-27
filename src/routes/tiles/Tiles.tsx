import React, { useState } from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import TilesImage from './TilesImageMap';

import './Tiles.scss';

// requires console buttons to check answer / refresh game

const Tiles: React.FC = () => {
  const { addToast } = useToasts();
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

  const [gameState, setGameState] = useState({
    list: TilesImage.TilesImageMap(),
    ans: getFourRandomFromArray(TilesImage.TilesImageMap())
  });

  const [randomList, setDisplay] = useState({
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

  interface ImageProps {
    value: string;
  }

  const TileImage: React.FC<ImageProps> = ({ value }) => {
    return (
      <div>
        <img src={value} alt="grey-tile" />
      </div>
    );
  };

  // Add onclick to remove just the last tile
  const PlayArea: React.FC = () => {
    return (
      <div className="columns is-centered is-mobile">
        {ansState.list.map((val, index) => {
          return (
            <div
              className="column"
              key={
                val === -1
                  ? `grey${index}`
                  : gameState.list[val] + index.toString()
              }
            >
              <button className="has-background-link" disabled type="button">
                {val === -1 ? (
                  <TileImage value={TilesImage.GREY_TILE} />
                ) : (
                  <TileImage value={gameState.list[val]} />
                )}
              </button>
            </div>
          );
        })}
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

  const GameButtons: React.FC = () => {
    const handleAnswer = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      if (ansState.list.every(val => gameState.ans.includes(val))) {
        addToast(`Nice work matching the patterns!`, {
          appearance: 'success',
          autoDismiss: true
        });
      } else {
        addToast(`Please check your answer and try again!`, {
          appearance: 'error',
          autoDismiss: true
        });
      }
    };

    const handleReset = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      addToast(`Game has been reset!`, {
        appearance: 'warning',
        autoDismiss: true
      });
      // Reset game
      setGameState({
        ...gameState,
        list: TilesImage.TilesImageMap(),
        ans: getFourRandomFromArray(TilesImage.TilesImageMap())
      });
      // Reset Display
      setDisplay({
        ...randomList,
        display: shuffleArray(gameState.ans)
      });
    };

    const handleClearAll = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      setAnswer({
        ...ansState,
        list: [-1, -1, -1, -1],
        pos: 0
      });
      addToast(`Selections has been cleared`, {
        appearance: 'warning',
        autoDismiss: true
      });
    };

    return (
      <div className="buttons has-addons is-centered">
        <button
          className="button is-dark has-text-white"
          onClick={e => handleAnswer(e)}
          type="button"
        >
          Check Answer
        </button>
        <button
          className="button is-info has-text-black"
          onClick={e => handleReset(e)}
          type="button"
        >
          Reset Game
        </button>
        <button
          className="button is-warning has-text-black"
          onClick={e => handleClearAll(e)}
          type="button"
        >
          Clear All Selections
        </button>
      </div>
    );
  };

  return (
    <div className="container notification is-primary is-centered">
      <ToastProvider>
        <HeaderTitle />
        <GameButtons />
        <ImHeader />
        <DisplayRandom />
        <PlayArea />
      </ToastProvider>
    </div>
  );
};

export default Tiles;
