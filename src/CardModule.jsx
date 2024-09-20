import React from 'react';
import styles from './CardModule.module.css';
import ButtonModule from './ButtonModule'; 
import logo from './logo.jpg'; 

function CardModule() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={logo}
          alt="Card Example"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Título do Card</h2>
        <p className={styles.description}>
          Esta é uma descrição do cartão. Ele contém uma imagem em cima e o texto com botão embaixo para a versão mobile.
        </p>
        <ButtonModule text="Saiba Mais" /> 
      </div>
    </div>
  );
}

export default CardModule;

