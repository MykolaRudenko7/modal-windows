import React from 'react';
//
import styles from './Modal.module.scss';
//
//
//
//
//
//
//
// пропси - чи видно компоненту, ф-ція зміни
export const Modal = ({ active, setActive, children }) => {
  if (!active) {
    return null;
  }

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => setActive(false)}
    >
      {/* при клікові на контент не закривається (зупинка 'всплитія') */}
      <div
        className={active ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
