import React from 'react';
import styled from 'styled-components';

export const GameText = ({ winner, isNextTurnX }) => (
  <div>
    {winner ? (
      <Text>Winner: {winner}</Text>
    ) : (
      <Text>Next turn: {isNextTurnX ? 'X' : 'O'}</Text>
    )}
  </div>
);
const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
