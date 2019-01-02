import React, { Component } from "react";

export default class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: ""
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: ""
    });
  };

  render() {
    const {
      todo_description,
      todo_responsible,
      todo_priority,
      todo_completed
    } = this.state;

    return (
      <div>
        <p>create todo</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo_description"
            value={todo_description}
            onChange={this.handleInputChange}
            placeholder="description"
          />
          <input
            type="text"
            name="todo_responsible"
            value={todo_responsible}
            onChange={this.handleInputChange}
            placeholder="responsible"
          />
          <input
            type="text"
            name="todo_priority"
            value={todo_priority}
            onChange={this.handleInputChange}
            placeholder="priority"
          />
          <input
            type="text"
            name="todo_completed"
            value={todo_completed}
            onChange={this.handleInputChange}
            placeholder="completed"
          />

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
