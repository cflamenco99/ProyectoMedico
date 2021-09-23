import { Link } from "react-router-dom";
import ls from 'local-storage';
import { useHistory } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
  Button,
} from "reactstrap";

const AdminNavbar = (props) => {
  let history = useHistory();
  const cerrarSesion = () => {
    ls.set("login", 0);
    history.push("/auth/login");
  };
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>          
          <Nav className="align-items-center d-none d-md-flex" navbar>            
            <Button className="btn btn-sm btn-primary" onClick={cerrarSesion}>Cerrar Sesion</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
