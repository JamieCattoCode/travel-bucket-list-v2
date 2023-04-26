import React from 'react';

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div>
      {user.username}
    </div>
  );
};

export default Profile;
