import React, { Fragment, useEffect } from 'react';
import Modal from '../custom-modal/Modal';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { signInWithGoogle } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { withRouter } from 'react-router-dom';

const SignIn = ({ currentUser, history }) => {
  useEffect(() => {
    if (currentUser !== null) {
      $('#musseyModal').modal('hide');
      history.push('/');
    }
    $('#musseyModal').modal('show');
  }, [currentUser]);

  const signInWithGoogleAcoount = () => {
    signInWithGoogle();
  };

  return (
    <Fragment>
      <Modal title={`SIGN IN`} redirectURL={`/`}>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />

            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>{' '}
          <button
            onClick={signInWithGoogleAcoount}
            type='button'
            className='btn btn-danger'>
            Sign in with google
          </button>
        </form>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default withRouter(connect(mapStateToProps)(SignIn));
