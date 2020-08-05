import React from 'react';
import About from './About';
import Home from './Home';
import Pricing from './Pricing';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/pricing' component={Pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
