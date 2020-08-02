import React from 'react';
import ShowList from './ShowList';
import Filter from './Filter';
import data from '../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: data,
      filterText: '',
    };
    // this.getDatafromApi = this.getDatafromApi.bind(this);
    this.getValueFromSearch = this.getValueFromSearch.bind(this);
  }
  getValueFromSearch(ev) {
    console.log(ev);
    this.setState({ filterText: ev });
  }
  // getDatafromApi() {
  //   fetch('http://api.tvmaze.com/search/shows?q=girls')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ searchList: data }));
  // }

  render() {
    console.log(this.state.filterText);
    const filteredGirls = this.state.searchList.filter((serie) => {
      if (this.state.filterText !== '') {
        return serie.show.name
          .toUpperCase()
          .includes(this.state.filterText.toUpperCase());
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
        <Filter getValueFromSearch={this.getValueFromSearch} />
        <ShowList list={filteredGirls} />
      </div>
    );
  }
}

export default App;
