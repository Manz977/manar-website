import { createRouter, createWebHistory } from 'vue-router';


import Home from '../routes/Home.vue'
import About from '../routes/About.vue'
import Portfolio from '../routes/Portfolio.vue';
import Photography from '../routes/Photography.vue';
import Contact from '../routes/Contact.vue';
import Fashion from '../routes/Fashion.vue';
import Food from '../routes/Food.vue';
import Street from '../routes/Street.vue';

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/photography',
      component: Photography
    },
    {
      path: '/fashion',
      component: Fashion
    },
    {
    path: '/food',
    component: Food
    },
    {
      path: '/street',
      component: Street
    }
  ]
});

export default router;