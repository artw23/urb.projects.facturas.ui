import FacturaList from "./FacturaList"
import { Route } from "react-router-dom"
import React from 'react';
import axios, {AxiosRequestConfig} from 'axios'

class FacturasContainer extends React.Component {

  
  state = {
    todos: [],
    hrefLink: ""
  }

  componentDidMount() {
    var id = localStorage.getItem('ID')

    this.state.hrefLink = process.env.REACT_APP_BACKEND_URL + '/api/reports/' + id + '/download'

    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

    axios.get("/api/reports/" + localStorage.getItem('ID') + "/invoices?size=1000", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
    })
    .then((response) => {
        this.setState({ todos: response.data.content });
    });

  }

  runExport = title => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    var id = localStorage.getItem('ID')

    axios.post("/api/reports/" + localStorage.getItem('ID') + "/process", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
    })
    .then((response) => {
        this.props.history.push('/')
    });


  };

  render() {
    return (
      <Route path="/">
        <div className="container-fluid">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Facturas</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.runExport}>Run</button>
                <a href={`${this.state.hrefLink}`} download="data.zip">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <FacturaList
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
export default FacturasContainer