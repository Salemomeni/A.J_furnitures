import React from 'react'
import '../account-management/accountManagement.css'
const BasicDetails = () => {
  return (
    <div className="profile-details-container">
      <div className="profile-details-header">
        <h2>Profile Details</h2>
        <button className="edit-btn">Edit Profile</button>
      </div>

      <div className="profile-field">
        <label>First Name</label>
        <p>Salem</p>
      </div>

      <div className="profile-field">
        <label>Middle Name</label>
        <p></p>
      </div>

      <div className="profile-field">
        <label>Last Name</label>
        <p>Omeni</p>
      </div>

      <div className="profile-field">
        <label>Email</label>
        <p>omenisalem4@gmail.com</p>
      </div>

      <div className="profile-field">
        <label>Gender</label>
        <p>M</p>
      </div>

      <div className="profile-field">
        <label>Birth date</label>
        <p>2002-10-26</p>
      </div>

      <div className="profile-field">
        <label>Phone Number</label>
        <p>+234 8148074068</p>
      </div>
    </div>

  )
}

export default BasicDetails