import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound.vue";
import Inicio from '../views/Inicio.vue';
import Contacto from '../views/Contacto.vue';
import Sobremi from '../views/Sobremi.vue';
import Post from '../views/Post.vue';
import Articulo from '../views/Articulo.vue';



Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: "*",
      component: NotFound,
    },
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/contacto",
      component: Contacto,
      alias: ["/contactame", "/contactanos"]
    },
    {
      path: "/sobremi",
      component: Sobremi,
      alias: ["/sobrenosotros"]
    },
    {
      path: "/post/:id",
      component: Post,
      name: "post",
      children: [{
        path: "/",
        component: Articulo
      }]
    },
  ],
});

export default router;