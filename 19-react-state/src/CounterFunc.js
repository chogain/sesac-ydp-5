import { useState } from 'react';

const CounterFunc = (props) => {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => setNumber(number + 1);
  const { value } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>{value}</button>
    </div>
  );
};

export default CounterFunc;
