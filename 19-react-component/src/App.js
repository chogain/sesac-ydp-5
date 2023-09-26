import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Test from './Test';
import Test2 from './Test2';

function App() {
  return (
    <div className='App'>
      <FunctionComponent name='새싹' />
      <FunctionComponent />

      <hr />
      <ClassComponent name='새싹' />
      <ClassComponent />

      <hr />
      <Button link='https://www.google.com'>Google</Button>

      <Test />
      <Test2 />
    </div>
  );
}

export default App;
