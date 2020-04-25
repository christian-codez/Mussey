import React, { Fragment, useEffect } from 'react';
import Modal from '../custom-modal/Modal';
import $ from 'jquery';
import { auth } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';
import SignIn from './signin/SignIn';
import Signup from './signup/Signup';

const SignInSignOut = ({ history, ...props }) => {
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
          <div className='row'>
            <div className='col-md-6 col-xs-12 mb-2'>
              {' '}
              <SignIn />
            </div>
            <div className='col-md-6 col-xs-12 mb-2'>
              <Signup />
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default withRouter(SignInSignOut);
