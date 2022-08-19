import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId, categorySelect } from '../../redux/slices/filterSlice';

const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId: number = useSelector(categorySelect);

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
