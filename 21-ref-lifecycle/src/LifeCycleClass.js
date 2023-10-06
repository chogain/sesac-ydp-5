import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      visible: true,
    };
  }

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        <button type='button' onClick={this.changeNumberState}>
          Plus
        </button>
        <button type='button' onClick={this.changeVisibleState}>
          On/Off
        </button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </div>
    );
  }
}
