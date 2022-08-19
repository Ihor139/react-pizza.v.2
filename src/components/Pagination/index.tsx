import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import styles from './Pagination.module.scss';

import { setCurrentPage } from '../../redux/slices/paginationSlice';

export const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
      />
    </div>
  );
};
