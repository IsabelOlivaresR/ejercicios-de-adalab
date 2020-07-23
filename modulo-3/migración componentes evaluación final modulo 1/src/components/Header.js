import React from 'react';
import '../stylesheets/_Header.scss';
import hamburger from '../images/ico-menu.svg';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__menu'>
          <a href='https://www.adalab.es' title='display menu'>
            <img className='toggle' src={hamburger} alt='header menu' />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
