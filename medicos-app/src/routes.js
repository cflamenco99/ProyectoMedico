import Login from "Login/Login";
import Pacientes from "Pacientes/Pacientes";

var routes = [
  {
    path: "/pacientes",
    name: "Administrar Pacientes",
    icon: "ni ni-single-02 text-yellow",
    component: Pacientes,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
