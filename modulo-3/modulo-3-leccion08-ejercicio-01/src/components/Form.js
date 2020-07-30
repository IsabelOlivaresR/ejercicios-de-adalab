import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      description: event.target.value,
      language: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='description'>Descripción:</label>
        <input
          id='description'
          type='text'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label htmlFor='language'>Lenguajes:</label>
        <input
          id='language'
          type='text'
          value={this.state.language}
          onChange={this.handleChange}
        />
        <input type='submit' value='Enviar' />
      </form>
    );
  }
}

export default Form;
