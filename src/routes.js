import Login from "Login/Login";
import ListadoPacientes from "Pacientes/ListadoPacientes";
import HistorialMedico from "Historial/HistorialMedico"
import ListaCitas from "AdminCitas/ListaCitas";
import ListadoRecetas from "Recetas/ListadoRecetas";
import Index from "Dashboard/Index";


var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },

  {
    path: "/Index",
    name: "Inicio",
    icon: "ni ni-app text-purple",
    component: Index,
    layout: "/admin",
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

  {
    path: "/ListaCitas",
    name: "Administracion de Citas",
    icon: "ni ni-single-copy-04 text-red",
    component: ListaCitas,
    layout: "/admin",
  },

  {
    path: "/ListadoRecetas",
    name: "Recetas Medicas",
    icon: "ni ni-single-copy-04 text-green",
    component: ListadoRecetas,
    layout: "/admin",
  },



];
export default routes;


