import React from 'react';
import styles from './styles/Practice1.module.css';

export default function Practice1() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div></div>
        <div className={styles.eyes}>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img className={styles.img} src='images/grass.png' alt='잔디 이미지' />
      </section>
    </div>
  );
}
