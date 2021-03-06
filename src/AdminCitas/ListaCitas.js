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

const ListaCitas = () => {
  let listaCitas = obtenerCitas();
  let history = useHistory();

  function AgregarCitas() {
    history.push("/admin/agregarCitas");
  }  

  function obtenerCitas(){
    let lista = ls.get('misCitas');
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
                    <h3 className="mb-0">Citas Medicas</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={AgregarCitas}
                      size="sm"
                    >
                      Nueva Cita
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
                            <th scope="col">Edad</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Fecha cita</th>
                            <th scope="col">Hora cita</th>
                            <th scope="col">Correo</th>
                          </tr>
                        </thead>
                        <tbody>
                        {listaCitas.map( (currentValue) => 
                        <tr>
                        <th scope="row">{currentValue.id}</th>
                        <td>{currentValue.primerNombre + ' ' +currentValue.segundoNombre+' '+currentValue.primerApellido+' '+currentValue.segundoApellido}</td>
                        <td>{currentValue.edad}</td>
                        <td>{currentValue.telefono}</td>
                        <td>{currentValue.fechaCita}</td>
                        <td>{currentValue.hora}</td>
                        <td>{currentValue.correo}</td>
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

export default ListaCitas;