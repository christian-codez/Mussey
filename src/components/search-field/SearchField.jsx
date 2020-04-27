import React, { useState } from 'react';
import './searchfield.style.css';
import { searchSong } from '../../redux/actions/songActions';
import { connect } from 'react-redux';

const SearchField = ({ searchSong }) => {
  const [terms, setterms] = useState(null);
  const handleSearchChange = event => {
    setterms(event.target.value.toLowerCase());
    searchSong(event.target.value.toLowerCase());
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    searchSong(terms);
  };
  return (
    <form method='post' onSubmit={handleFormSubmit}>
      <div className='input-group mb-3'>
        <input
          onChange={handleSearchChange}
          style={{ fontFamily: 'Cormorant Upright', fontSize: '20px' }}
          type='text'
          className='form-control search-input'
          placeholder='Enter song title or artist name '
          aria-label='Search keyword'
          aria-describedby='Search keyword'
        />
      </div>
    </form>
  );
};

export default connect(null, { searchSong })(SearchField);
