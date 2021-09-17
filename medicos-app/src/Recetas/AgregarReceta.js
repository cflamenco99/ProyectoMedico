import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import Select from 'react-select'
<<<<<<< Updated upstream
=======
import DatePicker from "react-datepicker";
>>>>>>> Stashed changes
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


const AgregarReceta = () => {
<<<<<<< Updated upstream
    const [Pacientes, setPacientes] = useState(0);

    
    useEffect(() => {
      axios.get(`https://localhost:44310/api/Pacientes`)
      .then(res => {
        const Pacientes = res.data;
        setPacientes(Pacientes);        
      })
    }, []);

    const handleChange = (paciente) => {
        formik.setFieldValue('primer nombre', primerNombre)
        formik.setFieldValue('segundo nombre', segundoNombre)
        formik.setFieldValue('primer apellido', primerApellido)
        formik.setFieldValue('segundo apellido', segundoApellido)
        formik.setFieldValue('direccion', direccion)
        formik.setFieldValue('fecha nacimiento', fechaNacimiento)
        ObtenerPacientes(paciente.IdPaciente)
    }
    const handleChangePacientes = (pacientes) => {
        formik.setFieldValue('pacientes',pacientes)
      }

    function ObtenerPacientes(IdPaciente) {
        axios.get(`https://localhost:44310/api/Pacientes/${IdPaciente}`)
            .then(res => {
                const ListaPacientes = res.data;
                setPacientes(ListaPacientes);
            })
    }
=======
    const [listaPacientes, setlistaPacientes] = useState(0);
    const [listaCitas, setListaCitas] = useState(1);

    useEffect(() => {
        axios.get(`https://localhost:44310/api/Pacientes`)
        .then(res => {
          const listaPacientes = res.data;
          setlistaPacientes(listaPacientes);        
        })
      }, []);

      const handleChange = (paciente) => {
        formik.setFieldValue('paciente',paciente)
        ObtenerReceta(paciente.idPaciente);
      } 

   const handleChangeReceta = (receta) => {
        formik.setFieldValue('receta',receta)
      }

      function ObtenerReceta(idReceta){
        axios.get(`https://localhost:44310/api/Citas/${idReceta}`)
        .then(res => {
          const listadoRecetas = res.data;
          setListaCitas(listadoRecetas);
        })      
      }
>>>>>>> Stashed changes
    let history = useHistory();

    function abrirListadoRecetas() {
        history.push('/admin/listadoRecetas');
    }


    const formik = useFormik({
        initialValues: {
            primerNombre: [],
           segundoNombre: [],
           primerApellido: [],
           segundoApellido: [], 
            IdPaciente:[],
            medicinas: '',
            diagnostico: '',
            direccion: [],
          fechaNacimiento: new Date()

        },
        onSubmit: values => {
            guardarReceta(values);
            formik.resetForm();
        },
    });

    function guardarReceta(receta) {
        if (
            receta.IdPaciente >= 0 &&
<<<<<<< Updated upstream
            receta.edad > 0 &&
            receta.telefono > 0 &&
            receta.correo !== "" &&
            receta.medicinas !== "" &&
            receta.diagnostico !== "" &&
            receta.fechaNacimiento !== undefined


        ) {
            const recetaDTO = {
                IdPaciente = receta.IdPaciente,
                Medicinas = receta.Medicinas,
                Diagnostico = receta.Diagnostico,
                IdCita = receta.IdCita,
            };

            axios.post(`https://localhost:44310/api/Recetas`, recetaDTO)
                .then(res => {
                    console.log(res);
                    swal({
                        text: "¡Receta guardado exitosamente!",
                        icon: "success",
                        buttons: false,
                        timer: 2500
                    });
                    formik.resetForm();
                });
=======
            receta.medicinas !== ""&&
            receta.diagnostico !== ""&&
            receta.IdCita >= 0 
            
        ) {
            const RecetasDTO= {
                IdPaciente: receta.IdPaciente,
                Medicinas: receta.Medicinas,
                Diagnostico:receta.Diagnostico,
                IdCita: receta.IdCita

            };

            axios.post(`https://localhost:44310/api/Recetas`, RecetasDTO)
            .then(res => {
                console.log(res);
                swal({
                  text: "¡Receta guardado exitosamente!",
                  icon: "success",
                  buttons: false,
                  timer: 2500
                });
                formik.resetForm();            
            });
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    
=======
    const formik = useFormik({
        initialValues: {
            IdPaciente:'',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',          
            pais:[],
            ciudad:[],
            codigoPostal:'',
            direccion: '',
            fechaNacimiento: new Date(),
            Medicinas:'',
            Diagnostico:'',
            IdCita:''

        },
        onSubmit: values => {
            guardarReceta(values);
            formik.resetForm();
        },
    });
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
                                                        ID Paciente
=======
                                                        ID Persona
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="ID Persona"
                                                        type="number"
                                                        id="id"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.IdPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Edad
>>>>>>> Stashed changes
                                                    </label>
                                                    <Select
                                                        options={Pacientes}
                                                        className="form-control-alternative"
                                                        id="IDPaciente"
                                                        onChange={handleChange}
                                                        value={formik.values.IdPaciente}
                                                        getOptionLabel={(option) => option.primerNombre + ' ' + option.primerApellido}
                                                        getOptionValue={(option) => option.IdPaciente}
                                                        placeholder="Seleccione un ID" />
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
                                                        value={formik.values.Medicinas}
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
                                                        value={formik.values.Diagnostico}
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
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Fecha de Cita"
                                                        type="date"
                                                        id="fechaCita"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.fechaNacimiento}
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
    )
}

export default AgregarReceta;