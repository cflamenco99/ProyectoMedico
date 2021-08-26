import React from 'react';
import { useFormik } from 'formik';
import ls from 'local-storage';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

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

const AgregarReceta = () => {
    let history = useHistory();

    function abrirListadoRecetas() {
        history.push('/admin/ListadoRecetas');
    }

    function guardarReceta(receta) {
        if (
            receta.id >= 0 &&
            receta.primerNombre !== "" &&
            receta.segundoNombre !== "" &&
            receta.primerApellido !== "" &&
            receta.segundoApellido !== "" &&
            receta.edad > 0 &&
            receta.direccion !== "" &&
            receta.telefono > 0 &&
            receta.correo !== "" &&
            receta.fechaCita !== "" &
            receta.hora !== ""
        ) {
            let listaGuardar = [];
            let lista = ls.get("misRecetas");
            if (lista && lista.length > 0) listaGuardar = lista;
            listaGuardar = listaGuardar.concat(receta);
            ls.set("misRecetas", listaGuardar);
            swal({
                text: "¡Receta Agregada Exitosamente!",
                icon: "success",
                buttons: false,
                timer: 2000
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
            fechaCita: '',
            hora: '',

        },
        onSubmit: values => {
            guardarReceta(values);
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
                                        <h3 className="mb-0">Nueva Receta</h3>
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
                                            <Col lg="3">
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
                                    </div>
                                    <hr className="my-4" />
                                    <h6 className="heading-small text-muted mb-4">
                                        Informacion de contacto
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
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
                                        </Row>
                                        <Row>
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

export default AgregarReceta;