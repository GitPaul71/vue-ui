import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/about', name: 'About', component: () => import("../views/About.vue") },
      { path: '/services', name: 'Services', component: Services },
      { path: '/news', name: 'News', component: News },
      { path: '/contact', name: 'Contact', component: Contact }
  ]
})

export default router;