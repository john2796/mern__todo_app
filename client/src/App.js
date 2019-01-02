import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./Components/TodoList";
import EditTodo from "./Components/EditTodo";
import CreateTodo from "./Components/CreateTodo";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <h2>Mern-Stack Todo App</h2>
          </div>

          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
