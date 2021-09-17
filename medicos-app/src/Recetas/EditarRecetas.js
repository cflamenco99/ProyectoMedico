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
  } from "reactstrap";

  import UserHeader from "components/Headers/UserHeader.js";
  
  
  const EditarRecetas = () => {
    const [listaPaises, setListaPaises] = useState(0);
    const [listaCiudades, setListaCiudades] = useState(1);

    let history = useHistory();
    let { id } = useParams();

    const formik = useFormik({
        initialValues: {
            id: '',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            edad: '',
            direccion: '',
            telefono: '',
            correo: '',
            medicinas:'',
            diagnostico:'',
            fechaCita: '',
            hora: ''
        },
        onSubmit: values => {
          EditarRecetas(values);        
        },
    });
    
    useEffect(() => {
      axios.get(`https://localhost:44310/api/Recetas/${id}`)
      .then(res => {
        const infoReceta = res.data;
        formik.setFieldValue('primerNombre',infoReceta.nombres.split(' ')[0]);
        formik.setFieldValue('segundoNombre',infoReceta.nombres.split(' ')[1]);
        formik.setFieldValue('primerApellido',infoReceta.apellidos.split(' ')[0]);
        formik.setFieldValue('segundoApellido',infoReceta.apellidos.split(' ')[1]);
        formik.setFieldValue('edad',infoReceta.edad);
        formik.setFieldValue('direccion',infoReceta.direccion);
        formik.setFieldValue('telefono',infoReceta.telefono);
        formik.setFieldValue('correo',infoReceta.correo);
        formik.setFieldValue('medicinas',infoReceta.medicinas);
        formik.setFieldValue('diagnostico',infoReceta.diagnostico);
      });

      axios.get(`https://localhost:44310/api/PaisesCiudades`)
      .then(res => {
        const listaPaises = res.data;
        setListaPaises(listaPaises);        
      });
    }, []);

    const handleChange = (pais) => {
      formik.setFieldValue('pais',pais)
      ObtenerCiudades(pais.idPais)
    }  

    const handleChangeCiudades = (ciudad) => {
      formik.setFieldValue('ciudad',ciudad)
    }

    function ObtenerCiudades(idPais){
      axios.get(`https://localhost:44310/api/PaisesCiudades/${idPais}`)
      .then(res => {
        const listaCiudades = res.data;
        setListaCiudades(listaCiudades);
      })      
    }    

    function abrirListadoRecetas() {
        history.push('/admin/listadoRecetas');
    }    

    function abrirListadoRecetas(receta){
      if (
        receta.primerNombre !== "" &&
            receta.segundoNombre !== "" &&
            receta.primerApellido !== "" &&
            receta.segundoApellido !== "" &&
            receta.edad > 0 &&
            receta.direccion !== "" &&
            receta.telefono > 0 &&
            receta.correo !== "" &&
            receta.medicinas !== ""&&
            receta.diagnostico !== ""&&
            receta.fechaCita !== "" 
      ) {
        const recetaDTO = { 
            Nombres: receta.primerNombre + ' ' + receta.segundoNombre,
            Apellidos:receta.primerApellido + ' ' + receta.segundoApellido,
            Edad: receta.edad,
            Direccion: receta.direccion,
            Telefono: receta.telefono,
            Correo: receta.correo,
            Medicinas: receta.medicinas,
            Diagnostico: receta.diagnostico,
            Fecha: receta.fechaCita
        };
        axios.put(`https://localhost:44310/api/Recetas/${id}`, recetaDTO)
          .then(res => {
            swal({
              text: "¡La Receta ha editado exitosamente!",
              icon: "success"
            }).then(() => {
                abrirListadoPacientes();
              });                                   
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
                      <h3 className="mb-0">Editando Receta</h3>
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
                                                        ID Persona
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="ID Persona"
                                                        type="number"
                                                        id="id"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.id}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Edad
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Edad"
                                                        type="number"
                                                        id="edad"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.edad}
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
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Primer nombre"
                                                        type="text"
                                                        id="primerNombre"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.primerNombre}
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
                                                    <Input
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
                                                    <Input
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
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Telefono
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Telefono"
                                                        type="tel"
                                                        id="telefono"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.telefono}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="5">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"

                                                    >
                                                        Correo Electronico
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Correo Electronico"
                                                        type="email"
                                                        id="correo"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.correo}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="11">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Direccion
                                                    </label>
                                                    <Input
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
                                                        Fecha
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
                                            <Col md="4">
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
                                            </Col>
                                            <h5>Sello</h5>
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
    );
};
  


  
  export default EditarRecetas;
