import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import ChangeColor from './ex/ChangeColor';
import ChangeText from './ex/ChangeText';

function App() {
  return (
    <div className='App'>
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <Handler_ex />
      <hr />

      <ChangeColor />
      <hr />

      <ChangeText />
    </div>
  );
}

export default App;
