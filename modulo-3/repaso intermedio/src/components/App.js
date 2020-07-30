import React from 'react';
import List from './List';
import clubsFromApi from '../data/clubs.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: clubsFromApi,
    };
  }
  render() {
    return (
      <div clubs={clubsFromApi}>
        <List />
      </div>
    );
  }
}

export default App;
