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

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  };

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Todos
          todos          = {this.state.todos}
          toggleComplete = {this.toggleComplete}
          deleteTodo     = {this.deleteTodo} />
      </div>
    );
  }
}

export default App;
