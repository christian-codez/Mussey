import React, { useEffect } from 'react';
import './header.styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenresAsync } from '../../redux/actions/songActions';
import { selectMusicGenres } from '../../redux/reselect/songSelector';
const HeaderComponent = ({ musicgenres, fetchGenresAsync }) => {
  useEffect(() => {
    (async () => {
      await fetchGenresAsync();
    })();
    return () => {};
  }, []);

  console.log('Genres', musicgenres);

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark mussey-nav-header bg-dark'>
        <Link className='navbar-brand' to='/'>
          MUSSEY PLAYER
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
                      to={`/genres/${genre.shortcut}`}
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

            <li className='nav-item'>
              <Link to='' className='nav-link'>
                Sign Out
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-link disabled'>
                Sign In
              </Link>
            </li>
            <img
              src='https://www.w3schools.com/bootstrap4/newyork.jpg'
              className='rounded-circle'
              alt='Cinque Terre'
              style={{ width: '40px', height: '40px' }}
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    musicgenres: selectMusicGenres(state),
  };
};

export default connect(mapStateToProps, { fetchGenresAsync })(HeaderComponent);
