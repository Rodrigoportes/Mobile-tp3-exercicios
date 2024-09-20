import React from 'react';
import styles from './Button.module.css';

function ButtonModule({ text }) {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
}

export default ButtonModule;
