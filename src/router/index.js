import { createRouter, createWebHistory } from 'vue-router';
import FormView from '@/components/FormView.vue';
import GameView from '@/components/GameView.vue';

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormView,
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;