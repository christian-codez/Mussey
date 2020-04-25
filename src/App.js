import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import ControlArea from './components/control-area/ControlArea';
import SignInSignOut from './components/signin-signout/SigninSignout';
import { auth } from './firebase/firebase.util';
import { createUserProfile, userSignOut } from './redux/actions/userActions';
import { connect } from 'react-redux';
import MyProvider from './contexts/songContext';
import HomePage from './pages/homepage/HomePage';
import FavouritePage from './pages/favourites/FavouritesPage';
import GenresPage from './pages/genres/GenresPage';
import PlaylistPage from './pages/playlists/PlaylistPage';

const App = ({ createUserProfile, userSignOut }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        createUserProfile(userAuth, { userAuth });
      } else {
        userSignOut();
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div className='container mussey-app'>
      <MyProvider>
        <HeaderComponent />
        <div className='row'>
          <div className='col'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/genres/:id' component={GenresPage} />
              <Route exact path='/playlists/:id' component={PlaylistPage} />
              <Route exact path='/favourites' component={FavouritePage} />
              <Route exact path='/signin' component={SignInSignOut} />
            </Switch>
          </div>
        </div>
        <ControlArea />
      </MyProvider>
    </div>
  );
};

export default connect(null, { createUserProfile, userSignOut })(App);
