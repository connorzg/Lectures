import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cYards: 0
    }
  }

  _handleChange() {
    let yards = (this.refs.l.value * this.refs.w.value * this.refs.d.value) / 27;
    this.setState({
      cYards: +yards.toFixed(3)
    })
  }

  render() {
    return (
      <div className="App">
        <form onChange={ () => this._handleChange() }>
          <input type="text" ref="l" placeholder="length" />
          <input type="text" ref="w" placeholder="width" />
          <input type="text" ref="d" placeholder="depth" />
        </form>
        <h3>You will need {this.state.cYards} yards of concrete</h3>
      </div>
    );
  }
}

export default App;
