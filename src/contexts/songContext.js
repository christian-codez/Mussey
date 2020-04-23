import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentSong } from '../redux/reselect/songSelector';
import { withRouter } from 'react-router-dom';
export const SongContext = React.createContext();

const SongContextProvider = ({
  favourite,
  currentSongLists,
  song,
  ...props
}) => {
  return (
    <SongContext.Provider
      value={{
        song: song ? song : {},
      }}>
      {props.children}
    </SongContext.Provider>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: selectCurrentSong(state),
  };
};

export default withRouter(connect(mapStateToProps)(SongContextProvider));
