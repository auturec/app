import React, { useState } from 'react';

import './Language.scss';
import Occupations from './Occupations';

// enum LanguageGames {
//   OCCUPATIONS,
//   ATTRIBUTES,
//   BODY_PARTS,
//   DESCRIPTIVE,
//   SITUATION
// }

const Language = () => {
  const [gameMode, setGameMode] = useState<string | null>(null);

  switch (gameMode) {
    case 'OCCUPATIONS':
      return <Occupations handleBackToMenu={(): void => setGameMode(null)} />;
    default:
      return (
        <div className="columns is-multiline language is-marginless">
          <div className="column is-full language__header">
            <h1 className="title language__header--title">
              Welcome to Languages!
            </h1>
            <p className="language__header--description">
              This section includes games to help your child build their
              confidence in their language abilities!
            </p>
          </div>
          <div className="column is-full language__games">
            <h2 className="subtitle language__games--title">
              Select a game to begin:
            </h2>
            <div className="language__games--buttons">
              <button
                type="button"
                className="button is-light is-medium is-fullwidth"
                onClick={(): void => setGameMode('OCCUPATIONS')}
              >
                Occupations
              </button>
            </div>
          </div>
        </div>
      );
  }
};

export default Language;
