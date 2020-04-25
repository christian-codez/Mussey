import React, { useState, useEffect } from 'react';

import './signup.css';
import { signUp } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

const Signup = ({ signUp }) => {
  const [userAuth, setUserAuth] = useState({
    firstname: '',
    lastname: '',
    displayName: '',
    email: '',
    password: '',
    confirm_password: '',
    photoURL: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    comparePasswordMatch();
    return () => {};
  }, [userAuth.password, userAuth.confirm_password]);
  useEffect(() => {
    setUserAuth({
      ...userAuth,
      displayName: `${userAuth.firstname} ${userAuth.lastname}`,
    });
    return () => {};
  }, [userAuth.firstname, userAuth.lastname]);

  const handleInputChange = async event => {
    const { name, value } = event.target;
    await setUserAuth({
      ...userAuth,
      [name]: value.trim(),
    });
  };

  const comparePasswordMatch = () => {
    if (userAuth.confirm_password !== userAuth.password)
      return setError('Passwords do not match');
    setError(null);
  };

  const handleFormSubmission = event => {
    event.preventDefault();
    signUp(userAuth);
  };

  return (
    <form className='signup' onSubmit={handleFormSubmission}>
      <h2>Register</h2>
      <p className='hint-text'>
        Create your account. It's free and only takes a minute.
      </p>

      <div className='form-group'>
        <div className='row'>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              name='firstname'
              onChange={handleInputChange}
              placeholder='First Name'
              required='required'
            />
          </div>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              name='lastname'
              onChange={handleInputChange}
              placeholder='Last Name'
              required='required'
            />
          </div>
        </div>
      </div>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          name='email'
          onChange={handleInputChange}
          placeholder='Email'
          required='required'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          name='password'
          onChange={handleInputChange}
          placeholder='Password'
          required='required'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          name='confirm_password'
          onChange={handleInputChange}
          placeholder='Confirm Password'
          required='required'
        />
        <p className='text-danger'>{error}</p>
      </div>

      <div className='form-group'>
        <button
          type='submit'
          className={`btn ${
            error ? 'disabled' : ''
          }  btn-dark-blue btn-lg btn-block`}>
          Register Now
        </button>
      </div>
    </form>
  );
};

export default connect(null, { signUp })(Signup);
