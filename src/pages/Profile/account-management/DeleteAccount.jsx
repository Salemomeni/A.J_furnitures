import React from 'react';
import './accountManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const DeleteAccount = () => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      // Add your delete logic here (API call)
      alert("Account deleted (placeholder action).");
    }
  };

  return (
    <div className="delete-account-container">
      <h3>Delete Account</h3>
      <div className="warning-box">
        <FontAwesomeIcon icon={faTriangleExclamation} className="warn-icon" />
        <p>
          Deleting your account is permanent and will remove all your data from our platform. This action cannot be undone.
        </p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>Delete My Account</button>
    </div>
  );
};

export default DeleteAccount;
