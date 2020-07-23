import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      content: '',
    };
  }

  handleInput(ev) {
    const inputValue = ev.currentTarget.value;
    this.setState({
      content: inputValue,
    });
  }

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={this.handleInput}></input>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default List;
