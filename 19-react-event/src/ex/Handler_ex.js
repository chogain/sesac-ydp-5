import { Component } from 'react';

export default class Handler_ex extends Component {
  state = {
    string: 'Hello World!',
  };

  render() {
    const { string } = this.state;

    return (
      <div>
        <h1>{string}</h1>
        <button
          onClick={() => {
            this.setState({ string: 'Goodbye World!' });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
