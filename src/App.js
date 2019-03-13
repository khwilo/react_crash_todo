import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id       : uuid.v4(),
        title    : "Apply for job",
        completed: false
      },
      {
        id       : uuid.v4(),
        title    : "RSVP to meetup",
        completed: false
      },
      {
        id       : uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id       : uuid.v4(),
      title    : title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos          = {this.state.todos}
            toggleComplete = {this.toggleComplete}
            deleteTodo     = {this.deleteTodo}
          />
          </div>
      </div>
    );
  }
}

export default App;
