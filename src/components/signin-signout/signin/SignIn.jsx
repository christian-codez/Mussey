import React, { useState } from 'react';
import { signInWithGoogle } from '../../../firebase/firebase.util';
import Logo from '../../../img/logo.png';
import './signin.css';
import { faUser, faKey, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignIn = () => {
  const [userAuth, setUserAuth] = useState({ password: '', email: '' });

  const signInWithGoogleAcoount = () => {
    signInWithGoogle();
  };

  const handleInputChange = event => {
    setUserAuth({
      ...userAuth,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(userAuth);
  };
  return (
    <div className='container h-100'>
      <div className='d-flex justify-content-center h-100'>
        <div className='user_card'>
          <div className='d-flex justify-content-center'>
            <div className='brand_logo_container'>
              <img src={Logo} className='brand_logo' alt='Logo' />
            </div>
          </div>
          <div className='d-flex justify-content-center form_container'>
            <form onSubmit={handleFormSubmit}>
              <div className='input-group mb-3'>
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </div>
                <input
                  type='text'
                  name='email'
                  onChange={handleInputChange}
                  className='form-control input_user'
                  value={userAuth.email}
                  placeholder='john@mussey.com'
                />
              </div>
              <div className='input-group mb-2'>
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input
                  type='password'
                  name='password'
                  onChange={handleInputChange}
                  className='form-control input_pass'
                  value={userAuth.password}
                  placeholder='password'
                />
              </div>
              <div className='form-group'>
                <div className='custom-control custom-checkbox'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customControlInline'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customControlInline'>
                    Remember me
                  </label>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-3 login_container'>
                <button type='submit' name='button' className='btn  login_btn'>
                  <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
                </button>
              </div>{' '}
              <div className='d-flex justify-content-center mt-3 login_container'>
                <button
                  onClick={signInWithGoogleAcoount}
                  type='button'
                  name='button'
                  className='btn login_btn'>
                  SIGN IN WITH GOOGLE
                </button>
              </div>
            </form>
          </div>

          <div className='mt-4 mb-2'>
            <div className='d-flex justify-content-center links'>
              <a href='#'>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
