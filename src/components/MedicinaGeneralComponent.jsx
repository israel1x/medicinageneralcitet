import React, { Component } from "react";
import PanelMenuMed from "./PanelMenuComponent";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import FormHistoriaClinica from "./FormHistoriaClinicaComponent";
import TabFather from "./TabFatherComponent";
import Footer from "./FooterComponent";
import { Container, Row, Col } from "reactstrap";
import "./medicinageneral.scss";
import FormBulma from "./FormBulmaC";
import BuscarDatosFlex from "./BuscarDatosFlex";

class MedicinaGeneral extends Component {
  state = {};
  render() {
    return (
      <div className="container-main">
        {/* <div className="container-navbar">
          <PanelMenuMed />
        </div> */}
        <div className="container-main-panel">
          <div>
            <BuscarDatosPaciente />
          </div>
          <div>
            <TabFather />
          </div>
          {/*  <div>
            <BuscarDatosFlex />
          </div> */}
        </div>

        <Footer />
      </div>
    );
  }
}

export default MedicinaGeneral;
/* 
<style type = 'text/css'>
    .flex { display: flex; flex-direction: row; justify-content: flex-start; width: 800px; border: 1px solid gray; padding: 4px;}
    .flex div { border: 1px solid gray; padding: 4px; background: #A4F2D8; font-family: verdana; font-size: 19px; text-align: center; color: gray; }
</style>
<div class = 'flex'>
    <div style = 'width: 254px; height: 34px'>1</div>
    <div style = 'width: 654px; height: 34px'>2</div>
</div> */
