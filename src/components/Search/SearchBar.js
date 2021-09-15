import React, { useContext, useState } from 'react';

// Link
import { Link } from 'react-router-dom';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const SearchBar = () => {
  const [word, setWord] = useState('');

  const { handleSearch } = useContext(NoteActionContext);

  const Search = (e) => {
    setWord(e.target.value);
    handleSearch(word);
  };
  return (
    <div className='search'>
      <Link to='/search'>
        <i className='fas fa-search'></i>
      </Link>
      <input onChange={Search} placeholder='Search' />
    </div>
  );
};

export default SearchBar;
