import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';

export const Game = ({ value, onClick }) => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xTurn, setNextTurn] = React.useState(true);
  const winner = calculateWinner();

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
  }

  return (
    <div>
      <Board squares={board} onClick={() => {}} />
    </div>
  );
};
