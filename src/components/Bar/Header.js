import React from 'react';

import { Link } from 'react-router-dom';

// Assets
import Logo from '../../assets/logo192.png';

// Custom Components
import SearchBar from '../Search/SearchBar';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='brand'>
          <img src={Logo} alt='Logo' />
          <h4>Keep</h4>
        </div>
        <div className='search-bar'>
          <SearchBar />
        </div>
        <div className='user'>
          <h6>User</h6>
        </div>
      </div>
      <nav class='nav__cont'>
        <ul class='nav'>
          <Link to='/'>
            <li class='nav__items '>
              <i class='far fa-lightbulb'></i>
              <p>Notes</p>
            </li>
          </Link>
          <Link to='/archieve'>
            <li class='nav__items '>
              <i class='fas fa-archive'></i>
              <p>Archieve</p>
            </li>
          </Link>
          <Link to='/bin'>
            <li class='nav__items '>
              <i class='far fa-trash-alt'></i>
              <p>Bin</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
