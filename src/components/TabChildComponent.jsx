import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

class TabChild extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }
  ///state = {  }
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            {/* <h1>TabView</h1>
            <p>TabView is a container component to group content with tabs.</p> */}
          </div>
        </div>

        <div className="content-section implementation">
          <TabView
            activeIndex={this.state.activeIndex}
            onTabChange={e => this.setState({ activeIndex: e.index })}
          >
            <TabPanel header="Consulta">
              <Row form>
                <Col sm="12">
                  <FormGroup>
                    <Label for="namepaciente">1. Motivo de Consulta</Label>
                    <Input
                      type="textarea"
                      name="namepaciente"
                      id="namepaciente"
                      rows="6"
                      placeholder="Ingrese los motivos de la consulta aquí"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Antecedentes">
              <Row form>
                <Col sm="12">
                  <FormGroup>
                    <Label for="namepaciente">2. Antecedentes Personales</Label>
                    <Input
                      type="textarea"
                      name="antecedentespaciente"
                      id="antecedentespaciente"
                      rows="2"
                      placeholder="Ingrese los antecedentes aquí"
                    />
                    <Label for="namepaciente">3. Antecedentes Familiares</Label>
                    <Input
                      type="textarea"
                      name="antecedentesfapaciente"
                      id="antecedentesfapaciente"
                      rows="3"
                      placeholder="Ingrese los antecedentes familiares aquí"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel
              header="Problema Actual"
              //leftIcon="pi pi-search"
              //rightIcon="pi pi-check"
            >
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="problemaactualpaciente">
                      4. Enfermedad o Problema Actual
                    </Label>
                    <Input
                      type="textarea"
                      name="problemaactualpaciente"
                      id="problemaactualpaciente"
                      rows="6"
                      placeholder="Ingrese la enfermedad o problema actual aquí"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Pre-Consulta">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="revactorganospaciente">
                      5. Revision Actual de Organos
                    </Label>
                    <Input
                      type="textarea"
                      name="revactorganospaciente"
                      id="revactorganospaciente"
                      rows="2"
                      placeholder="Ingrese los antecedentes aquí"
                    />
                    <Label for="namepaciente">
                      6. Signos Vitales y Antropometría
                    </Label>
                    <Input
                      type="textarea"
                      name="antecedentesfapaciente"
                      id="antecedentesfapaciente"
                      rows="3"
                      placeholder="Ingrese los antecedentes familiares aquí"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Examen Físico">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="revactorganospaciente">
                      7. Examen Físico Regional
                    </Label>
                    <Input
                      type="textarea"
                      name="revactorganospaciente"
                      id="revactorganospaciente"
                      rows="2"
                      placeholder="Ingrese los antecedentes aquí"
                    />
                    <br />
                    <Input
                      type="textarea"
                      name="antecedentesfapaciente"
                      id="antecedentesfapaciente"
                      rows="3"
                      placeholder="Ingrese los antecedentes familiares aquí"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Diagnóstico">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="diagnosticopaciente">8. Diagnóstico</Label>
                    <Row>
                      <Col sm="1">
                        <br />
                        <label>1</label>
                      </Col>
                      <Col sm="4">
                        <Label for="diagnosticopaciente">Descripción</Label>
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="3">
                        <Label for="diagnosticopaciente">CIE</Label>
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Label for="diagnosticopaciente">PRE</Label>
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Label for="diagnosticopaciente">DEF</Label>
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="1">
                        <label>2</label>
                      </Col>
                      <Col sm="4">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="3">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="1">
                        <label>3</label>
                      </Col>
                      <Col sm="4">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="3">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="antecedentesfapaciente"
                          id="antecedentesfapaciente"
                          rows="3"
                          placeholder=""
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Tratamiento">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="namepaciente">9. Tratamiento</Label>
                    <Input
                      type="textarea"
                      name="namepaciente"
                      id="namepaciente"
                      rows="8"
                      placeholder="Ingrese el tratamiento"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel header="Evolución y Prescripción">
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Label for="namepaciente">Evolución:</Label>
                    <Input
                      type="textarea"
                      name="namepaciente"
                      id="namepaciente"
                      rows="6"
                      placeholder="Ingrese los detalles de la evolución"
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Label for="namepaciente">Prescripción:</Label>
                    <Input
                      type="textarea"
                      name="namepaciente"
                      id="namepaciente"
                      rows="6"
                      placeholder="Ingrese la prescripción"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </TabPanel>
          </TabView>
        </div>
      </div>
    );
  }
}

export default TabChild;
