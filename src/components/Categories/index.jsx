import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Categories.module.scss';

import { setCategoryId } from '../../redux/slices/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filterReducer.categoryId);

  return (
    <div className="categories">
      <ul>
        {categories.map((nameCategory, ind) => (
          <li
            key={ind}
            onClick={() => dispatch(setCategoryId(ind))}
            className={categoryId === ind ? 'active' : ''}>
            {nameCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};
