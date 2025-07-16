import React, { useEffect, useState } from 'react';
import './accountManagement.css'; // make sure this CSS file contains your provided styles
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const EditBasicDetials = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth)
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      firstName,
      middleName,
      lastName,
      email,
      gender,
    };
    dispatch(updateUser(userDetails))
    navigate('/profile/accManagement/basicDetails');
  };
 useEffect(() => {
  if (user) {
    setFirstName(user.firstName || '');
    setMiddleName(user.middleName || '');
    setLastName(user.lastName || '');
    setEmail(user.email || '');
    setGender(user.gender || '');
  }
}, [user]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Edit Basic Details</h2>
        <button className="edit-btn">Edit</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className='gender'
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBasicDetials;
