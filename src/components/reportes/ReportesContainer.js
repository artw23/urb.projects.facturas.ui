import React from "react"
import ReporteList from "./ReporteList"
import { v4 as uuidv4 } from "uuid"
import { Route } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios'

const proxy = require("http-proxy-middleware");


class ReportesContainer extends React.Component {

  REPORTE_ENDPOINT = "/api/reports?size=1000";

  state = {
    todos: [],
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {

    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

    axios.get(this.REPORTE_ENDPOINT, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
    })
    .then((response) => {
        this.setState({ todos: response.data.content });
    });

  }

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  addTodoItem = title => {
    const newTodo = { id: uuidv4(), title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  delTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => { return todo.id !== id; })] });
  };

  render() {
    return (
      <Route path="/">

        <div className="container-fluid">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Reportes</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <Link to='/reporte/nuevo'>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Nuevo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <ReporteList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
            />
          </div>
        </div>
      </Route>
    );
  }
}
export default ReportesContainer