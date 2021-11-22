import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

export const Board = ({ squares, onClick }) => (
  <Grid>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  height: 400px;
  width: 400px;
`;
