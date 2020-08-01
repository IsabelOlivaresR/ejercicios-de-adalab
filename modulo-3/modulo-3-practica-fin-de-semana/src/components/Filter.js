import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.getValueFromSearchChild = this.getValueFromSearchChild.bind(this);
  }

  getValueFromSearchChild(ev) {
    this.props.getValueFromSearch(ev.currentTarget.value);
  }

  render() {
    console.log(this.props);
    return (
      <input
        type='text'
        name='search'
        className='search-bar'
        placeholder='Introduce una serie'
        onChange={this.getValueFromSearchChild}
      />
    );
  }
}

export default Filter;
