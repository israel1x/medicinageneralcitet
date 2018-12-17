import React, { Component } from "react";
//import "./buscarflex.scss";
import { Column, Row } from "simple-flexbox";

class BuscarFlex extends Component {
  state = {};
  render() {
    return (
      <div>
        <Column>
          <Row horizontal="center">
            <Column alignItems="start">
              <h3>Nombres</h3>
              <input type="text" />
            </Column>
            <Column alignItems="start">
              <h3>Apellidos</h3>
              <input type="text" />
            </Column>
            <Column alignItems="start">
              <h3>Genero</h3>
              <input type="text" />
            </Column>
            <Column alignItems="start">
              <h3>Edad</h3>
              <input type="text" />
            </Column>
            <Column alignItems="start">
              <h3>Cedula</h3>
              <input type="text" />
            </Column>
            <Column alignItems="start">
              <h3>N. Historia Clinica</h3>
              <input type="text" />
            </Column>
          </Row>
          <div>
            <Row horizontal="center" alignItems="center">
              <Column>
                <select>
                  <option>12/21/2018</option>
                </select>
              </Column>
              <Column>
                <button>Buscar</button>
              </Column>
            </Row>
          </div>
        </Column>
      </div>
    );
  }
}

export default BuscarFlex;
