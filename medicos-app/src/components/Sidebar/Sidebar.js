import { NavLink as NavLinkRRD } from "react-router-dom";

import {
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

const Sidebar = (props) => {

  const createLinks = (routes) => {
    return routes.filter(x=> x.name != "Login").map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { routes } = props;

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Nav navbar>{createLinks(routes)}</Nav> 
    </Navbar>
  );
};

export default Sidebar;
