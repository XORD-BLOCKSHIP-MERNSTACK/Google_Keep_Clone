import React from 'react';

// Link
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className='search'>
      <Link to='/search'>
        <i className='fas fa-search'></i>
      </Link>
      <input placeholder='Search' />
    </div>
  );
};

export default SearchBar;
