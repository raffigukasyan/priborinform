import { useState } from 'react';
import styles from './Pagination.module.scss';

export default function Pagination({ pages, page, setPage }) {
  return (
    <div className={styles.paginationWrapper}>
      {pages.map((item) => (
        <div onClick={() => setPage(item)} className={page === item ? styles.active : ''}>
          {item}
        </div>
      ))}
    </div>
  );
}
