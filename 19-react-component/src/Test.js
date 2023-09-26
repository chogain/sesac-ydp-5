import React, { Component } from 'react';

export default class Test extends Component {
  name = '조가인';
  myStyle = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: 12,
  };

  render() {
    return <div style={this.myStyle}>{this.name}</div>;
  }
}
