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

import { useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import ls from 'local-storage';

const Login = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      correo: "",
      clave: "",
    },
    onSubmit: (values) => {
      iniciarSesion(values);
    },
  });

  function redireccionarIndex() {
    ls.set("login", 1);    
    history.push("/admin/index");
  }

  function iniciarSesion(credenciales) {
    if (credenciales.correo !== "" && credenciales.clave !== "") {
      const credencialesDTO = {
        Correo: credenciales.correo,
        Clave: credenciales.clave,
      };
      axios
        .post(`http://mindsetgx2020-001-site3.atempurl.com/api/Usuarios`, credencialesDTO)
        .then((res) => {
          redireccionarIndex();
        }).
        catch(err => {
          swal({
            text: "¡No hemos encontrado tu usuario!",
            className: "text-center",
            icon: "error",
            buttons: false,
            timer: 3500,
          });
        });
    } else {
      swal({
        text: "¡No puedes dejar campos vacios!",
        className: "text-center",
        icon: "error",
        buttons: false,
        timer: 2000,
      });
    }
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Ingresa tus credenciales</small>
            </div>
            <Form onSubmit={formik.handleSubmit}>
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
                    id="correo"
                    onChange={formik.handleChange}
                    value={formik.values.correo}
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
                    id="clave"
                    onChange={formik.handleChange}
                    value={formik.values.clave}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
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
