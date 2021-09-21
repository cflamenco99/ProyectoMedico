import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Row,
  Col,
  Table,
  Input,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";


export default class historialmedicos extends React.Component{

  state={
    historialmedico:[]
  }

  componentDidMount(){
    
      axios.get(`https://localhost:44310/api/Historial`, HistorialDTO).
      then(response=>
        {console.log(response)
          this.setState({historialmedico: response.data})
        })
        .catch(error=>
          {console.log(error)
          });
  }

  render() {

    function ObtenerHistorial(idPaciente){
      axios.get(`https://localhost:44310/api/Historial/${idPaciente}`)
      .then(res => {
        const ObtenerHistorial = res.data;
        this.setState({ ObtenerHistorial: ObtenerHistorial });
      })      
    }
    
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
                    <h3 className="mb-0">Historial de Pacientes</h3>
                  </Col>
                  <Col lg="6">
                  <FormGroup>
                            <label
                              className="form-control-label">
                              Ingrese ID
                            </label>
                            <Input 
                              className="form-control-alternative"
                              placeholder="Ingrese ID Aqui"
                              type="text"
                              id="primerNombre"
                              //value=""
                            />
                          </FormGroup>
                  </Col>
                  <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={ObtenerHistorial}
                        size="sm"
                      >
                        Buscar Historial
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
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
                            <th scope="col">Ciudad</th>
                            <th scope="col">ID Cita</th>
                            <th scope="col">Fecha Cita</th>
                            <th scope="col">ID Receta</th>
                            <th scope="col">Medicinas</th>
                            <th scope="col">Diagnostico</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.historialmedico.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idPaciente}</th>
                        <td>{currentValue.Nombres + ' ' +currentValue.Apellidos}</td>
                        <td>{currentValue.IdCiudad}</td>
                        <td>{currentValue.IdCita}</td>
                        <td>{currentValue.FechaCita}</td>
                        <td>{currentValue.IdRecetas}</td>
                        <td>{currentValue.Medicinas}</td>
                        <td>{currentValue.Diagnostico}</td>
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

