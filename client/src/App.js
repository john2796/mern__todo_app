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
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="..">
              <img
                src="https://react.semantic-ui.com/logo.png"
                style={{
                  width: 60
                }}
                alt="logo"
              />
            </a>
            <Link to="/" className="navbar-brand">
              Mern-Stack Todo App
            </Link>
            <div className="navbar-collapse nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
