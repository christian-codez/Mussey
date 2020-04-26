import React, { Fragment } from 'react';
import './customimage.css';
const CustomImage = props => {
  return (
    <Fragment>
      <img {...props} alt='Cinque Terre' />
    </Fragment>
  );
};

export default CustomImage;
