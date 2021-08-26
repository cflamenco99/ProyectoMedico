import React from 'react';
import { useFormik } from 'formik';
import ls from 'local-storage';
import { useHistory } from "react-router-dom";

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
    let history = useHistory();

    function abrirListadoPacientes() {
        history.push('/admin/listadoPacientes');
    }

    function guardarPaciente(paciente){
      if (
        paciente.id_paciente >= 0 &&
        paciente.primerNombre !== "" &&
        paciente.segundoNombre !== "" &&
        paciente.primerApellido !== "" &&
        paciente.segundoApellido !== "" &&
        paciente.pais !== "" &&
        paciente.ciudad !== "" &&
        paciente.codigoPostal > 0 &&
        paciente.direccion !== ""
      ) {
        let listaGuardar = [];
        let lista = ls.get("misPacientes");
        if (lista && lista.length > 0) listaGuardar = lista;
        listaGuardar = listaGuardar.concat(paciente);
        ls.set("misPacientes", listaGuardar);
        window.alert("Paciente guardado exitosamente");      
      } else {
        window.alert("Favor ingresar correctamente los datos");
      }
    }

    const formik = useFormik({
      initialValues: {
          id_paciente: '',
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          pais:'',
          ciudad:'',
          codigoPostal:'',
          direccion: ''  
      },
      onSubmit: values => {
        guardarPaciente(values);
        formik.resetForm();
      },
    });

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
                              ID Paciente
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="ID Paciente"
                              type="number"
                              id="id_paciente"
                              onChange={formik.handleChange}
                              value={formik.values.id_paciente}
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
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Informacion de contacto
                    </h6>
                    <div className="pl-lg-4">                      
                      <Row>
                      <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Pais
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Pais"
                              type="text"
                              id="pais"
                              onChange={formik.handleChange}
                              value={formik.values.pais}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Ciudad
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Ciudad"
                              type="text"
                              id="ciudad"
                              onChange={formik.handleChange}
                              value={formik.values.ciudad}
                            />
                          </FormGroup>
                        </Col>                        
                        <Col lg="4">
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
  