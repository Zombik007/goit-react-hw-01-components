import React from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';

const Profile = ({ user }) => {
  return (
    <ProfileItem
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

ProfileItem.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ),
};

export default Profile;
