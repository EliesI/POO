<template>
  <!-- TODO: Faire les règles de gestion pour le mot de passe -->
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
          Créer un compte
        </h1>
        <form @submit.prevent="createUser">
          <!-- Username -->
          <div class="mb-6">
            <label
              for="login"
              class="block text-lg font-semibold font-montserrat mb-2"
              >Nom d'utilisateur
            </label>
            <input
              v-model="login"
              type="text"
              id="login"
              class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <!-- Email -->
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
              class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <!-- Password -->
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
              class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <!-- Password confirmation -->
          <div class="mb-6">
            <label
              for="password_confirmation"
              class="block text-lg font-semibold font-montserrat mb-2"
              >Password confirmation</label
            >
            <input
              v-model="password_confirmation"
              type="password"
              id="password_confirmation"
              class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
            />
          </div>
          <!-- S'inscrire -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="button-secondary font-montserrat bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded-full"
            >
              S'inscrire
            </button>
          </div>
        </form>

        <div class="mt-4">
          <a class="font-montserrat">Vous avez déjà un compte. </a
          ><button
            @click="goToLogin"
            class="font-montserrat button-primary font-bold"
          >
            Connectez-vous
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

const login = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");

const goToLogin = () => {
  router.push("/login");
};

async function createUser() {
  const user = {
    username: login.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  };
  if (
    user.username === "" ||
    user.email === "" ||
    user.password === "" ||
    user.password_confirmation === ""
  ) {
    createToast("Veuillez remplir tous les champs", {
      transition: "slide",
      type: "info",
      timeout: 2000,
    });
    return;
  }
  if (user.password !== user.password_confirmation) {
    createToast("Vos mots de passe ne correspondent pas", {
      transition: "slide",
      type: "info",
      timeout: 3000,
    });
  }
  if (user.password.length < "8") {
    createToast("Votre mot de passe doit avoir au minimum 8 caractères", {
      transition: "slide",
      type: "warning",
      timeout: 3500,
    });
    return;
  }

  console.log({ user });
  const response = await axios.post("http://localhost:4000/api/register", {
    ...user,
  });
  if (response.status === 200) {
    localStorage.setItem("token", response.data.token);
    router.push("/");
  } else if (response.status === 401) {
    // Récupérer le code d'erreur pour le cas ou l'utilisateur existe déjà vraiment
    createToast("Utilisateur déjà existant", {
      transition: "slide",
      type: "warning",
      timeout: 2000,
    });
    return;
  }
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

  console.error(error);
  if (data.token) {
    localStorage.setItem("token", data.token);
    router.push("/");
  }
}
</script>
