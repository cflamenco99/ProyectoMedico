import React from 'react';
import axios from 'axios';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";
export default class ListadoPacientes extends React.Component{
  state = {
    listaPacientes: []
  }  

  abrirAgregarPaciente() {
    this.props.history.push('/admin/agregarPacientes')
  }

  componentDidMount() {
    axios.get(`https://localhost:44310/api/Pacientes`)
      .then(res => {
        const listaPacientes = res.data;
        this.setState({ listaPacientes: listaPacientes });
      })
  }

  render() {
    return (
      <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Listado de pacientes</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={this.abrirAgregarPaciente}
                      size="sm"
                    >
                      Nuevo paciente
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Codigo Postal</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaPacientes.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idPaciente}</th>
                        <td>{currentValue.nombres + ' ' +currentValue.apellidos}</td>
                        <td>{currentValue.pais}</td>
                        <td>{currentValue.ciudad}</td>
                        <td>{currentValue.codigoPostal}</td>
                        </tr>                        
                        )}
                        </tbody>
                      </Table>                      
                    </Card>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}
