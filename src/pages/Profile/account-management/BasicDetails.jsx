import React from 'react';
import '../account-management/accountManagement.css';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const BasicDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
const handleNavigate = ()=>{
  navigate( '/profile/accManagement/EditProfile')
}
  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-details-container">
      <div className="profile-details-header">
        <h2>Profile Details</h2>
        <button onClick={handleNavigate} className="edit-btn"> Edit Profile</button>
      </div>

      <div className="profile-field">
        <label>First Name</label>
        <p>{user.firstName || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Middle Name</label>
        <p>{user.middleName || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Last Name</label>
        <p>{user.lastName || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Email</label>
        <p>{user.email || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Gender</label>
        <p>{user.gender || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Birth Date</label>
        <p>{user.birthDate || 'N/A'}</p>
      </div>

      <div className="profile-field">
        <label>Phone Number</label>
        <p>{user.phone || 'N/A'}</p>
      </div>
    </div>
  );
};

export default BasicDetails;
