import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
=======
>>>>>>> Stashed changes

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
export default class ListadoRecetas extends React.Component{
<<<<<<< Updated upstream
  constructor(props) {
    super(props);
    this.state = {listaRecetas: []};

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount(){
    this.obtenerRecetas(); 
  }

  obtenerRecetas(){
=======
  state = {
    listaRecetas: []
  }
  componentDidMount() {
>>>>>>> Stashed changes
    axios.get(`https://localhost:44310/api/Recetas`)
      .then(res => {
        const listaRecetas = res.data;
        this.setState({ listaRecetas: listaRecetas });
      })
<<<<<<< Updated upstream
  }

  handleClickDelete(id){
    swal({
      title: "¿Esta seguro que desea eliminar?",
      text: `La receta con ID: ${id} sera eliminado permanentemente.`,
      icon: "warning",
      buttons: ["Cancelar", "Si"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://localhost:44310/api/Receta/${id}`)
          .then(res => {
            this.obtenerRecetas();
            swal("La receta ha sido eliminado!", {
              icon: "success",
            });
          })        
      }
    });
  }


  render(){
    return (
      <>
=======
  }

render(){
  return (
    <>
        
>>>>>>> Stashed changes
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Listado Recetas</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Link to="/admin/agregarReceta" className="btn btn-sm btn-primary">Nueva Receta</Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
<<<<<<< Updated upstream
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
                              <th scope="col">Fecha</th>
                              <th scope="col">Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                        {this.state.listaRecetas.map( (currentValue, i) => 
                        <tr key={i}>
                         <th scope="row">{currentValue.idReceta}</th>
                          <td>{currentValue.primerNombre + ' ' +currentValue.segundoNombre+' '+currentValue.primerApellido+' '+currentValue.segundoApellido}</td>
                          <td>{currentValue.edad}</td>
                          <td>{currentValue.diagnostico}</td>
                          <td>{currentValue.fechaCita}</td>
                          <td>{currentValue.hora}</td>
                          <td>
                          <Button className="btn btn-sm btn-danger" onClick={() => this.handleClickDelete(currentValue.idReceta)}>Eliminar</Button>
                          <Link to={`/admin/editarRecetas/${currentValue.idRecetas}`} className="btn btn-sm btn-info">Editar</Link>   
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
=======
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
                            <th scope="col">Diagnostico</th>
                            <th scope="col">Fecha</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.listaRecetas.map( (currentValue, i) => 
                        <tr key={i}>
                        <th scope="row">{currentValue.idRecetas}</th>
                        <td>{currentValue.nombres + ' ' +currentValue.apellidos}</td>
                        <td>{currentValue.diagnostico}</td>
                        <td>{currentValue.fechaCita}</td>
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
}


export default ListadoRecetas;
>>>>>>> Stashed changes
