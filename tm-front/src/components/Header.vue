<template>
  <nav class="flex justify-between p-2 px-4 bg-ternary">
    <div class="flex justify-between items-center w-full">
      <RouterLink to="/">
        <div class="xl:w-auto">
          <a class="block max-w-max" href="#">
            <img class="h-11" src="../assets/favicon.svg" alt="Pooger-logo" />
          </a>
        </div>
      </RouterLink>
      <div class="hidden md:block xl:w-auto mx-auto">
        <ul class="flex justify-center">
          <RouterLink to="/dashboard"
            ><li class="mr-12 ml-5 font-montserrat text-black hover:text-white">
              Dashboard
            </li>
          </RouterLink>
          <RouterLink :to="`/workingtimes`">
            <li class="mr-12 ml-5 font-montserrat text-black hover:text-white">
              Feuille de temps
            </li>
          </RouterLink>

          <RouterLink :to="`/pointage`"
            ><li
              class="mr-12 flex items-center ml-5 font-montserrat text-black hover:text-white"
            >
              Pointage
            </li>
          </RouterLink>
          <RouterLink to="/settings">
            <li class="mr-12 ml-5 font-montserrat text-black hover:text-white">
              Settings
            </li>
          </RouterLink>
          <RouterLink to="/faq">
            <li class="mr-12 ml-5 font-montserrat text-black hover:text-white">
              FAQ
            </li>
          </RouterLink>
        </ul>
      </div>
      <div class="hidden md:block xl:w-auto">
        <div class="flex items-center justify-end">
          <a
            @click="logoutUser"
            class="font-montserrat inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-red-500 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
            href="#"
            >Déconnexion</a
          >
        </div>
      </div>
    </div>
    <!-- Afficher les infos de l'user en mobile -->
    <div class="md:hidden flex flex-row place-content-around py-2">
      <div class="xl:w-auto">
        <User />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { logout } from "@/assets/utils.js";
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
import User from "@/components/User.vue";

let userid = ref("");
const router = useRouter();

const logoutUser = () => {
  logout();
  router.push("/login");
};
</script>
