import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.getValueFromSearchChild = this.getValueFromSearchChild.bind(this);
    this.getOnlyRunningChild = this.getOnlyRunningChild.bind(this);
  }

  getValueFromSearchChild(ev) {
    this.props.getValueFromSearch(ev.currentTarget.value);
  }
  getOnlyRunningChild(ev) {
    this.props.getOnlyRunning(ev);
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <label>Busca una serie</label>
        <input
          type='text'
          name='search'
          className='search-bar'
          placeholder='Introduce una serie'
          onChange={this.getValueFromSearchChild}
        />
        <label>Running</label>
        <input
          type='Checkbox'
          className='checkFilter'
          onClick={this.getOnlyRunningChild}
        />
      </form>
    );
  }
}

export default Filter;
