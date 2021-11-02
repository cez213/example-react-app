import React from 'react';
import styled from 'styled-components';

export const Winner = ({ winner }) => (
  <div>{winner ? <Text>Winner: {winner}</Text> : null}</div>
);

const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
