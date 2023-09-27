import { Component } from 'react';

export default class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this : ', this);
    // #1 클래스 컴포넌트에서 이벤트 사용 - bind 사용
    // - js에서는 this 호출하는 방법에 의해 결정
    // => 함수가 호출될 때마다 this가 다를 수 있음
    // bind() 메서드는 호출되는 방법과 무관하게 this를 묶음
    this.printConsole = this.printConsole.bind(this);
  }

  // 1) bind 사용 경우
  printConsole() {
    console.log('this : ', this);
  }

  // #2 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
  // 화살표 함수는 this가 아예 없음 선언될 시점에서 상위 스코프가 this로 바인딩
  // printConsole = () => {
  //   console.log('this : ', this);
  // };

  printConsole2 = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole (인자 x)</button>
        <button onClick={() => this.printConsole2('msg')}>
          printConsole (인자 o)
        </button>
        <button onClick={this.printConsole2.bind(null, 'msg2')}>
          printConsole (인자 o, bind)
        </button>
      </div>
    );
  }
}
