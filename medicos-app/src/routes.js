import Login from "Login/Login";
import Pacientes from "Pacientes/Pacientes";
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
    path: "/pacientes",
    name: "Administrar Pacientes",
    icon: "ni ni-single-02 text-yellow",
    component: Pacientes,
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
