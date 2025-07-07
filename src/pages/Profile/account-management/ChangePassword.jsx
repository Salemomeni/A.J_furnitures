import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './accountManagement.css'
const ChangePassword = () => {
 const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="password-settings-container">
      <h3>Password Settings</h3>

      <div className="form-group">
        <label>Current Password *</label>
        <div className="password-input-wrapper active">
          <input
            type={showPassword.current ? 'text' : 'password'}
            placeholder="Current Password"
          />
          <FontAwesomeIcon
            icon={showPassword.current ? faEyeSlash : faEye}
            className="toggle-icon"
            onClick={() => toggleVisibility('current')}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="password-input-wrapper">
          <input
            type={showPassword.new ? 'text' : 'password'}
            placeholder="New Password *"
          />
          <FontAwesomeIcon
            icon={showPassword.new ? faEyeSlash : faEye}
            className="toggle-icon"
            onClick={() => toggleVisibility('new')}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="password-input-wrapper">
          <input
            type={showPassword.confirm ? 'text' : 'password'}
            placeholder="Confirm Password*"
          />
          <FontAwesomeIcon
            icon={showPassword.confirm ? faEyeSlash : faEye}
            className="toggle-icon"
            onClick={() => toggleVisibility('confirm')}
          />
        </div>
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
}

export default ChangePassword