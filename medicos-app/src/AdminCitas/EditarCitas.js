import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";
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

const EditarCitas = (props) => {
    const [ListaCitas, setListaCitas] = useState([]);
    /* const [lista, setLista] = useState([]); */
   

    let history = useHistory();
    let { id } = useParams();


    
    const formik = useFormik({
        initialValues: {
            idPaciente: '',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            direccion: '',
            fechaNacimiento: "", 
            fechaCita: "",

        },
        onSubmit: values => {
            editarCitas(values);
            console.log(values);
        },
    });


    useEffect(() => {
        axios.get(`https://localhost:44310/api/Citas${id}`)
        .then(res => {
          const InfoCitas = res.data; 
          formik.setFieldValue('idCita', InfoCitas.idCita)
          formik.setFieldValue('idPaciente', InfoCitas.idPaciente)
          formik.setFieldValue('primerNombre', InfoCitas.nombres.split(' ')[0]);
          formik.setFieldValue('segundoNombre', InfoCitas.nombres.split(' ')[1]);
          formik.setFieldValue('primerApellido', InfoCitas.apellidos.split(' ')[0]);
          formik.setFieldValue('segundoApellido', InfoCitas.apellidos.split(' ')[1]);
          formik.setFieldValue('direccion', InfoCitas.direccion);
          formik.setFieldValue('fechaNacimiento', InfoCitas.fechaNacimiento.substr(0,10));  
          formik.setFieldValue('fechaCita', InfoCitas.fechaCita.substr(0,10));  
         /*  setListaPacientes(listaPacientes); 
          console.log(listaPacientes);  */     
        });
        axios.get(`https://localhost:44310/api/Citas`)
        .then(res => {
          const listaP = res.data;
          setListaCitas(listaP);
          console.log(listaP);
        }) 

      }, []);

      
      /* const handleChange = (cita) => {
        formik.setFieldValue('idPaciente', cita.idPaciente)
        formik.setFieldValue('primerNombre', cita.nombres.split(' ')[0]);
        formik.setFieldValue('segundoNombre', cita.nombres.split(' ')[1]);
        formik.setFieldValue('primerApellido', cita.apellidos.split(' ')[0]);
        formik.setFieldValue('segundoApellido', cita.apellidos.split(' ')[1]);
        formik.setFieldValue('direccion', cita.direccion);
        formik.setFieldValue('fechaNacimiento', cita.fechaNacimiento.substr(0,10)); 
        ObtenerCitas(cita.idCita);
        console.log(cita);
      
      }  */

      /* const handleChangeLista = (nombre) => {
        formik.setFieldValue('primerNombre', nombre)
      
      } */

    /*   function ObtenerCitas(idPaciente){
        axios.get(`https://localhost:44310/api/Paciente/${idPaciente}`)
        .then(res => {
          const listaP = res.data;
          setLista(listaP);
          console.log(listaP);
        })      
      } */


    function abrirListaCitas() {
        history.push('/admin/ListaCitas');
    }


    function editarCitas(cita) {
        if (
            cita.idPaciente >=0 &&
            cita.primerNombre !== "" &&
            cita.segundoNombre !== "" &&
            cita.primerApellido !== "" &&
            cita.segundoApellido !== "" &&
            cita.direccion !== "" &&
            cita.fechaNacimiento !== undefined &&
            cita.fechaCita !== undefined
           
        ) {
            const citasDTO = {

                fechaCita : cita.fechaCita
            }
            axios.put(`https://localhost:44310/api/Citas/${id}`, citasDTO)
            .then(res => {
              swal({
                text: "¡Cita editada exitosamente!",
                icon: "success",
                buttons: false,
                timer: 2500
              }).then(() => {
                abrirListaCitas();
              });
              /* formik.resetForm();  */           
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
                                    <h3 className="mb-0">Editar Cita</h3>
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
                                                <Input  readOnly = "true" 
                                                    className="form-control"
                                                    placeholder="ID Paciente"
                                                    type="text"
                                                    id="idPaciente"
                                                    onChange={formik.handleChange}
                                                    value= {formik.values.idPaciente}                                                  
                                                /> 
                                               {/*  <Select 
                                                    options={ListaCitas} 
                                                    className="form-control-alternative" 
                                                    id="idPaciente"
                                                    onChange={handleChange}
                                                    value={formik.values.idPaciente}
                                                    getOptionLabel={(option) =>option.nombres.split(' ')[0]+' '+option.apellidos.split(' ')[0]}
                                                    getOptionValue={(option) => option.idPaciente}
                                                    placeholder="Seleccione un Id"/> */}
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
                                                    <Input  readOnly = "true" 
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
                                                <Input readOnly = "true"
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
                                                <Input readOnly = "true"
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
                                                <Input readOnly = "true"
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
                                                <Input readOnly = "true"
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
                                                <Input readOnly = "true"
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

export default EditarCitas;