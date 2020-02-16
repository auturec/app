import React, { useReducer, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

import DataLoader from 'components/dataLoader';
import { getRandomElement, getNRandomElements } from 'utils/randomUtils';
import { occupationData, OccupationDataset } from './data';

import './Occupations.scss';

interface OccupationsProps {
  handleBackToMenu: () => void;
}

// enum OccupationGameType {
//   EXPRESSIVE,
//   RECEPTIVE
// }

interface OccupationsState {
  isLoading: boolean;
  occupations: OccupationDataset[];
  answer: OccupationDataset | null;
  gameType: string;
  isCompleted: boolean;
  isCorrect: boolean;
}

const Occupations: React.FC<OccupationsProps> = ({ handleBackToMenu }) => {
  const { addToast } = useToasts();
  const [state, setState] = useReducer(
    (a: OccupationsState, s: any) => ({ ...a, ...s }),
    {
      isLoading: true,
      occupations: [],
      answer: null,
      gameType: 'EXPRESSIVE',
      isCompleted: false
    }
  );

  const handleNewGame = (): void => {
    setState({
      isLoading: true,
      isCompleted: false
    });
    const previousAnswer = state.answer;
    const finalOccupations = getNRandomElements(occupationData, 4);
    let finalAnswer = getRandomElement(finalOccupations);
    while (previousAnswer && finalAnswer.name === previousAnswer.name) {
      finalAnswer = getRandomElement(finalOccupations);
    }
    setState({
      occupations: finalOccupations,
      answer: finalAnswer,
      gameType: Math.random() < 0.5 ? 'RECEPTIVE' : 'EXPRESSIVE',
      isLoading: false
    });
  };

  useEffect((): void => {
    handleNewGame();
  }, []);

  const handleSelect = (option: string): void => {
    const isCorrect = option === state.answer.name;
    if (isCorrect) {
      addToast(`Great job!`, {
        appearance: 'success',
        autoDismiss: true
      });
      setState({
        isCompleted: true
      });
    } else {
      addToast(`Oh dear, do try again!`, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  if (state.isLoading) {
    return (
      <div className="occupations__loading">
        <DataLoader />
      </div>
    );
  }

  if (state.gameType === 'EXPRESSIVE') {
    return (
      <div className="columns is-marginless is-multiline occupations">
        <div className="column is-full occupations__expressive--title">
          <h1 className="title">Who is this?</h1>
        </div>
        <div className="column is-full">
          <state.answer.svg width={200} height={200} />
        </div>
        <div className="column is-full is-half-tablet occupations__expressive--answers">
          <p className="is-size-5 occupations__expressive--description">
            {state.isCompleted
              ? 'Great job! What next?'
              : 'Say out the occupation before selecting the option!'}
          </p>
          {!state.isCompleted &&
            state.occupations.map((o: OccupationDataset) => (
              <button
                className="button is-medium is-fullwidth is-info is-light"
                type="button"
                onClick={() => handleSelect(o.name)}
              >
                {o.name}
              </button>
            ))}
          {state.isCompleted && (
            <>
              <button
                className="button is-medium is-fullwidth is-success"
                type="button"
                onClick={handleNewGame}
              >
                Awesome! Another question!
              </button>
              <button
                className="button is-medium is-fullwidth"
                type="button"
                onClick={handleBackToMenu}
              >
                Back to Main Menu
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="columns is-marginless is-multiline occupations">
      <div className="column is-full occupations__receptive--title">
        <h1 className="title is-size-3">Choose the</h1>
        <h1 className="occupations__receptive--job-name has-text-info">
          {state.answer.name}
        </h1>
      </div>
      <div className="column is-full is-half-tablet occupations__receptive--options">
        <p className="is-size-5 occupations__receptive--description">
          {state.isCompleted
            ? 'Great job! What next?'
            : 'Tap the photo that best shows the above occupation!'}
        </p>
        {state.isCompleted && (
          <>
            <button
              className="button is-medium is-fullwidth is-success"
              type="button"
              onClick={handleNewGame}
            >
              Awesome! Another question!
            </button>
            <button
              className="button is-medium is-fullwidth"
              type="button"
              onClick={handleBackToMenu}
            >
              Back to Main Menu
            </button>
          </>
        )}
      </div>
      {!state.isCompleted && (
        <div className="column is-full is-one-third-desktop occupations__receptive--answers">
          {state.occupations.map((o: OccupationDataset) => (
            <button
              type="button"
              className="button occupations__receptive--button"
              onClick={() => handleSelect(o.name)}
            >
              <o.svg height="auto" width="auto" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Occupations;
