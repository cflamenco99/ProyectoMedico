import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";
export default class ListadoPacientes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {listaPacientes: []};

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount(){
    this.ObtenerPacientes(); 
  }

  ObtenerPacientes(){
    axios.get(`https://localhost:44310/api/Pacientes`)
      .then(res => {
        const listaPacientes = res.data;
        this.setState({ listaPacientes: listaPacientes });
      })
  }

  handleClickDelete(id){
    swal({
      title: "¿Esta seguro que desea eliminar?",
      text: `El paciente con ID: ${id} sera eliminado permanentemente.`,
      icon: "warning",
      buttons: ["Cancelar", "Si"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://localhost:44310/api/Pacientes/${id}`)
          .then(res => {
            this.ObtenerPacientes();
            swal("¡El paciente ha sido eliminado!", {
              icon: "success",
            });
          })        
      }
    });
  }

  render() {
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
                  <Link to="/admin/agregarPacientes" className="btn btn-sm btn-primary">Nuevo paciente</Link>
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
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaPacientes.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idPaciente}</th>
                        <td>{currentValue.nombres + ' ' +currentValue.apellidos}</td>
                        <td>{currentValue.pais}</td>
                        <td>{currentValue.ciudad}</td>
                        <td>{currentValue.codigoPostal}</td>
                        <td>
                          <Button className="btn btn-sm btn-danger" onClick={() => this.handleClickDelete(currentValue.idPaciente)}>Eliminar</Button>
                          <Link to={`/admin/editarPacientes/${currentValue.idPaciente}`} className="btn btn-sm btn-info">Editar</Link>   
                        </td>
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
    )
  }
}
