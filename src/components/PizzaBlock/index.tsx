import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  CartItem,
  selectCartItem,
} from "../../redux/slices/cartSlice";

const typesName: string[] = ["Тонкое", "Традиционное"];

export type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem(id));

  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddToCart = () => {
    const item: CartItem = {
      id,
      imageUrl,
      name,
      price,
      type: typesName[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt={name} />
      </Link>
      <Link to={`/pizza/${id}`}>
        <h4 className="pizza-block__title">{name}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId: number, ind: number) => (
            <li
              onClick={() => setActiveType(typeId)}
              key={ind}
              className={activeType === typeId ? "active" : ""}
            >
              {typesName[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, ind) => (
            <li
              onClick={() => setActiveSize(ind)}
              key={ind}
              className={activeSize === ind ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} $</div>
        <button
          className="button button--outline button--add"
          onClick={onClickAddToCart}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};
