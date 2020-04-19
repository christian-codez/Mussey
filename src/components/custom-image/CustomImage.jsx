import React, { Fragment } from 'react';
import './customimage.css';
const CustomImage = () => {
  return (
    <Fragment>
      <img
        style={{ width: '72px', height: '72px', border: '3px solid #7e7e7e' }}
        src='https://www.w3schools.com/bootstrap4/newyork.jpg'
        className='rounded-circle'
        alt='Cinque Terre'
      />
    </Fragment>
  );
};

export default CustomImage;
