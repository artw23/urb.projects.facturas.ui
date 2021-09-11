import React from "react"
import { Link } from 'react-router-dom';



class ReporteListItem extends React.Component {



  render() {

    const { fechaDePago, status, createdAt, id } = this.props.todo

    const setData = (data) => {
      localStorage.setItem('ID', id);
    }

    return (
      <Link to='/facturas' onClick={() => setData()}>
        <div className="card" key={id}>
          <div className="card-body">
            <h5 className="card-title">{createdAt}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
            <p className="card-text">Fecha de pago: {fechaDePago}</p>
          </div>
        </div>
      </Link>
    );
  }
} export default ReporteListItem