import React, { useState } from 'react';
//
import { ModalAnimated } from '../ModalAnimated/index';
//
import styles from './ModalContent.module.scss';
//
//
//
//
//
//
//
export const ModalContent = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setOpened(true)}>
        Open Modal Window
      </button>
        {/* якщо опен буде тру -вікно відкриється */}
      <ModalAnimated opened={opened} onClose={() => setOpened(false)}>
        {/* (children) тут контент модювікна*/}
        <h2 className={styles.modalContent}>Simple Animation Content</h2> //контент модального вікна
      </ModalAnimated>
    </>
  );
};
