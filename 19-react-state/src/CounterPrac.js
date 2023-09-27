import { Component } from 'react';

export default class CounterPrac extends Component {
  state = {
    number: 0,
  };

  render() {
    let { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          + 2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          - 1
        </button>
      </div>
    );
  }
}
