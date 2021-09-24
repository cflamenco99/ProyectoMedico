//react
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

// reactstrap componentes
import { Container } from "reactstrap";
// core componentes
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

//componentes
import AgregarPacientes from "Pacientes/AgregarPacientes";
import AgregarCitas from "AdminCitas/AgregarCitas";
import AgregarReceta from "Recetas/AgregarReceta";
import EditarPacientes from "Pacientes/EditarPacientes"
import EditarCitas from "AdminCitas/EditarCitas"
import EditarRecetas from "Recetas/EditarRecetas";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return path;
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Route
            path="/admin/agregarPacientes"
            component={AgregarPacientes}
          />

          <Route
            path="/admin/editarPacientes/:id"
            component={EditarPacientes}
          />
         
          <Route
            path="/admin/agregarCitas"
            component={AgregarCitas}
          />

          <Route
            path="/admin/editarCita/:id"
            component={EditarCitas}
          />

           <Route
            path="/admin/agregarReceta"
            component={AgregarReceta}
          />

          <Route
            path="/admin/editarReceta/:id"
            component={EditarRecetas}
          />

         <Redirect from="*" to="/auth/login" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
