import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Settings from "../pages/Settings.vue";
import WorkingTimes from "../pages/Workingtimes.vue";
import WorkingTime from "../pages/Workingtime.vue";
import ClockManager from "../pages/ClockManager.vue";
import Faq from "../pages/Faq.vue";
// import PanelAdmin from "@/pages/PanelAdmin.vue";
import { jwtDecode } from "jwt-decode";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        if (decodedToken.user_role === "user") {
          next();
        } else {
          next("/"); // Si non autorisé, on redirige vers la page d'accueil
        }
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        if (decodedToken.user_role === "user") {
          next();
        } else {
          next("/"); // Si non autorisé, on redirige vers la page d'accueil
        }
      },
    },
    {
      path: "/workingtimes",
      name: "workingtimes",
      component: WorkingTimes,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        if (decodedToken.user_role === "user") {
          next();
        } else {
          next("/"); // Si non autorisé, on redirige vers la page d'accueil
        }
      },
    },
    {
      path: "/pointage",
      name: "pointage",
      component: ClockManager,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        if (decodedToken.user_role === "user") {
          next();
        } else {
          next("/"); // Si non autorisé, on redirige vers la page d'accueil
        }
      },
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
    },
    // {
    //   path: "/panel-admin",
    //   name: "admin",
    //   component: PanelAdmin,
    //   beforeEnter: (to, from, next) => {
    //     // Get the token from wherever you're storing it
    //     const token = localStorage.getItem("token");
    //     // Decode the token to get the isAdmin flag
    //     const decodedToken = jwt.decode(token);
    //     if (decodedToken && decodedToken.isAdmin) {
    //       next();
    //     } else {
    //       next("/"); // or wherever you want to redirect non-admin users
    //     }
    //   },
    // },
  ],
});

// const id = jwtDecode(jwttoken).user_id;
router.beforeEach((to, from, next) => {
  if (
    !localStorage.getItem("token") &&
    to.path !== "/login" &&
    to.path !== "/register"
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
