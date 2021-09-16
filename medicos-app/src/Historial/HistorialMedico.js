import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import React, { useState, useEffect } from 'react';
//import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

  componentDidMount() {
    axios.get(`https://localhost:44310/api/HistorialMedico`)
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
                    <h3 className="mb-0">Historial de Pacientes</h3>
                  </Col>
                  <Col xs="5">
                            <label
                              className="form-control-label"> Ingrese su ID: </label>
                            <input className="form-control-label" placeholder="Escriba aqui su ID" type="number" id="id_paciente"
                              />
                  </Col>  
                  <Col className="text-right" xs="3">
                  <Link to="/admin/HistorialMedico" className="btn btn-sm btn-primary">Buscar Historial</Link>
                  </Col>
                  <Col className="text-right" xs="1.5">
                  <Link to="/admin/HistorialMedico" className="btn btn-sm btn-primary">Limpiar Historial</Link>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
              <Col xs="5">
                            <label className="form-control-label"> Paciente: </label>
                            <input className="form-control-label" placeholder="Alvaro Banquito" type="text" id="paciente"/>
              </Col>  
              <Col xs="3">
                            <label className="form-control-label"> Ciudad: </label>
                            <input className="form-control-label" placeholder="San Pedro Sula" type="text" id="ciudad"/>
              </Col>  
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">ID Cita</th>
                            <th scope="col">Fecha Cita</th>
                            <th scope="col">ID Receta</th>
                            <th scope="col">Medicinas</th>
                            <th scope="col">Descripcion</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaPacientes.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idPaciente}</th>
                        <td>{currentValue.nombres + ' ' +currentValue.apellidos}</td>
                        <td>{currentValue.ciudad}</td>
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
