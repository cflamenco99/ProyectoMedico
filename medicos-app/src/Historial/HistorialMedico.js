import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

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

export default class ListaHistorial extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Paciente: {nombres: '', apellidos: ''}, 
      listaRecetas: [], 
      listaCitas: [],
      inputValue: ''
    };
    
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(){
    axios.get(`https://localhost:44310/api/Pacientes/${this.state.inputValue}`)
      .then(res => {
        const inforPaciente = res.data;
        console.log(inforPaciente)
        this.setState({ Paciente: inforPaciente });
    });
     
    axios.get(`https://localhost:44310/api/Historial/citas/${this.state.inputValue}`)
    .then(res => {
      const listaCitas = res.data;
      console.log(listaCitas)
      this.setState({ listaCitas: listaCitas });
    });

    axios.get(`https://localhost:44310/api/Historial/recetas/${this.state.inputValue}`)
    .then(res => {
      const listaRecetas = res.data;
      console.log(listaRecetas)
      this.setState({ listaRecetas: listaRecetas });
    });
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

render(){
    return (
      <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-1">
              <h3 className="mb-0">Informacion del Paciente</h3>
                <Row className="align-items-center">
                <div className="col-sm-2">
                  <label className="form-label">Ingrese ID del paciente: </label>                  
                </div>

                  <div className="col-sm-3">
                  <Input type="text" className="form-control" id="Ingrese ID" placeholder="ID" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></Input>
                  </div>

                  <div className="col-sm-3">
                  <Button
                                            color="primary"
                                            onClick={this.handleClick}
                                            className="btn btn-xl btn-primary"
                                        >
                                            Buscar
                                        </Button>
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
                                                        readOnly={true}   
                                                        value={this.state.Paciente.nombres.split(' ')[0]}
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
                                                        readOnly={true}
                                                        value={this.state.Paciente.nombres.split(' ')[1]}
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
                                                        readOnly={true}
                                                        value={this.state.Paciente.apellidos.split(' ')[0]}
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
                                                        readOnly={true}
                                                        value={this.state.Paciente.apellidos.split(' ')[1]}                                                       
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
                        {this.state.listaCitas.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idCita}</th>
                        <td>{currentValue.fechaCita}</td>
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
                        {this.state.listaRecetas.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idRecetas}</th>
                        <td>{currentValue.medicinas}</td>
                        <td>{currentValue.diagnostico}</td>
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
  };
};