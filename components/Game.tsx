import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';

export const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xTurn, setIsNextTurnX] = React.useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(board) {
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

    for (const line of lines) {
      const currentMarker = board[line[0]];
      if (
        board[line[0]] === board[line[1]] &&
        board[line[1]] === board[line[2]] &&
        currentMarker !== null
      ) {
        return currentMarker;
      }
    }
  }

  function setSquareValue(index: number) {
    const newBoard = [...board];
    newBoard[index] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsNextTurnX(!xTurn);
  }

  return (
    <div>
      <Board squares={board} onClick={setSquareValue} />
    </div>
  );
};
