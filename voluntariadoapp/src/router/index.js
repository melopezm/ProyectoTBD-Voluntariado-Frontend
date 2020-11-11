import Vue from 'vue'
import VueRouter from 'vue-router'
//import { components } from 'vue/types/umd'
import Home from '../views/Home.vue'
import VistaRegistro from '../views/VistaRegistro.vue'
import Formulario from '../views/Formulario.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vistaRegistro',
    name:'vistaRegistro',
    component: VistaRegistro
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario
  }
  /*{
    path: '/formulario',
    name: 'formulario',
    component: Formulario
  }*/
 
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router; 