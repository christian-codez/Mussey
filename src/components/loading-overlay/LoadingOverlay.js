import React from 'react';

export default (WrappedComponent, isLoading) => {
  const LoadingOverlay = props => {
    return isLoading ? (
      <div class='loading'>
        <div class='spinner-wrapper'>
          <span class='spinner-text'>LOADING</span>
          <span class='spinner'></span>
        </div>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return LoadingOverlay;
};
