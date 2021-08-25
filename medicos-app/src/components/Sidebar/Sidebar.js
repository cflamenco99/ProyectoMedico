import { useState } from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

const Sidebar = (props) => {
  const [collapseOpen] = useState();

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
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
      <Collapse navbar isOpen={collapseOpen}>         
          <Nav navbar>{createLinks(routes)}</Nav>         
      </Collapse>
    </Navbar>
  );
};

export default Sidebar;
