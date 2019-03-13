import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding        : "10px",
            borderBottom   : "1px #ccc solid",
            textDecoration : this.props.todo.completed ? "line-through": "none"
        }
    }
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type     = "checkbox"
                        onChange = {
                            this.props.toggleComplete.bind(this, id)
                        } /> {' '}
                    {title}
                    <button
                        onClick = {this.props.deleteTodo.bind(this, id)}
                        style   = {btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: "#ff0000",
    color          : "#fff",
    border         : "none",
    padding        : "5px 10px",
    borderRadius   : "50%",
    cursor         : "pointer",
    float          : "right",
    fontWeight     : "bold"
}

export default TodoItem;
