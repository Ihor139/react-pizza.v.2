import React from 'react';

import './Sort.module.scss';

import { setSortType } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const sortList = [
  { name: 'популярности ↓', sortProperty: 'rating' },
  { name: 'популярности ↑', sortProperty: '_rating' },
  { name: 'цене ↓', sortProperty: 'price' },
  { name: 'цене ↑', sortProperty: '_price' },
  { name: 'алфавиту ↓', sortProperty: 'title' },
  { name: 'алфавиту ↑', sortProperty: '_title' },
];

export const Sort = () => {
  const sortRef = React.useRef();
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filterReducer.sortType);

  const [isOpen, setIsOpen] = React.useState(false);

  const onClikcSort = (obj) => {
    dispatch(setSortType(obj));
    setIsOpen(false);
  };

  // outside Click
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(true)}>{sortType.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, ind) => (
              <li
                onClick={() => onClikcSort(obj)}
                key={ind}
                className={sortType.name === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
