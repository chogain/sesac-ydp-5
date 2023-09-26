import './App.css';

function App() {
  const name = '나비';
  const animal = '고양이';

  const a = 7;
  const b = 5;

  const title = 'Hello World';

  return (
    <div className='App'>
      <div>
        이것을 div입니다.
        <h3>이것은 div 안에 있는 h3입니다.</h3>
      </div>
      <h2>
        제 반려 동물의 이름은 <span>{name}</span>입니다.
      </h2>
      <h2>
        <span>{name}</span>은 <span>{animal}</span>입니다.
      </h2>

      <div>
        {3 + 5 === 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
      </div>
      <div>{a > b && <span>a가 b보다 큽니다</span>}</div>

      <div className='test'>
        <h1>{title}</h1>
        <form>
          <label htmlFor='id'>아이디 :</label>
          <input id='id' className='inputId' />
          <br />
          <label htmlFor='pw'>비밀번호 :</label>
          <input id='pw' className='inputPw' />
        </form>
      </div>

      <div className='all'>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='navy'></div>
        <div className='purple'></div>
      </div>
    </div>
  );
}

export default App;
