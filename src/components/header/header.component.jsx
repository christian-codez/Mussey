import React, { useEffect } from 'react';
import './header.styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchGenresAsync,
  fetchPlayAsync,
  fetchFavourites,
} from '../../redux/actions/songActions';
import {
  selectMusicGenres,
  selectMusicPlaylists,
  selectFavourites,
} from '../../redux/reselect/songSelector';
import Logo from '../../img/mussey-logo.png';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { auth } from '../../firebase/firebase.util';

const HeaderComponent = ({
  musicgenres,
  playlists,
  fetchGenresAsync,
  fetchPlayAsync,
  fetchFavourites,
  favouriteSongs,
  currentUser,
}) => {
  useEffect(() => {
    (async () => {
      await fetchGenresAsync();
      await fetchPlayAsync();
      if (currentUser) await fetchFavourites(currentUser.id);
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      if (currentUser) await fetchFavourites(currentUser.id);
    })();
  }, [currentUser]);

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark mussey-nav-header bg-dark'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} style={{ width: '157px' }} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            {musicgenres ? (
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to=''
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Genres
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  {musicgenres.map(({ id, ...genre }) => (
                    <Link
                      to={`/genres/${id}`}
                      key={id}
                      className='dropdown-item'>
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              ''
            )}
            {playlists ? (
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to=''
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Playlists
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  {playlists.map(({ id, ...playlist }) => (
                    <Link
                      to={`/playlists/${id}`}
                      key={id}
                      className='dropdown-item'>
                      {playlist.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              ''
            )}
            )
            {currentUser ? (
              <li className='nav-item'>
                <Link
                  style={{ color: '#ff9c00' }}
                  to='/favourites'
                  className='nav-link'>
                  <span className='badge badge-warning active-icon'>
                    {favouriteSongs ? favouriteSongs.length : 0}
                  </span>{' '}
                  Favourites
                </Link>
              </li>
            ) : (
              ''
            )}
            {currentUser ? (
              <li className='nav-item'>
                <Link to='' onClick={() => auth.signOut()} className='nav-link'>
                  Sign Out
                </Link>{' '}
              </li>
            ) : (
              <li className='nav-item'>
                <Link to='/signin' className='nav-link'>
                  Sign In
                </Link>
              </li>
            )}
            >
            {currentUser ? (
              <img
                src={currentUser.photoURL}
                className='rounded-circle'
                alt='Cinque Terre'
                style={{ width: '40px', height: '40px' }}
              />
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    musicgenres: selectMusicGenres(state),
    playlists: selectMusicPlaylists(state),
    currentUser: selectCurrentUser(state),
    favouriteSongs: selectFavourites(state),
  };
};

export default connect(mapStateToProps, {
  fetchGenresAsync,
  fetchFavourites,
  fetchPlayAsync,
})(HeaderComponent);
