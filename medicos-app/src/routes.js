import Login from "Login/Login";
import ListadoPacientes from "Pacientes/ListadoPacientes";
import HistorialMedico from "Historial/HistorialMedico"

var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/listadoPacientes",
    name: "Administrar Pacientes",
    icon: "ni ni-single-02 text-yellow",
    component: ListadoPacientes,
    layout: "/admin",
  },

  {
    path: "/historial-medico",
    name: "Historial Medico",
    icon: "ni ni-single-copy-04 text-blue",
    component: HistorialMedico,
    layout: "/admin",
  },

];
export default routes;
