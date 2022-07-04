import React from "react"

class FacturaList extends React.Component {



  render() {

    var rowNum = 1;

    return (

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Condominio</th>
              <th scope="col">Numero</th>
              <th scope="col">Clave catastral</th>
              <th scope="col">Operacionl</th>
              <th scope="col">cantidadInicial</th>
              <th scope="col">cantidadFinal</th>
              <th scope="col">Factura</th>
              <th scope="col">Fecha</th>
              <th scope="col">Periodo</th>
              <th scope="col">pdf</th>
              <th scope="col">xml</th>
              <th scope="col">recibos</th>
              <th scope="col">Errores</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => (
              <tr key={todo.id}>
                <td>{rowNum++}</td>
                <td>{todo.condominio}</td>
                <td>{todo.numero}</td>
                <td>{todo.claveCatastral}</td>
                <td>{todo.operacion}</td>
                <td>{todo.cantidadInicial}</td>
                <td>{todo.cantidadFinal}</td>
                <td>{todo.nombreFactura}</td>
                <td>{todo.fecha}</td>
                <td>{todo.periodo}</td>
                <td>
                  {todo.pdfFileId &&
                    <a href={`${process.env.REACT_APP_BACKEND_URL}/api/file/${todo.pdfFileId}`} download={`${todo.condominio}-${todo.numero}.pdf`}>pdf</a>
                  }

                </td>
                <td>
                  {todo.xmlfileId &&
                    <a href={`${process.env.REACT_APP_BACKEND_URL}/api/file/${todo.xmlfileId}`} download={`${todo.condominio}-${todo.numero}.xml`}>xml</a>
                  }
                </td>
                <td>
                  {todo.recepitFileId &&
                    <a href={`${process.env.REACT_APP_BACKEND_URL}/api/file/${todo.recepitFileId}`} download={`RECIBO-${todo.condominio}-${todo.numero}.pdf`}>recibo</a>
                  }
                </td>
                <td>{todo.errores}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FacturaList