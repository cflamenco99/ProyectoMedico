import React, { useEffect } from 'react';
import ls from 'local-storage';
import { useHistory } from "react-router-dom";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";

const ListadoPacientes = () => {
  let listaPacientes = obtenerPacientes();
  let history = useHistory();

  function abrirAgregarPaciente() {
    history.push("/admin/agregarPacientes");
  }  

  function obtenerPacientes(){
    let lista = ls.get('misPacientes');
    if (lista && lista.length > 0) {
        return lista;
    }
    return lista = [];
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
                    <h3 className="mb-0">Listado de pacientes</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={abrirAgregarPaciente}
                      size="sm"
                    >
                      Nuevo paciente
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
                            <th scope="col">Codigo Postal</th>
                          </tr>
                        </thead>
                        <tbody>
                        {listaPacientes.map( (currentValue) => 
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

export default ListadoPacientes;
