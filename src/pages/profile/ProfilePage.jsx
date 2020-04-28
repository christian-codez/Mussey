import React, { useEffect, useState, useRef } from 'react';
import './profile-page.styles.css';
import { connect } from 'react-redux';
import DefaultLogo from '../../img/img_avatar.png';
import { updateUserProfile } from '../../redux/actions/userActions';
import { auth } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';

const ProfilePage = ({
  userDetails,
  updateUserProfile,
  favourites,
  playlists,
  genres,
  history,
  ...props
}) => {
  const [userInfo, setUserInfo] = useState({
    id: userDetails ? userDetails.id : '',
    firstname: userDetails ? userDetails.displayName.split(' ')[0] : '',
    lastname: userDetails ? userDetails.displayName.split(' ')[1] : '',
    email: '',
    photoURL: '',
  });
  const [imageAsFile, setImageAsFile] = useState(null);

  const userProfile = useRef(null);
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (userDetails) {
      setUserInfo({
        id: userDetails.id,
        firstname: userDetails ? userDetails.displayName.split(' ')[0] : '',
        lastname: userDetails ? userDetails.displayName.split(' ')[1] : '',
        email: userDetails.email,
        photoURL: userDetails.photoURL,
      });
    } else {
      history.push('/');
    }
  }, [userDetails]);

  const handleImageUpload = event => {
    const image = event.target.files[0];
    userProfile.current.src = URL.createObjectURL(event.target.files[0]);
    setImageAsFile(imageFile => image);
  };

  const handleInputChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleFormUpload = event => {
    event.preventDefault();
    updateUserProfile({ ...userInfo, imageAsFile: imageAsFile });
  };

  return (
    <section className='profile-page scroll mt-3'>
      <div className='container py-5 px-5'>
        <div className='row'>
          <div className='col-md-3 mt-3 user-info-col col-sm-12'>
            <img
              style={{
                borderRadius: '85px 20px ',
                width: '200px',
                border: '5px solid #f3aa3d',
                boxShadow: '1px 2px 3px 0px black',
                cursor: 'pointer',
              }}
              onClick={() => inputFileRef.current.click()}
              title='profile image'
              ref={userProfile}
              alt='user-profile'
              className='user-profile-img'
              src={userInfo.photoURL ? userInfo.photoURL : DefaultLogo}
            />

            <div className='form-group'>
              <br />
              <button
                onClick={() => inputFileRef.current.click()}
                type='button'
                className='btn btn-sm btn-primary btn-block'>
                upload image
              </button>
              <input
                style={{ display: 'none' }}
                type='file'
                ref={inputFileRef}
                className='form-control-file'
                id='exampleFormControlFile1'
                name='photoURL'
                onChange={handleImageUpload}
              />
            </div>

            <ul className='list-group'>
              <li className='list-group-item text-muted'>
                Statistics <i className='fa fa-dashboard fa-1x'></i>
              </li>
              <li className='list-group-item text-right'>
                <span className='float-left'>
                  <strong>Favourites</strong>
                </span>
                <span className='badge badge-pill badge-warning'>
                  {favourites}
                </span>
              </li>
              <li className='list-group-item text-right'>
                <span className='float-left'>
                  <strong>Playlists</strong>
                </span>
                <span className='badge badge-pill badge-primary'>
                  {playlists}
                </span>
              </li>
              <li className='list-group-item text-right'>
                <span className='float-left'>
                  <strong>Genres</strong>
                </span>
                <span className='badge badge-pill badge-danger'>{genres}</span>
              </li>
            </ul>
          </div>
          {/*  End of left col*/}
          <div className='col-md-9 mt-3 col-sm-12'>
            <div className='profile-head'>
              <h5>
                {`${userInfo.firstname} ${userInfo.lastname}`}
                <small
                  onClick={() => auth.signOut()}
                  className='signout text-danger'
                  style={{ cursor: 'pointer' }}>
                  {' '}
                  (Log out)
                </small>
              </h5>
              <h6 className='text-primary'>{userInfo.email}</h6>
            </div>
            <hr />

            <form onSubmit={handleFormUpload}>
              <div className='form-group'>
                <div className='col'>
                  <label htmlFor='firstname'>
                    <h6>First name</h6>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='firstname'
                    onChange={handleInputChange}
                    id='firstname'
                    defaultValue={userInfo.firstname}
                    placeholder='first name'
                    title='enter your first name if any.'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='col'>
                  <label htmlFor='lastname'>
                    <h6>Last name</h6>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='lastname'
                    onChange={handleInputChange}
                    id='lastname'
                    defaultValue={userInfo.lastname}
                    placeholder='last name'
                    title='enter your last name if any.'
                  />
                </div>
              </div>
              <div className='form-group'>
                <div className='col'>
                  <label htmlFor='email'>
                    <h6>Email</h6>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='email'
                    id='email'
                    defaultValue={userInfo.email}
                    placeholder='enter email'
                    title='enter your email if any.'
                    disabled
                  />
                </div>
              </div>

              <div className='form-group'>
                <div className='col-xs-12 col-md-5'>
                  <br />
                  <button
                    className='btn btn-md btn-success pull-right'
                    type='submit'>
                    <i className='glyphicon glyphicon-ok-sign'></i> Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userDetails: state.user.currentUser,
    favourites: state.songs.favourites ? state.songs.favourites.length : 0,
    playlists: state.songs.playlists ? state.songs.playlists.length : 0,
    genres: state.songs.genres ? state.songs.genres.genres.length : 0,
  };
};

export default withRouter(
  connect(mapStateToProps, { updateUserProfile })(ProfilePage)
);
