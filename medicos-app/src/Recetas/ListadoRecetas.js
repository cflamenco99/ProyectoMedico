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

const ListadoRecetas = () => {
  let listaRecetas = obtenerRecetas();
  let history = useHistory();

  function AgregarReceta() {
    history.push("/admin/agregarReceta");
  }  

  function obtenerRecetas(){
    let lista = ls.get('misRecetas');
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
                    <h3 className="mb-0">Recetas Medicas</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={AgregarReceta}
                      size="sm"
                    >
                      Nueva Receta
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
                            <th scope="col">Diagnostico</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                          </tr>
                        </thead>
                        <tbody>
                        {listaRecetas.map( (currentValue) => 
                        <tr>
                        <th scope="row">{currentValue.id}</th>
                        <td>{currentValue.primerNombre + ' ' +currentValue.segundoNombre+' '+currentValue.primerApellido+' '+currentValue.segundoApellido}</td>
                        <td>{currentValue.edad}</td>
                        <td>{currentValue.diagnostico}</td>
                        <td>{currentValue.telefono}</td>
                        <td>{currentValue.fechaCita}</td>
                        <td>{currentValue.hora}</td>
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

export default ListadoRecetas;