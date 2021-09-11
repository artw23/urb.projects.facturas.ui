import { Route } from "react-router-dom"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios, {AxiosRequestConfig} from 'axios'


function ReporteInputContainer() {

    const history = useHistory()

    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const submitForm = (event) => {
        
        event.preventDefault();

        const formData = new FormData();
        formData.append("fecha_de_pago", name);
        formData.append("file", selectedFile);

        axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

        axios.post('/api/reporte', formData)
          .then((response) => {
              history.push('/')
          });
          history.push('/')
    };


    return (
        <Route path="/reporte/nuevo">
            <div className="container-fluid">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Crear reporte</h1>
                </div>
                <div className="container-fluid">
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Fecha</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <small className="form-text text-muted">Formato 2015-12-12</small>
                        </div>
                        <div className="form-group">
                            <input type="file" name="file" onChange={changeHandler} />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </Route>
    );
}
export default ReporteInputContainer;