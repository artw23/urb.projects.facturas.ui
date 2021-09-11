import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ReportesContainer from './components/reportes/ReportesContainer';
import FacturasContainer from './components/factura/FacturasContainer';
import Header from './components/Header';
import ReporteInputContainer from './components/reportes/ReporteInputContainer';

function App() {
  return (
    <Router>
      <>
      <Header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"/>
      <div className="main">
        <div>
          <Route exact path='/' component={ReportesContainer} />
        </div>
        <div>
          <Route exact path='/facturas' component={FacturasContainer} />
        </div>
        <div>
          <Route exact path='/reporte/nuevo' component={ReporteInputContainer} />
        </div>
      </div>
      </>
    </Router>

  );
}

export default App;
