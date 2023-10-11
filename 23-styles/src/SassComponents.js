import React from 'react';
import './styles/SassComponent.scss';

export default function SassComponents() {
  return (
    <>
      <div className='container'>
        <div className='box red'></div>
        <div className='box orange'></div>
        <div className='box yellow'></div>
        <div className='box green'></div>
        <div className='box blue'></div>
        <div className='box navy'></div>
        <div className='box purple'></div>
      </div>
      <button className='btn'>BUTTON</button>
      <button className='btn-primary'>BUTTON</button>
    </>
  );
}
