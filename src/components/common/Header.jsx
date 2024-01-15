import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaEye as EyeIcon, FaEyeSlash as EyeSlashIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Footer from "./Footer"

import HeaderLogo from '../assets/Logo.png';
import SearchIcon from '../assets/Vector.png';
import ShoppingIcon from '../assets/Group 1.png';
import '../style/Header.css';

const MainHeader = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleCloseModal = () => setShowLoginModal(false);
  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container'>
      <header>
        <div className='main-header'>
          <div className='content'>
            <img src={HeaderLogo} alt='Logo' className='header-logo' />
            <nav className='navbar'>
              <ul className='nav-ul'>
                <li><Link className='nav-item' to="/">Home</Link></li>
                <li><Link className='nav-item' to="/shop">Shop</Link></li>
                <li><Link className='nav-item' to="/plantcare">Plant Care</Link></li>
                <li><Link className='nav-item' to="/blog">Blogs</Link></li>
              </ul>
            </nav>
          </div>

          <div className='header'>
            <div className='header-icon'>
              <img src={SearchIcon} alt='Search' className='header-icons' />
              <img src={ShoppingIcon} alt='Shopping' className='header-icons' />
              <button className='nav-item login-button' onClick={handleLoginClick}>Login</button>
            </div>
          </div>
        </div>

        <Modal show={showLoginModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className='modal-header'>
    <Modal.Title className='Modal-title'>
      <span className='span-title'>Login</span> | Register
    </Modal.Title>
  </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-inputs-container">
                <label className="modal-label">Enter your username and password to login.</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`modal-inputs ${errors.email ? 'error-border' : ''}`}
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
                <div style={{ position: 'relative' }}>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Password"
                    className={`modal-inputs ${errors.password ? 'error-border' : ''}`}
                    style={{ paddingRight: '30px' }}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 8, message: 'Password 8tadan katta bolsin' },
                      maxLength: { value: 20, message: 'Password 20tadan kichkina bolsin' },
                    })}
                  />
                  {errors.password && <span className="error-text">{errors.password.message}</span>}
                  <span
                    onClick={togglePasswordVisibility}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {passwordShown ? <EyeSlashIcon /> : <EyeIcon />}
                  </span>
                </div>
                <span className="forgot-password-text">Forgot Password?</span>
                <button className='login-button1' type="submit">
                  Login
                </button>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <hr style={{ width: '100px', height: '1px', backgroundColor: '#000' }} />
                  <span className='login-with' style={{ margin: '0 10px' }}>
                    or login with
                  </span>
                  <hr style={{ width: '100px', height: '1px', backgroundColor: '#000' }} />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className='modal-footer_btn'>
              <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} />
              Login with Google
            </button>
            <button className='modal-footer_btn1'>
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px' }} />
              Login with Facebook
            </button>
          </Modal.Footer>
        </Modal>
      </header>
        
    </div>
    
  );
};

export default MainHeader;