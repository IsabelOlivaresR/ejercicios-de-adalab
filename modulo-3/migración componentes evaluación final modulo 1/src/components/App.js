import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';
import '../stylesheets/_App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
