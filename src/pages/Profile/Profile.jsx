import React from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faEnvelope,
  faStar,
  faTicketAlt,
  faStore,
  faClock,
  faUserCog,
  faMapLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AccountOverview from './AccountOverview';
import { logout } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <h3>My Account</h3>
        <ul>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faBox} /> Orders </Link> </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faEnvelope} /> Inbox </Link>  </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faStar} /> Pending Reviews </Link> </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faTicketAlt} /> Voucher</Link> </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faStore} /> Followed Sellers </Link> </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faClock} /> Recently Viewed</Link> </li>
          <li> <Link className='a' to='/profile/accManagement' as={Link}><FontAwesomeIcon icon={faUserCog} /> Account Management</Link> </li>
          <li> <Link className='a' to='' as={Link}><FontAwesomeIcon icon={faMapLocationDot} /> Address Book </Link>  </li>
          <li> <Link className='a text-danger' to='/profile/logout' as={Link}> Logout</Link></li>
        </ul>
      </aside>
      <main className="profile-content">
        {location.pathname === '/profile' ? <AccountOverview /> : <Outlet />}
      </main>
    </div>
  );
};

export default Profile;
