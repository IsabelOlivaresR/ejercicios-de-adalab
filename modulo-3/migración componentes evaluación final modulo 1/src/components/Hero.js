import React from 'react';
import '../stylesheets/_Hero.scss';
import arrow from '../images/ico-arrow.svg';

class Hero extends React.Component {
  render() {
    return (
      <section className='hero' id='top'>
        <h1 className='hero__title'>
          <span>anonymous </span>
          <span>proxy</span>
        </h1>
        <p className='hero__claim'>in hac habitasse platea dictumst.</p>
        <div className='hero__buttom'>
          <a href='#section2' title='scroll down'>
            <img src={arrow} alt='scroll-down button' />
          </a>
        </div>
      </section>
    );
  }
}
export default Hero;
