import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import MusicPlayer from './containers/MusicPlayer';
import ControlArea from './components/control-area/ControlArea';
import Signin from './components/signin/Signin';
import { auth } from './firebase/firebase.util';
import { createUserProfile, userSignOut } from './redux/actions/userActions';
import { connect } from 'react-redux';
const App = ({ createUserProfile, userSignOut }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      if (userAuth) {
        createUserProfile(userAuth, {});
      } else {
        userSignOut();
      }

      // const userRef = await createUserProfileDocument(userAuth);
      // if (userAuth) {
      //   userRef.onSnapshot(snapshot => {
      //     setCurrentUser({ id: snapshot.id, ...snapshot.data() });
      //   });
      // }
      // setCurrentUser(null);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div className='container mussey-app'>
      <HeaderComponent />
      <div className='row'>
        <div className='col'>
          <Switch>
            <Route exact path='/' component={MusicPlayer} />
            <Route exact path='/genres/:id' component={MusicPlayer} />
            <Route exact path='/playlists/:id' component={MusicPlayer} />
            <Route exact path='/signin' component={Signin} />
          </Switch>
        </div>
      </div>
      <ControlArea />
    </div>
  );
};

export default connect(null, { createUserProfile, userSignOut })(App);
