import React from 'react';
import esperanza from '../images/esperanza.jpg';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <div className='card'>
        <div className='card__profile'>
          <img className='card__image' src={esperanza} alt='esperanza' />
          <div className='card__profile-text'>
            <p className='card__profile-name'>Esperanza Gracia</p>
            <p className='card__profile-date'>Lunes 30 de Julio de 2017</p>
          </div>
        </div>
        <div className='card__text-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adisicing elit, bla bla bla
            blo blo hola amigas cómo están todo bien vamos a bailar react es
            maravilloso
          </p>
        </div>
        <div className='card__extra'>
          <p className='read-more'>Leer más...</p>
          <p className='favorite'>
            36 <i className='fas fa-heart'></i>
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
