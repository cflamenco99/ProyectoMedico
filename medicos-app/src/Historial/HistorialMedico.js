import React from 'react';
import { useFormik } from 'formik';
import ls from 'local-storage';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import AgregarPacientes from 'Pacientes/AgregarPacientes';
import AgregarCitas from 'AdminCitas/AgregarCitas';


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
  let historialMedico = obtenerHistorial();
  let history = useHistory();

 // function buscarPaciente() {
 //   if (
 //     HistorialMedico.id == AgregarPacientes.id_paciente
 //   );
 //   else
 //   swal({
 //     text: "¡Paciente NO registrado!",
 //     className: "text-center",
  //    icon: "error",
  //    buttons: false,
  //    timer: 2000
  //  });
  //}  

  function LimpiarBoton(){
    //id="";
 }

  
  function obtenerHistorial(){
    
    let lista = ls.get('historial');
    if (lista && lista.length > 0) {
        return lista;
    }
    return lista = [];
  }

  const formik = useFormik({
    initialValues: {
        primerNombre: AgregarPacientes.primerNombre,
        segundoNombre: AgregarPacientes.segundoNombre,
        primerApellido: AgregarPacientes.primerApellido,
        segundoApellido: AgregarPacientes.segundoApellido,
        pais:AgregarPacientes.pais,
        ciudad: AgregarPacientes.ciudad,
        codigoPostal: AgregarPacientes.codigoPostal,
        direccion: AgregarPacientes.direccion 
    },
    onSubmit: values => {
      //obtenerHistorial(values);
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
                    <h3 className="mb-0">Historial del Paciente</h3>
                  </Col>
                  <Col xs="5">
                            <label
                              className="form-control-label"
                            >
                              Ingrese ID: 
                            </label>
                            <Input  
                              className="form-control-label"
                              placeholder="ID Paciente"
                              type="number"
                              id="id_paciente"
                              
                              />
                  </Col>  

                    <Col className="text-right" xs="2">
                    <Button
                      color="primary"
                      //onClick={buscarPaciente}
                      size="sm"
                    >
                      Buscar Historial
                    </Button>
                  </Col>

                  <Col className="text-right" xs="0">
                    <Button
                      color="primary"
                    // onClick={LimpiarBoton}
                      size="sm"
                    >
                      Limpiar Historial
                    </Button>
                  </Col>

                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <Table 
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Fecha Cita</th>
                            <th scope="col">Doctor en Turno</th>
                            <th scope="col">Descripcion de Consulta</th>
                          </tr>
                        </thead>
                        <tbody>
                        {historialMedico.map( (currentValue) => 
                        <tr>
                        <th scope="row">{currentValue.id_paciente}</th>
                        <td>{currentValue.primerNombre + ' ' +currentValue.primerApellido}</td>
                        <td>{currentValue.pais}</td>
                        <td>{currentValue.ciudad}</td>
                        <td>{currentValue.codigoPostal}</td>
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
  );
};

export default HistorialMedico;
