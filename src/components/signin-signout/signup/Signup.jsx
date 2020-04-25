import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <form action='/examples/actions/confirmation.php' className='signup'>
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
              name='first_name'
              placeholder='First Name'
              required='required'
            />
          </div>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              name='last_name'
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
          placeholder='Email'
          required='required'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          name='password'
          placeholder='Password'
          required='required'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          name='confirm_password'
          placeholder='Confirm Password'
          required='required'
        />
      </div>

      <div className='form-group'>
        <button type='submit' className='btn  btn-dark-blue btn-lg btn-block'>
          Register Now
        </button>
      </div>
    </form>
  );
};

export default Signup;
