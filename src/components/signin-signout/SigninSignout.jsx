import React, { Fragment, useEffect, useState } from 'react';
import Modal from '../custom-modal/Modal';
import $ from 'jquery';
import { auth } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';
import SignIn from './signin/SignIn';
import Signup from './signup/Signup';
import { connect } from 'react-redux';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignInSignOut = ({ history, signInError, signUpError, ...props }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        $('#musseyModal').modal('hide');
        history.push('/');
      } else {
        $('#musseyModal').modal('show');
      }
    });
  }, []);

  return (
    <Fragment>
      <Modal title={`SIGN IN`} redirectURL={`/`}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6 col-xs-12 mb-2'>
              {' '}
              <SignIn />
            </div>
            <div className='col-md-6 col-xs-12 mb-2'>
              <Signup />
            </div>
          </div>
        </div>

        {signInError || signUpError ? (
          <div>
            <hr />
            <div className='alert alert-danger' role='alert'>
              <FontAwesomeIcon icon={faInfo} /> {signUpError} {signInError}
            </div>
          </div>
        ) : (
          ''
        )}
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    signInError: state.user.signInError,
    signUpError: state.user.signUpError,
  };
};

export default withRouter(connect(mapStateToProps)(SignInSignOut));
