import React from "react"
import { Link } from 'react-router-dom';
import axios, {AxiosRequestConfig} from 'axios'

class ReporteList extends React.Component {


  render() {

    const setData = (data) => {
      localStorage.setItem('ID', data);
    }

    const deleteReport = (data) => {
      axios.delete('/api/reports/' + data)
          .then((response) => {
          });
    }

    return (

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Fecha creacion</th>
              <th scope="col"></th>
              <th scope="col">Fecha de pago</th>
              <th scope="col">Tipo</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.createdAt}</td>
                <td>
                <Link to='/' onClick={() => deleteReport(todo.id)}>
                    eliminar
                  </Link>
                </td>
                <td>{todo.paymentDate}</td>
                <td>{todo.invoiceType}</td>
                <td>{todo.status}</td>
                <td>
                  <Link to='/facturas' onClick={() => setData(todo.id)}>
                    ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReporteList