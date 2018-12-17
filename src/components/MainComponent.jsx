import React, { Component } from "react";
import MedicinaGeneral from "./MedicinaGeneralComponent";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import FormHistoriaClinica from "./FormHistoriaClinicaComponent";
import TabFather from "./TabFatherComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginWrapper from "./LoginWrapper";
import Dashboard from "./Dashboard";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <div className="app">
            <Route exact path="/" component={LoginWrapper} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/medicinageneral" component={MedicinaGeneral} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;

/* <div>
        <BuscarDatosPaciente />
        <FormHistoriaClinica />
        <div>
          <TabFather />
        </div>
      </div> */
