import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id       : 1,
        title    : "Apply for job",
        completed: false
      },
      {
        id       : 2,
        title    : "RSVP to meetup",
        completed: false
      },
      {
        id       : 3,
        title    : "Watch The Wire",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
