import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CartEmpty.module.scss'

import EmptyCartImg from '../../assets/img/empty-cart.png';

export const CartEmpty = () => {
  return (
    <div className={`${styles.indent} cart cart--empty`}>
      <h2>
        Корзина пустая <b>😕</b>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyCartImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
