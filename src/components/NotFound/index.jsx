import React from 'react';

import styles from './NotFound.module.scss'

export const NotFound = () => {
  return <div className={styles.notFound}>
    <h1>404</h1>
    <p>Такая страница не найдена</p>
  </div>;
};
