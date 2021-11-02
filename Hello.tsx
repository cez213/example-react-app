import React from 'react';
import { Counter } from './counter';

const CounterButton = ({ onClick }) => (
  <button onClick={onClick}>Click me</button>
);

export default ({ name }) => {
  const [count, setCount] = React.useState(0);

  return (
    <h1>
      <CounterButton onClick={() => setCount(count + 1)} />
      <Counter count={count} />
    </h1>
  );
};
