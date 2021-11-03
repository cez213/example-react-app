import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

// TODO: refactor to make this code cleaner.
export const Board = ({ squares, onClick }) => (
  <Grid>
    <Square value={0} onClick={() => onClick(0)} />
    <Square value={1} onClick={() => onClick(1)} />
    <Square value={2} onClick={() => onClick(2)} />
    <Square value={3} onClick={() => onClick(3)} />
    <Square value={4} onClick={() => onClick(4)} />
    <Square value={5} onClick={() => onClick(5)} />
    <Square value={6} onClick={() => onClick(6)} />
    <Square value={7} onClick={() => onClick(7)} />
    <Square value={8} onClick={() => onClick(8)} />
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  height: 400px;
  width: 400px;
`;
