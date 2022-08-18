import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const PizzaDetail = () => {
  const { id } = useParams();

  const [pizza, setPizza] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://62f200e025d9e8a2e7d48788.mockapi.io/items/' + id);
      setPizza(data);
    })();
  }, []);

  return (
    <div className="container pizza-detail">
      <div className="pizza-block">
        <img className="pizza-block__image" src={pizza.imageUrl} alt={pizza.name} />
        <h4 className="pizza-block__title">{pizza.name}</h4>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {pizza.price} $</div>
        </div>
      </div>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
