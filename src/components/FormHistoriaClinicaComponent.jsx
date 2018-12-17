import React, { Component } from "react";
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

class FormHClinica extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Card body outline color="info">
          <CardBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Consulta
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Antecedentes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Problema Actual
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  Pre-Consulta
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("5");
                  }}
                >
                  Examen Fisico
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("6");
                  }}
                >
                  Diagnostico
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("7");
                  }}
                >
                  Tratamiento
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("8");
                  }}
                >
                  Evolucion y Prescripción
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
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
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="namepaciente">
                        2. Antecedentes Personales
                      </Label>
                      <Input
                        type="textarea"
                        name="antecedentespaciente"
                        id="antecedentespaciente"
                        rows="2"
                        placeholder="Ingrese los antecedentes aquí"
                      />
                      <Label for="namepaciente">
                        3. Antecedentes Familiares
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
              </TabPane>
              <TabPane tabId="3">
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
              </TabPane>
              <TabPane tabId="4">
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
                        6. Signos Vitales y Antropometria
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
              </TabPane>
              <TabPane tabId="5">
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
              </TabPane>
              <TabPane tabId="6">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="diagnosticopaciente">8. Diagnostico</Label>
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
              </TabPane>
              <TabPane tabId="7">
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
              </TabPane>
              <TabPane tabId="8">
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="namepaciente">Evolucion:</Label>
                      <Input
                        type="textarea"
                        name="namepaciente"
                        id="namepaciente"
                        rows="6"
                        placeholder="Ingrese los motivos de la consulta"
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
                        placeholder="Ingrese los motivos de la consulta"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        <Button outline color="info">
          Cancelar
        </Button>
        <Button color="secondary">Siguiente</Button>
      </div>
    );
  }
}

export default FormHClinica;
