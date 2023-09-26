import React, { Component } from 'react';
import codingon from './codingon.png';

export default class Test2 extends Component {
  style = { color: 'orange', fontSize: '40px', marginTop: 20 };

  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요.</h2>
        <img src={codingon} alt='코딩온 이미지' />
      </div>
    );
  }
}
