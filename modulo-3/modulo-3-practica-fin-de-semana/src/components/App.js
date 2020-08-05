import React from 'react';
import ShowList from './ShowList';
import Filter from './Filter';
import getDataFromApi from '../services/data';
// import data from '../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [],
      filterText: '',
      isChecked: false,
    };

    this.getValueFromSearch = this.getValueFromSearch.bind(this);
    this.getOnlyRunning = this.getOnlyRunning.bind(this);
  }
  componentDidMount(filterText) {
    getDataFromApi().then((responseData) => {
      this.setState({
        searchList: responseData,
      });
    });
  }
  getValueFromSearch(ev) {
    console.log(ev);
    this.setState({ filterText: ev });
  }
  getOnlyRunning(ev) {
    console.log('holi');
    this.setState({ isChecked: true });
  }

  render() {
    console.log(this.state.isChecked);
    const filteredGirls = this.state.searchList
      .filter((serie) => {
        if (this.state.filterText !== '') {
          return serie.show.name
            .toUpperCase()
            .includes(this.state.filterText.toUpperCase());
        } else {
          return true;
        }
      })
      .filter((serie) => {
        if (this.state.isChecked === true) {
          return serie.show.status.includes('Running');
        } else {
          return true;
        }
      });

    return (
      <div>
        {/* <input
          type='text'
          name='search'
          className='search-bar'
          placeholder='Introduce una serie'
          onChange={this.getDataFromApi}
        />
        <button
          className='search-btn'
          type='button'
          onClick={this.handlerSearchInput}
        >
          buscar
        </button> */}
        <Filter
          getValueFromSearch={this.getValueFromSearch}
          getOnlyRunning={this.getOnlyRunning}
        />
        <ShowList list={filteredGirls} />
      </div>
    );
  }
}

export default App;
