import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroup,
  Form,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";

export default class Historial extends React.Component{
  constructor(props) {
    super(props);
    this.state = {listaHistorial: []};
  }

  ObtenerPacientes(){
    axios.get(`https://localhost:44310/api/Historial`)
      .then(res => {
        const listaHistorial = res.data;
        this.setState({ listaHistorial: listaHistorial });
      })
  }

  ObtenerInfoCitas(id){
      axios.get(`https://localhost:44310/api/Historial/citas/${id}`)
        .then(res => {
      const listaHistorialCitas = res.data;
      this.setState({ listaHistorialCitas: listaHistorialCitas });
    })
  }

  ObtenerInfoRecetas(id){
    axios.get(`https://localhost:44310/api/Historial/recetas/${id}`)
      .then(res => {
    const listaHistorialRecetas = res.data;
    this.setState({ listaHistorialRecetas: listaHistorialRecetas });
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
                    <h3 className="mb-0">Informacion del Paciente</h3>
                    <div class="form-group row">
                      <label for="inputid" class="col-sm-2 col-form-label">ID Paciente</label>
                    <div class="col-sm-3">
                       <Input type="ID" class="form-control" id="Ingrese ID" placeholder="ID"> </Input>
                    </div>
                    </div>
                  </Col>                   
                                    <div class="container">
                                    <Row> 
                                    <Col className="text-left" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={this.ObtenerPacientes}
                                            size="sm"
                                        >
                                            Buscar Historial
                                        </Button>
                                    </Col>
                                    </Row>
                                    </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                    <div className="pl-lg-4">
                                          <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Primer nombre
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Primer nombre"
                                                        type="text"
                                                        id="primerNombre"
                                                        readonly="readonly"
                                                        //value={}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Segundo nombre
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Segundo nombre"
                                                        type="text"
                                                        id="segundoNombre"
                                                        readonly="readonly"
                                                       //value={}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Primer apellido
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Primer apellido"
                                                        type="text"
                                                        id="primerApellido"
                                                        readonly="readonly"
                                                        //onChange={formik.handleChange}
                                                        //value={formik.values.primerApellido}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Segundo apellido
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Segundo apellido"
                                                        type="text"
                                                        id="segundoApellido"
                                                        readonly="readonly"
                                                       // onChange={formik.handleChange}
                                                        //value={formik.values.segundoApellido}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>

                       <Col xs="8">
                          <h3 className="text-center-mb-0">Informacion de las Citas</h3>
                       </Col> 

                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ID Citas</th>
                            <th scope="col">Fecha de la Cita</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaHistorial.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idCita}</th>
                        <td>{currentValue.idCita}</td>
                        </tr>                        
                        )}
                        </tbody>
                      </Table>   

                      <Col xs="8">
                          <h3 className="text-center-mb-0">Informacion de Receta</h3>
                      </Col>       

                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ID Receta</th>
                            <th scope="col">Medicamentos</th>
                            <th scope="col">Diagnostico</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaHistorial.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idReceta}</th>
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
