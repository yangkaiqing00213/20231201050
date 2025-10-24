import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-card">
      <div className="avatar">杨</div>
      <h2 className="profile-name">杨开情</h2>
      <p className="profile-desc">学号：20231201050</p>
      <p className="profile-desc">贵州中医药大学 | 医学信息工程专业</p>
    </div>
  );
};

export default Profile;