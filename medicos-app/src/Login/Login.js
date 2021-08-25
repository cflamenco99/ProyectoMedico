import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
  } from "reactstrap";
  
  const Login = () => {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Ingresa tus credenciales</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Correo electronico"
                      type="email"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Contraseña"
                      type="password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Iniciar Sesion
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>          
        </Col>
      </>
    );
  };
  
  export default Login;
  