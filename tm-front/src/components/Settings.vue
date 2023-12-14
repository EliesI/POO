<template>
  <div class="card h-full w-full p-8">
    <h1
      class="flex justify-center text-black font-montserrat text-xl font-bold text-ellipsis"
    >
      Modifier son compte
    </h1>
    <form @submit.prevent="updateUser">
      <div class="mb-6">
        <label
          for="login"
          class="block text-lg font-semibold font-montserrat mb-2"
          >Username</label
        >
        <input
          v-model="login"
          type="text"
          id="login"
          class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block text-lg font-semibold font-montserrat mb-2"
          >Adresse e-mail</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
        />
      </div>
      <!-- <div class="mb-6">
        <label
          for="password"
          class="block text-lg font-semibold font-montserrat mb-2"
          >Mot de passe</label
        >
        <input
          type="password"
          id="password"
          class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
        />
      </div> -->

      <div class="flex justify-center gap-2">
        <button
          type="submit"
          class="border font-montserrat bg-secondary hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
        >
          Modifier
        </button>
      </div>

      <!-- Mettre le supprimer dans un danger zone, comme sur Github -->

      <button
        class="border font-montserrat bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        @click="deleteUser"
      >
        Supprimer mon compte
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { logout } from "@/assets/utils.js";
import { jwtDecode } from "jwt-decode";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import api from "@/services/api.js";

const jwttoken = localStorage.getItem("token");
// const { userId, email, username } = jwtDecode(jwttoken);
const { user_id } = jwtDecode(jwttoken);
const router = useRouter();

const login = ref(localStorage.getItem("username"));
const email = ref(localStorage.getItem("email"));

// import { jwtDecode } from "../assets/utils.js";
// onBeforeMount(() => {
//   if (jwttoken) {
//     console.log(jwtDecode(jwttoken));
//   }
// });

async function updateUser() {
  api.setToken(`${jwttoken}`);

  const updatedUser = {
    username: login.value,
    email: email.value,
  };
  console.log(updatedUser);
  console.log(user_id);
  const [error, data] = await api.put(`/users/${user_id}`, {
    user: updatedUser,
  });
  if (error) {
    console.error(error);
    createToast(
      {
        title: "Service temporairement indisponible",
        description: "Réessayez plus tard",
      },
      {
        transition: "slide",
        type: "warning",
        timeout: 4000,
      }
    );
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.setItem("id", data.data.id);
    localStorage.setItem("email", data.data.email);
    localStorage.setItem("username", data.data.username);
    createToast("Informations correctement mises à jours", {
      transition: "slide",
      type: "info",
      timeout: 4000,
    });
    // localStorage.setItem("password", response.data.data.password)
    // localStorage.setItem("password_authentication", response.data.data.password_authentication)
  }

  // try {
  //   const user = {
  //     username: login.value,
  //     email: email.value,
  //   };
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${jwttoken}`,
  //     },
  //   };
  //   const response = await axios.patch(
  //     `http://localhost:4000/api/users/${userId}`,
  //     {
  //       user: user,
  //     },
  //     config
  //   );
  //   if (response.status === 200) {
  //     localStorage.removeItem("email");
  //     localStorage.removeItem("username");
  //     localStorage.setItem("id", response.data.data.id);
  //     localStorage.setItem("email", response.data.data.email);
  //     localStorage.setItem("username", response.data.data.username);
  //     // localStorage.setItem("password", response.data.data.password)
  //     // localStorage.setItem("password_authentication", response.data.data.password_authentication)
  //     router.push("/");
  //   } else {
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
}

async function deleteUser() {
  api.setToken(`${jwttoken}`);

  const [error, data] = await api.delete(`/users/${user_id}`);
  if (error) {
    console.error(error);
    createToast(
      {
        title: "Service temporairement indisponible",
        description: "Réessayez plus tard",
      },
      {
        transition: "slide",
        type: "warning",
        timeout: 4000,
      }
    );
  } else {
    // TODO: Voir à mettre un toast de confirmation
    logout();
    router.push("/login");
  }
}
</script>
