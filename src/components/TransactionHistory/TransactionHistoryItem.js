import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <tr key={id} className={styles.list}>
      <td className={styles.list__item}>{type}</td>
      <td className={styles.list__item}>{amount}</td>
      <td className={styles.list__item}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
