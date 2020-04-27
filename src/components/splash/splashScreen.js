import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { auth } from '../../firebase/firebase.util';
import './splashscreen.css';

const SplashScreen = ({ user, ...props }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      setisLoaded(true);
    });
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className='loading'>
        <div className='spinner-wrapper'>
          <span className='spinner-text'>LOADING</span>
          <span className='spinner'></span>
        </div>
      </div>
    );
  } else {
    return props.children;
  }
};

export default SplashScreen;
