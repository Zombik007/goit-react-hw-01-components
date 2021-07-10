import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendsList/FriendsList.module.css';
import defaultImage from '../default.png';

const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
