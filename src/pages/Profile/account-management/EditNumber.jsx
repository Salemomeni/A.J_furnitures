import React from 'react'

const EditNumber = () => {
  return (
     <div className="phone-section-container">
      <h3>Current phone number</h3>
      <span className="status-badge">ACTIVE</span>
      <p className="info-text">
        This is the phone number currently associated to your profile.
        You can change it by clicking on the button below
      </p>

      <div className="phone-input-group">
        <select className="country-code">
          <option value="+234">+234</option>
        </select>
        <input type='tel'/>
      </div>

      <button className="edit-phone-btn">Edit Phone Number</button>
    </div>
  )
}

export default EditNumber