import React, { useState, useEffect } from 'react';
import './signup-in.css';
import Button from '../../component/buttton/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { validatePassword } from '../../component/authentication/validation.js';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authSlice.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isPasswordValid = validatePassword(password, setPasswordErr);
        if (isPasswordValid) {
            dispatch(loginUser({ email, password }));
        }
    };

    // Redirect to profile after login
    useEffect(() => {
        if (user) {
            navigate('/profile'); // change this to the path of your profile page
        }
    }, [user, navigate]);

    return (
        <div className='d-flex w-100'>
            <form onSubmit={handleSubmit} className='mains mt-5'>
                <h3>Sign in</h3>
                <div className='d-flex justify-content-center gap-3'>
                    <p className='socials'><FontAwesomeIcon icon={faFacebookF} /></p>
                    <p className='socials'><FontAwesomeIcon icon={faGooglePlusG} /></p>
                    <p className='socials'><FontAwesomeIcon icon={faLinkedinIn} /></p>
                </div>
                <p>or use your account</p>
                <div className='d-flex justifly-content-center flex-column gap-2 align-items-center mb-2'>
                    <input className='input' type="email" placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input className='input' type="password" placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className='text-danger'>{passwordErr || error}</p>
                <p>Forgot your password?</p>
                <Button btnStyle='login'>
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </form>

            <div className='image justify-content-center d-flex align-items-center'>
                <div>
                    <h4>Welcome Back!</h4>
                    <p>To keep Connected with us please Login with your personal Info</p>
                    <Button btnStyle='login'>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
