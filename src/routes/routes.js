import { createRouter, createWebHistory } from "vue-router";
import HomeC from "../components/HomeC.vue";
import UpdateUser from "../components/UpdateUser.vue";
import CreateUser from "../components/CreateUser.vue";

const routes = [
  {
    path: "/",
    component: HomeC,
  },
  {
    path: "/update-user/:id",
    component: UpdateUser,
  },
  {
    path: "/create-user",
    component: CreateUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
