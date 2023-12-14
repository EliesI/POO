<template>
  <div class="h-full w-full flex">
    <div class="w-0 md:w-1/2 bg-quinary">
      <img
        src="../assets/POOGER.png"
        alt="Pooger-img"
        class="object-contain h-screen"
      />
    </div>
    <div class="w-full md:w-1/2 my-auto mx-4">
      <div class="h-auto">
        <h1
          class="flex justify-center text-black font-montserrat text-xl font-bold text-ellipsis mb-6"
        >
          Se connecter
        </h1>
        <form @submit.prevent="getUser">
          <div class="mb-6">
            <label
              for="email"
              class="block text-lg font-semibold font-montserrat mb-2"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full border font-montserrat border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-lg font-semibold font-montserrat mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full border font-montserrat border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="button-secondary font-montserrat bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded-full"
            >
              Se connecter
            </button>
          </div>
        </form>
        <div class="mt-4">
          <a class="font-montserrat">Vous n'êtes pas encore inscrit ? </a
          ><button
            @click="goToRegister"
            class="font-montserrat button-primary font-bold"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import api from "@/services/api.js";

const router = useRouter();

const password = ref("");
const email = ref("");

const goToRegister = () => {
  router.push("/register");
};

async function getUser() {
  if (email.value === "" || password.value === "") {
    createToast("Veuillez remplir tous les champs", {
      transition: "slide",
      type: "warning",
      timeout: 4000,
    });

    return;
  }

  const [error, data] = await api.post(`/login`, {
    email: email.value,
    password: password.value,
  });
  if (error) {
    createToast("Identifiant ou mot de passe incorrect", {
      transition: "slide",
      type: "danger",
      timeout: 4000,
    });
    console.error(error);
  } else {
    localStorage.setItem("token", data.token);
    router.push("/");
  }
}
</script>
