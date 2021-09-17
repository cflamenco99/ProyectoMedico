import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

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

export default class ListaCitas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {listaCitas: []};

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount(){
    this.obtenerCitas(); 
  }

 /*  function AgregarCitas() {
    history.push("/admin/agregarCitas");
  }  */ 

   obtenerCitas(){
    axios.get(`https://localhost:44310/api/Citas`)
    .then(res => {
      const listaCitas = res.data;
      this.setState({ listaCitas: listaCitas });
    })
  }

  handleClickDelete(id){
    swal({
      title: "¿Esta seguro que desea eliminar?",
      text: `La cita con ID: ${id} sera eliminada permanentemente.`,
      icon: "warning",
      buttons: ["Cancelar", "Si"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://localhost:44310/api/Citas/${id}`)
          .then(res => {
            this.obtenerCitas();
            swal("¡La cita ha sido eliminada!", {
              icon: "success",
            });
          })        
      }
    });
  }

  render(){
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
                        <Link to="/admin/agregarCitas" className="btn btn-sm btn-primary">Nueva cita</Link>
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
                              <th scope="col">Direccion</th>
                              <th scope="col">Fecha de Cita</th>
                              <th scope="col">Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.listaCitas.map( (currentValue, i) => 
                          <tr key={i}>
                          <th scope="row">{currentValue.id}</th>
                          <td>{currentValue.primerNombre + ' ' +currentValue.segundoNombre+' '+currentValue.primerApellido+' '+currentValue.segundoApellido}</td>
                          <td>{currentValue.direccion}</td>
                          <td>{currentValue.fechaCita}</td>
                          <td>
                          <Button className="btn btn-sm btn-danger" onClick={() => this.handleClickDelete(currentValue.id)}>Eliminar</Button>
                            <Link to={`/admin/editarCita/${currentValue.id}`} className="btn btn-sm btn-info">Editar</Link>  
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
    );
  }

};
