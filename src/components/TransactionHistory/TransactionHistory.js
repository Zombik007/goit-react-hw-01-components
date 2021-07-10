import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction}>
      <thead className={styles.title}>
        <tr className={styles.title__list}>
          <th className={styles.title__item}>Type</th>
          <th className={styles.title__item}>Amount</th>
          <th className={styles.title__item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
