import React from 'react';
import TilesImage from './TilesImageMap';

import './Tiles.scss';

const Grey: React.FC = TilesImage.UnchoosenTile;
const list = TilesImage.TilesImageMap();

const Tiles: React.FC = () => {
  return (
    <div className="container notification is-warning">
      <div className="tile is-ancestor is-mobile">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Welcome to the tiles game</p>
                <p className="subtitle">
                  Click on the right tiles matching the pattern shown!
                </p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
                <Grey />
                {list.map(val => {
                  return (
                    <figure className="image is-128x128">
                      <img src={val} alt={val} />
                    </figure>
                  );
                })}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
