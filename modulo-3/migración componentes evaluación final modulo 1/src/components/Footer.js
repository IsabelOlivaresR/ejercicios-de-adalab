import React from 'react';
import '../stylesheets/_Footer.scss';
import top from '../images/ico-arrow.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__buttom'>
          <a href='#top' title='got to the top' target='_blank'>
            <img className='icon__arrow' src={top} alt='go to the top' />
          </a>
        </div>
        <div className='footer__container'>
          <div className='copyright'>
            <small className='copyright__year'> &copy; 2017 </small>
            <span className='claim'>
              we
              <i className='fa fa-heart' title='heart'></i>
              components
            </span>
          </div>
          <nav className='footer__menu'>
            <ul>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to Articles'
                  target='_blank'
                >
                  articles
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to books'
                  target='_blank'
                >
                  books
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to events'
                  target='_blank'
                >
                  events
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to reasons'
                  target='_blank'
                >
                  reasons
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to tips'
                  target='_blank'
                >
                  tips
                </a>
              </li>
            </ul>
          </nav>
          <nav className='footer__social-media'>
            <ul>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to Twitter'
                  target='_blank'
                >
                  twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to Instagram'
                  target='_blank'
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.adalab.es'
                  title='Go to Mastodon.social'
                  target='_blank'
                >
                  mastodon.social
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
export default Footer;
