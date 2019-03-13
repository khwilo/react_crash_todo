import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <React.Fragment>
                <p> ID       : {todo.id}</p>
                <h2>Title    : {todo.title}</h2>
                <p> Completed: {todo.completed}</p>
                <br></br>
            </React.Fragment>
        ));
    }
}

export default Todos;
