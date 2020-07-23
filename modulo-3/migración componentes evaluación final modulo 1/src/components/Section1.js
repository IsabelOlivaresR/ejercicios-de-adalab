import React from 'react';
import '../stylesheets/_Section1.scss';

class Section1 extends React.Component {
  render() {
    return (
      <section className='section1'>
        <span className='category'>Insomnia Tips</span>
        <h2 className='section1__title'>looking through a window</h2>
        <p className='section1__info'>
          {' '}
          Donec accumsan, nulla ut volutpat porttitor, quam odio tempus felis,
          at luctus ex diam nec lectus. Vivamus semper sodales rutrum.
        </p>
        <div className='section1__buttom'>
          <a href='' title='go to the article'>
            Go
          </a>
        </div>
      </section>
    );
  }
}

export default Section1;
