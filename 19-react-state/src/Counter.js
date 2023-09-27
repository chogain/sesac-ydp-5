import { Component } from 'react';

export default class Counter extends Component {
  // // 기존 버전
  // constructor(props) {
  //   // js에서 'super'는 부모 클래스 생성자의 참조
  //   // super() 호출 시 현재 클래스가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 출
  //   super(props);

  //   this.state = {
  //     number: 0,
  //   };
  // }

  // 현재 버전
  state = {
    number: 0,
  };

  render() {
    let { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        {/* <h1>{this.state.number}</h1> */}
        <button
          onClick={() => {
            // state는 직접적인 변경 불가, 반드시 setState를 사용해 값 변경
            this.setState({ number: (number += 1) });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            alert(number);
          }}
        >
          Alert Number
        </button>
      </div>
    );
  }
}
