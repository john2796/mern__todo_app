import React, { Component } from "react";
import axios from "axios";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  // helper method
  todoList = () => {
    return this.state.todos.map((currentTodo, index) => (
      <Todo
        todo={currentTodo}
        key={index}
        deleteListHandler={() => this.deleteListHandler(currentTodo._id)}
      />
    ));
  };

  deleteListHandler = currentTodo => {
    console.log(currentTodo.id);
    const url = `http://localhost:4000/todos${currentTodo.id}`;

    axios
      .delete(url)
      .then(res => {
        this.setState((state, props) => {
          return {
            todos: state.todos.filter(t => t !== currentTodo.id)
          };
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:4000/todos`)
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
