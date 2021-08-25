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
  
  const Pacientes = () => {
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
                      <h3 className="mb-0">Nuevo paciente</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Listado de pacientes
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
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Pacientes;
  