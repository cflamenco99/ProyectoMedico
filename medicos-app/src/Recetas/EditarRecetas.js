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

const EditarRecetas = () => {
    const [ListadoRecetas, setListadoRecetas] = useState([]);
    const [lista, setLista] = useState([]);
   

    let history = useHistory();
    let { id } = useParams();

    const formik = useFormik({
        initialValues: {
            paciente: '',
            idPaciente: '',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            direccion: '',
            medicinas:'',
            diagnostico:'',
            fechaNacimiento: '', 
            
         
        },
        onSubmit: values => {
            editarRecetas(values);
            console.log(values);
        },
    });

    useEffect(() => {
        axios.get(`https://localhost:44310/api/Recetas/${id}`)
        .then(res => {
          const InfoRecetas = res.data; 
          formik.setFieldValue('idPaciente', InfoRecetas.idPaciente)
          formik.setFieldValue('primerNombre', InfoRecetas.nombres.split(' ')[0]);
          formik.setFieldValue('segundoNombre', InfoRecetas.nombres.split(' ')[1]);
          formik.setFieldValue('primerApellido', InfoRecetas.apellidos.split(' ')[0]);
          formik.setFieldValue('segundoApellido', InfoRecetas.apellidos.split(' ')[1]);
          formik.setFieldValue('direccion', InfoRecetas.direccion);
          formik.setFieldValue('medicinas', InfoRecetas.medicinas);
          formik.setFieldValue('diagnostico', InfoRecetas.diagnostico);
          formik.setFieldValue('fechaNacimiento', InfoRecetas.fechaNacimiento.substr(0,10));  

          setLista(InfoRecetas); 
          console.log(InfoRecetas);      
        });
        axios.get(`https://localhost:44310/api/Recetas/`)
        .then(res => {
          const listaPa = res.data;
          setListadoRecetas(listaPa);
          console.log(listaPa);
        }) 

      }, []);

      function ObtenerRecetas(idReceta){
        axios.get(`https://localhost:44310/api/Paciente/${idReceta}`)
        .then(res => {
          const listaPa = res.data;
          setLista(listaPa);
          console.log(listaPa);
        })      
      }


    function abrirListadoRecetas() {
        history.push('/admin/ListadoRecetas');
    }

    function editarRecetas(receta) {
        if (
            receta.idPaciente >=0 &&
            receta.primerNombre !== "" &&
            receta.segundoNombre !== "" &&
            receta.primerApellido !== "" &&
            receta.segundoApellido !== "" &&
            receta.direccion !== "" &&
            receta.medicinas !== "" &&
            receta.diagnostico !== "" &&
            receta.fechaNacimiento !== undefined 
           
        ) {
            const recetasDTO = {

                medicinas : receta.medicinas,
                diagnostico : receta.diagnostico
            }
            axios.put(`https://localhost:44310/api/Recetas/${id}`, recetasDTO)
            .then(res => {
              swal({
                text: "¡Receta editada exitosamente!",
                icon: "success",
                buttons: false,
                timer: 2500
              }).then(() => {
                abrirListadoRecetas();
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
                                        <h1 className="mb-0">CLINICA CHAB </h1>
                  <h3> Direccion: Colonia Trejo 21 y 22 avenida SO 9 calle</h3>
                  <h3>Telefono: 2982-9800</h3>
                  <br></br>
                  <h1> DR. CARLOS FLAMENCO </h1>
                  <h2>Medico Especialista</h2>
                  <h2>MN.0000000</h2>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={abrirListadoRecetas}
                                            size="sm"
                                        >
                                            Ultimas Recetas Creadas
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
                                                <Input  readOnly = {true} 
                                                    className="form-control"
                                                    placeholder="ID Paciente"
                                                    type="text"
                                                    id="idPaciente"
                                                    onChange={formik.handleChange}
                                                    value= {formik.values.idPaciente}                                                  
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
                                                    Primer nombre
                                                    </label>                                          
                                                    <Input  readOnly = {true} 
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
                                                <Input readOnly = {true}
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
                                        </Row>
    
                                        <hr className="my-4" />
                                        <Row>
                                        <Col lg="11">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Medicinas 
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Medicinas"
                                                        type="text"
                                                        id="medicinas"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.medicinas}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="11">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Diagnostico
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Diagnostico"
                                                        type="text"
                                                        id="diagnostico"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.diagnostico}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr className="my-4" />
                                        <Row>
                                            <Col md="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Fecha Nacimiento
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
export default EditarRecetas;