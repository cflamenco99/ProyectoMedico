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
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";

  import UserHeader from "components/Headers/UserHeader.js";
  
  
  const AgregarPacientes = () => {
    const [listaPaises, setListaPaises] = useState(0);
    const [listaCiudades, setListaCiudades] = useState(1);
    
    useEffect(() => {
      axios.get(`http://mindsetgx2020-001-site3.atempurl.com/api/PaisesCiudades`)
      .then(res => {
        const listaPaises = res.data;
        setListaPaises(listaPaises);        
      })
    }, []);

    const handleChange = (pais) => {
      formik.setFieldValue('pais',pais)
      ObtenerCiudades(pais.idPais)
    }  

    const handleChangeCiudades = (ciudad) => {
      formik.setFieldValue('ciudad',ciudad)
    }

    function ObtenerCiudades(idPais){
      axios.get(`http://mindsetgx2020-001-site3.atempurl.com/api/PaisesCiudades/${idPais}`)
      .then(res => {
        const listaCiudades = res.data;
        setListaCiudades(listaCiudades);
      })      
    }

    let history = useHistory();

    function abrirListadoPacientes() {
        history.push('/admin/listadoPacientes');
    }

    const formik = useFormik({
      initialValues: {
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',          
          pais:[],
          ciudad:[],
          codigoPostal:'',
          direccion: '',
          fechaNacimiento: new Date()
      },
      onSubmit: values => {
        guardarPaciente(values);        
      },
    });

    function guardarPaciente(paciente){
      if (
        paciente.primerNombre !== "" &&
        paciente.segundoNombre !== "" &&
        paciente.primerApellido !== "" &&
        paciente.segundoApellido !== "" &&
        paciente.pais !== undefined &&
        paciente.ciudad !== undefined &&
        paciente.codigoPostal > 0 &&
        paciente.direccion !== "" &&
        paciente.fechaNacimiento !== undefined
      ) {
        const pacienteDTO = { 
          Nombres: paciente.primerNombre + ' ' + paciente.segundoNombre,
          Apellidos: paciente.primerApellido + ' ' + paciente.segundoApellido,
          IdCiudad: paciente.ciudad.idCiudad,
          CodigoPostal: paciente.codigoPostal,
          Direccion: paciente.direccion,
          FechaNacimiento: paciente.fechaNacimiento
        };
        axios.post(`http://mindsetgx2020-001-site3.atempurl.com/api/Pacientes`, pacienteDTO)
          .then(res => {
            console.log(res);
            swal({
              text: "¡Paciente guardado exitosamente!",
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
                      <h3 className="mb-0">Nuevo paciente</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={abrirListadoPacientes}
                        size="sm"
                      >
                        Listado de pacientes
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
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Informacion de contacto
                    </h6>
                    <div className="pl-lg-4">                      
                      <Row>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Pais
                            </label>
                            <Select 
                            options={listaPaises} 
                            className="form-control-alternative" 
                            id="pais"
                            onChange={handleChange}
                            value={formik.values.pais}
                            getOptionLabel={(option) => option.descripcion}
                            getOptionValue={(option) => option.idPais}
                            placeholder="Seleccione un pais"/>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Ciudad
                            </label>
                            <Select 
                            options={listaCiudades} 
                            className="form-control-alternative" 
                            id="pais"
                            onChange={handleChangeCiudades}
                            value={formik.values.ciudad}
                            getOptionLabel={(option) => option.descripcion}
                            getOptionValue={(option) => option.idCiudad}
                            placeholder="Seleccione una ciudad"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Codigo postal
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Codigo postal"
                              type="number"
                              id="codigoPostal"
                              onChange={formik.handleChange}
                              value={formik.values.codigoPostal}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Fecha Nacimiento
                            </label>
                            <Input
                            className="form-control-alternative"
                            placeholder="Fecha Nacimiento"
                            type="date"
                            id="fechaNacimiento"
                            onChange={formik.handleChange}
                            value={formik.values.fechaNacimiento}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
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
  
  export default AgregarPacientes;
  