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
  import { useFormik } from 'formik';
  import UserHeader from "components/Headers/UserHeader.js";
  
 

  const HistorialMedico = () => { 
   // let paciente = props.location.state; 
   // if (!paciente)
   //   props.history.goBack();

     // function verHistorial(paciente) {
     //   if (paciente.id_paciente >= 0 && paciente.nombre !== '' && paciente.apellido !== '' && paciente.edad > 0 && paciente.ciudad !== '' 
     //         && paciente.pais !== '' && paciente.direccion !== '' && paciente.doctor !== '') {
     //   let paciente = ls.get('mihistorial');
     //     let indice = paciente.findIndex(book => book.id_paciente === paciente.id_paciente );
     //     paciente[indice] = paciente;
     //     ls.set("mihistorial", paciente);
     //    props.history.goBack(); //Regresa al main
    //    }
     //   else{
     //     window.alert("Favor ingresar los datos")
     //   }
     // }  

     //const formik = useFormik({
    //initialValues: {
      //  id_paciente: paciente.id_paciente,
      //  nombre: paciente.nombre,
      //  apellido: paciente.apellido,
      //  edad: paciente.edad,
      //  ciudad: paciente.ciudad,
      //  pais: paciente.pais,
      //  direccion: paciente.direccion,
      //  doctor: paciente.doctor,
      //  dictamen: paciente.dictamen
    //},
    
    //onSubmit: values => {
       // console.log("Llamando");
        //console.log(values);
       // verHistorial(values)
     //},
  // });




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
                      <h3 className="mb-0">Ingrese # ID: </h3>
                      <Input
                              className="form-control-alternative"
                              placeholder="Ingrese su ID AQUI para su búsqueda"
                              type="text"
                        />
                    
                    </Col>
                      <Col className="text-right" xs="4">  
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Buscar Historial
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
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
                              Primer nombre
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Primer nombre"
                              type="text"
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      DATOS DEL HISTORIAL MEDICO
                    </h6>
                    <div className="pl-lg-4">                      
                      <Row>
                      <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Doctor Encargado
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Doctor"
                              type="text"
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
                              Datos del Historial Medico
                            </label>
                            <Input
                              //className="form-control-alternative"
                              placeholder="Datos del Historial"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
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
  
  export default HistorialMedico;