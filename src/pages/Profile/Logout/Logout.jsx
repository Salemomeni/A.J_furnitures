import React from 'react'
import { logout } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const HandleLogout = () =>{
    dispatch(logout());
    navigate('/collections')
  }
  const HandleCancel = ()=>{
    navigate('/profile')
  }
  return (
    <div className='logoutContainer'>
        <div>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to Log out</p>
            <div className='modal-actions'>
                <button onClick={HandleCancel} className='cancel-btn'>Cancel</button>
                <button onClick={HandleLogout} className='logout-confirm-btn'>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Logout