import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory} from "react-router-dom";
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
    Label,
  } from "reactstrap";


import UserHeader from "components/Headers/UserHeader.js";
import { option } from 'commander';

const AgregarCitas = () => {
    const [listaPacientes, setListaPacientes] = useState([]);
    const [lista, setLista] = useState([]);
    
     

    useEffect(() => {
        axios.get(`https://localhost:44310/api/Pacientes`)
        .then(res => {
          const listaPacientes = res.data;    
          setListaPacientes(listaPacientes); 
          console.log(listaPacientes);      
        })
      }, []);

      
      const handleChange = (paciente) => {
        formik.setFieldValue('paciente', paciente)
        formik.setFieldValue('idPaciente', paciente.idPaciente)
        formik.setFieldValue('primerNombre', paciente.nombres.split(' ')[0])
        formik.setFieldValue('segundoNombre', paciente.nombres.split(' ')[1])
        formik.setFieldValue('primerApellido', paciente.apellidos.split(' ')[0])
        formik.setFieldValue('segundoApellido', paciente.apellidos.split(' ')[1])
        formik.setFieldValue('direccion', paciente.direccion)
        formik.setFieldValue('fechaNacimiento', paciente.fechaNacimiento.substr(0,10))
         ObtenerPaciente(paciente.idPaciente)
      
      } 

      /* const handleChangeLista = (nombre) => {
        formik.setFieldValue('primerNombre', nombre)
      
      } */

      function ObtenerPaciente(idPaciente){
        axios.get(`https://localhost:44310/api/Pacientes/${idPaciente}`)
        .then(res => {
          const listaP = res.data;
          setLista(listaP);
          console.log(listaP);
          
        })      
      }

      let history = useHistory();

    function abrirListaCitas() {
        history.push('/admin/ListaCitas');
    }

    const formik = useFormik({
        initialValues: {
            paciente: '',
            idPaciente: '',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            direccion: '',
            fechaCita: "",
            fechaNacimiento: new Date(), 
            
         
        },
        onSubmit: values => {
            guardarCita(values);
            console.log(values);
        },
    });

    function guardarCita(cita) {
        if (
            cita.idPaciente >=0 &&
            cita.primerNombre !== "" &&
            cita.segundoNombre !== "" &&
            cita.primerApellido !== "" &&
            cita.segundoApellido !== "" &&
            cita.direccion !== "" &&
            cita.fechaCita !== "" &&
            cita.fechaNacimiento !== undefined 
            
           
        ) {
            const citasDTO = {
                idPaciente : cita.idPaciente,   
                fechaCita : cita.fechaCita
            }
            axios.post(`https://localhost:44310/api/Citas`, citasDTO)
            .then(res => {
              console.log(res);
              swal({
                text: "¡Cita agregada exitosamente!",
                icon: "success",
                buttons: false,
                timer: 2500
              });
              formik.resetForm();            
            });
           
        } else {
            swal({
                text: "¡Favor ingresar correctamente los datos!",
                className: "text-center",
                icon: "error",
                buttons: false,
                timer: 2000
            });
            
        }
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
                                    <h3 className="mb-0">Nueva Cita</h3>
                                </Col>
                                <Col className="text-right" xs="4">
                                    <Button
                                        color="primary"
                                        onClick={abrirListaCitas}
                                        size="sm"
                                    >
                                        Listas de Citas
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={formik.handleSubmit}>
                                <h6 className="heading-small text-muted mb-4">
                                    Informacion General
                                </h6>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="4">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    ID Paciente
                                                </label>
                                                <Select 
                                                    options={listaPacientes} 
                                                    className="form-control-alternative" 
                                                    id="idPaciente"
                                                    onChange={handleChange}
                                                    value={formik.values.paciente}
                                                    getOptionLabel={(option) =>option.idPaciente+' - '+option.nombres.split(' ')[0]+' '+option.apellidos.split(' ')[0]}
                                                    getOptionValue={(option) => option.idPaciente}
                                                    placeholder="Seleccione un Id"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    Primer nombre
                                                </label>                                          
                                                    <Input  readOnly={true} 
                                                    className="form-control"
                                                    placeholder="Primer nombre"
                                                    type="text"
                                                    id="primerNombre"
                                                    onChange={formik.handleChange}
                                                    value= {formik.values.primerNombre}                                                  
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
                                                <Input readOnly={true} 
                                                    className="form-control-alternative"
                                                    placeholder="Segundo nombre"
                                                    type="text"
                                                    id="segundoNombre"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.segundoNombre}
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
                                                <Input readOnly={true} 
                                                    className="form-control-alternative"
                                                    placeholder="Primer apellido"
                                                    type="text"
                                                    id="primerApellido"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.primerApellido}
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
                                                <Input readOnly={true} 
                                                    className="form-control-alternative"
                                                    placeholder="Segundo apellido"
                                                    type="text"
                                                    id="segundoApellido"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.segundoApellido}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <h6 className="heading-small text-muted mb-4">
                                    Informacion de contacto
                                </h6>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="9">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    Direccion
                                                </label>
                                                <Input readOnly={true} 
                                                    className="form-control-alternative"
                                                    placeholder="Direccion"
                                                    type="text"
                                                    id="direccion"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.direccion}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="4">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    Fecha de Nacimiento
                                                </label>
                                                <Input readOnly={true} 
                                                    className="form-control-alternative"
                                                    placeholder="Fecha Nacimiento"
                                                    type="date"
                                                    id="fechaNaciminto"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.fechaNacimiento}
                                                />
                                            </FormGroup>
                                        </Col>
                                    {/* </Row>
                                    <Row> */}
                                        <Col md="4">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    Fecha de Cita
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Fecha de Cita"
                                                    type="date"
                                                    id="fechaCita"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.fechaCita}
                                                />
                                            </FormGroup>
                                        </Col>
                                        {/* <Col md="4">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                >
                                                    Hora
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Hora"
                                                    type="time"
                                                    id="hora"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.hora}
                                                />
                                            </FormGroup>
                                        </Col> */}
                                    </Row>
                                    <Row>
                                        <Button type="submit" className="col-md-2 offset-md-5" color="primary">
                                            Guardar
                                        </Button>
                                    </Row>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
)
}

export default AgregarCitas;