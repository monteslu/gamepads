import React, { Component } from 'react';
import { map, compact } from 'lodash';

import './App.css';

class App extends Component {
  state = {
    gamepads: []
  }

  componentWillMount() {
    const step = (timestamp) => {
      
      this.setState({gamepads: navigator.getGamepads()});
      console.log('raf', this.state.gamepads);
      window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
  }

  render () {
    const { gamepads } = this.state;
    return (
    <div className="App-header">
      <h1>gamepads</h1>
      {map(compact(gamepads), (gamepad, i) => {
        return (
          <div key={i}>
            <span>{gamepad.id}</span>
            {map(gamepad.buttons, (button, b) => {
              return (
                <span key={`${i}_${b}`} style={{border: '1px solid white', margin: '5px'}}>{b} {button.pressed ? 'X' : '-'}</span>
              );
            })}
          </div>
        );
      })}
    </div>
    );
  }
}

export default App;
