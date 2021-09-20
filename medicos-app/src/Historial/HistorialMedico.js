import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";

const HistorialMedico = () => {

  let history = useHistory();
  let { id } = useParams();

 const formik = useFormik({
  initialValues: {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',          
      ciudad:{},
      idcita:'',
      fechacita: "",
      idrecetas: '',
      medicinas: '',
      diagnostico: ''
      
  },
  onSubmit: values => {
    HistorialMedico(values);        
  },
 });

useEffect(() => {
axios.get(`https://localhost:44310/api/Historial/${id}`)
.then(res => {
  const infoHistorial = res.data;
  formik.setFieldValue('primerNombre',infoHistorial.nombres.split(' ')[0]);
  formik.setFieldValue('segundoNombre',infoHistorial.nombres.split(' ')[1]);
  formik.setFieldValue('primerApellido',infoHistorial.apellidos.split(' ')[0]);
  formik.setFieldValue('segundoApellido',infoHistorial.apellidos.split(' ')[1]);
  formik.setFieldValue('idcita',infoHistorial.idcita);
  formik.setFieldValue('fechacita',infoHistorial.fechacita).substr(0,10);
  formik.setFieldValue('idrecetas', infoHistorial.idrecetas);
  formik.setFieldValue('medicinas', infoHistorial.medicinas);
  formik.setFieldValue('diagnostico', infoHistorial.diagnostico);
  formik.setFieldValue('ciudad',infoHistorial.ciudad);
   });
   }, []);

   function buscarHistorial(historial){
    if (
      historial.primerNombre !== "" &&
      historial.segundoNombre !== "" &&
      historial.primerApellido !== "" &&
      historial.segundoApellido !== "" &&
      historial.ciudad !== undefined &&
      historial.idcita !== "" &&
      historial.fechacita !== undefined &&
      historial.idrecetas !== "" &&
      historial.medicinas !== "" &&
      historial.diagnostico !== ""
      
    ) {
      const historialDTO = { 
        Nombres: historial.primerNombre + ' ' + historial.segundoNombre,
        Apellidos: historial.primerApellido + ' ' + historial.segundoApellido,
        IdCiudad: historial.ciudad.idCiudad,
        IdCita: historial.idcita,
        FechaCita: historial.fechacita,
        IdRecetas: historial.idrecetas,
        Medicinas: historial.medicinas,
        Diagnostico: historial.diagnostico
      };

   
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
                  <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={buscarHistorial}
                                            size="sm"
                                        >
                                            Buscar Historial
                                        </Button>
                  </Col>                    
                </Row>
              </CardHeader>

              <CardBody>
              <Col xs="5">
                            <label className="form-control-label"> Paciente: </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Primer nombre"
                              type="text"
                              id="primerNombre"
                              onChange={formik.handleChange}
                              value={formik.values.primerNombre + formik.values.segundoApellido}
                            /></Col>  
              <Col xs="1">
                            <label className="form-control-label"> Ciudad: </label>
                            <label className="form-control-label" placeholder="San Pedro Sula" type="text" id="ciudad"/>
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
                        {this.state.historialDTO.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idPaciente}</th>
                        <td>{currentValue.nombres + ' ' +currentValue.apellidos}</td>
                        <td>{currentValue.ciudad}</td>
                        <td>{currentValue.idcita}</td>
                        <td>{currentValue.fechacita}</td>
                        <td>{currentValue.idrecetas}</td>
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
};
export default HistorialMedico;