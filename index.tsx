import React, { Component } from 'react';
import { render } from 'react-dom';
import { Game } from './components/Game';
import { Game as UnfinishedGame } from './unfinished_components/Game';
import styled from 'styled-components';
import './style.css';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  // TODO: Add Game to show the finish product.
  render() {
    return (
      <div>
        <Wrapper>
          <Title>Tic Tac Toe</Title>
          <UnfinishedGame />
        </Wrapper>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

render(<App />, document.getElementById('root'));
