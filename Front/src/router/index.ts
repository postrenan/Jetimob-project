import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";
import ClientArea from "../views/ClientArea.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/About",
      name: "About",
      component: About,
    },
    {
      path: "/Blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/Service",
      name: "Service",
      component: Service,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/ClientArea",
      name: "ClientArea",
      component: ClientArea,
    },
  ],
});

export default router;
