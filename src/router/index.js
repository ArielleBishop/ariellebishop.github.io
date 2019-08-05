import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import ContentPage from '@/components/widgets/ContentPage';
import store from '@/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/illustration',
      name: 'Illustration',
      component: ContentPage,
      props: { cards: store.getters.illustration }
    },
    {
      path: '/animation',
      name: 'Animation',
      component: ContentPage,
      props: { cards: store.getters.animation }
    },
    {
      path: '/videography',
      name: 'Videography',
      component: ContentPage,
      props: { cards: store.getters.videography }
    },
    {
      path: '/programming',
      name: 'Programming',
      component: ContentPage,
      props: { cards: store.getters.programming }
    },
    {
      path: 'About',
      name: 'About',
      component: About
    }
  ]
})
