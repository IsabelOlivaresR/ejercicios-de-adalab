import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      job: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    console.log('me han cambiado', ev.currentTarget.value);
    console.log('me han cambiado', ev.currentTarget.id);
    const value = ev.currentTarget.value;
    const stateAttribute = ev.currentTarget.id;
    const newState = [];
    newState[stateAttribute] = value;
    this.setState({
      [stateAttribute]: value,
    });
    /*
    if (ev.currentTarget.id === 'email') {
      this.setState({
        email: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === 'job') {
      this.setState({
        jov: ev.currentTarget.value,
      });
    }*/
    const obj = {};
    obj.email = 'mc@gmail.com';
    obj['email'] = 'mc@gmail.com';
  }

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor='job'>Job</label>
            <input type='job' name='job' id='job' onChange={this.handleInput} />
          </div>
        </form>
        <article>
          <p>Email: {this.state.email}</p>
          <p>Job: {this.state.job}</p>
        </article>
      </div>
    );
  }
}

export default App;
