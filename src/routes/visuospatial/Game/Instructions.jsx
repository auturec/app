import React from 'react';

// Instructions for the game
// type InstructionsProps = {
//   instructions: string;
// };

// instructions = ascending or descending
const Instructions = () => {
  const instructions = ['ascending', 'descending'];
  const randomInstructions =
    instructions[Math.floor(Math.random() * instructions.length)];

  return (
    <div>
      <h1> Visuospatial - 2D Sorting </h1>
      <p>
        Please sort in {randomInstructions}
        order
      </p>
    </div>
  );
};

export default Instructions;
