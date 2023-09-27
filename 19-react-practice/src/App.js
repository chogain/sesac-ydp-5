import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  const [fruit, setFruit] = useState('apple');
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [color, setColor] = useState('white');
  const [content, setContent] = useState('내용');

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setFruit={setFruit}
          setBackgroundColor={setBackgroundColor}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setContent={setContent} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result
          fruit={fruit}
          backgroundColor={backgroundColor}
          color={color}
          content={content}
        />
      </div>
    </>
  );
}

export default App;
