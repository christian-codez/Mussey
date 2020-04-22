import React from 'react';
import { createPortal } from 'react-dom';
import { withRouter } from 'react-router-dom';
const Modal = ({ redirectURL, title, deleteProduct, history, children }) => {
  return createPortal(
    <div
      className='modal fade'
      id='musseyModal'
      tabIndex='-1'
      role='dialog'
      data-backdrop='static'
      aria-labelledby='shoppyLabel'
      aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='shoppyLabel'>
              {title}
            </h5>
            <button
              onClick={() => history.push(redirectURL)}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#body')
  );
};

export default withRouter(Modal);
