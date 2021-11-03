import React from 'react';
import styled from 'styled-components';

export const Square = ({ value, onClick }) => (
  <Button onClick={onClick}>{value}</Button>
);

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 40px;
  font-weight: 800;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
