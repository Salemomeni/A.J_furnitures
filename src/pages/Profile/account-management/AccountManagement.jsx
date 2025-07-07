import { faCircleUser, faLock } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasicDetails from './BasicDetails';
import { Link, Outlet } from 'react-router-dom';
const AccountManagement = () => {
    const [profileDetails, setprofileDetails] = useState(false)
    const [security, setsecurityDetails] = useState(false)

    const profile = () => setprofileDetails(!profileDetails);
    const togglesecurity = () => setsecurityDetails(!security)
    return (
        <div className='basic-detail'>
            <div className='section1'>
                <h3>Hello Salem Omeni</h3>
                <li onClick={profile}> <span><FontAwesomeIcon icon={faCircleUser} /></span> Profile Details</li>
                <div className='sub' style={{ display: profileDetails ? 'block' : 'none' }} >
                    <li>  <Link className='a' to = '/profile/accManagement/basicDetails' as = {Link}>Basic Details</Link></li>
                    <li>   <Link className='a' to = '/profile/accManagement/editNumber' as = {Link}>Edit Phone Number</Link></li>
                </div>
                <li onClick={togglesecurity}> <span><FontAwesomeIcon icon={faLock} /></span> Security Settings</li>
                <div className='sub' style={{ display: security ? 'block' : 'none' }} >
                    <li>  <Link className='a' to = '/profile/accManagement/changePassword' as = {Link}>Change Password</Link></li>
                    <li>  <Link className='a' to = '/profile/accManagement/securityQuestion' as = {Link}>Security Question</Link></li>
                    <li>  <Link className='a' to = '/profile/accManagement/deleteAccount' as = {Link}>Delete Account</Link></li>
                </div>
            </div>
            <div className='section2'>
                <Outlet/>
            </div>
        </div>
    )
}

export default AccountManagement