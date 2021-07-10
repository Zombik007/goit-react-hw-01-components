import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem label={label} percentage={percentage} key={id} />
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
