import './App.css';
import Counter from './Counter';
import SayFunc from './SayFunc';
import CounterFunc from './CounterFunc';
import CounterPrac from './CounterPrac';
import CounterPrac2 from './CounterPrac2';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />

      <SayFunc />
      <hr />

      <CounterFunc value={'Plus 1'} />
      <hr />

      <h2>실습1</h2>
      <CounterPrac />
      <hr />

      <h2>실습2</h2>
      <CounterPrac2 />
      <hr />
    </div>
  );
}

export default App;
