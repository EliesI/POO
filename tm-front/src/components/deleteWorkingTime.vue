<template>
  <div
    class="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto"
  >
    <div class="max-w-xl w-full mx-auto pt-6 px-6 pb-8 bg-gray-500 rounded-xl">
      <!-- Ajout d'un logo pour quitter la modal -->
      <!-- <div class="right-0 ml-auto w-fit mb-4">
        <div class="w-fit rounded-full bg-gray-600 p-1">
          <img
            src="../assets/icons/cross.svg"
            alt="Quitter la modal de suppression de working time"
          />
        </div>
      </div> -->
      <div class="max-w-sm mx-auto mb-10 text-center">
        <h4 class="text-2xl font-semibold text-gray-100 mb-4">
          Suppression Working Times
        </h4>
        <p class="text-gray-300 font-medium leading-6">
          Êtes-vous sûr de vouloir supprimer ce working time ? Écrivez "<i
            class="text-red-500"
            >supprimer</i
          >" pour confirmer la suppression.
        </p>
        <!-- <p class="text-gray-300 font-medium leading-6">
          Écrivez "<i class="text-red-500">supprimer</i>" pour confirmer la
          suppression.
        </p> -->
      </div>
      <form action="">
        <div
          class="relative w-full h-14 py-4 px-3 mb-10 border border-gray-400 focus-within:border-green-500 rounded-lg"
        >
          <span
            class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500"
            >Suppression</span
          >
          <input
            class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
            type="email"
            v-model="userInputModel"
            @input="checkInput"
          />
        </div>
        <button
          class="block w-full h-12 py-2 px-6 text-center text-blue-50 font-semibold leading-6 bg-red-500 cursor-not-allowed opacity-50 rounded-lg"
          @click="deleteWorkingTime"
          id="buttonDeleteWorkingTime"
        >
          Supprimer
        </button>

        <button
          class="mt-4 block w-full h-12 py-2 px-6 text-center text-blue-50 font-semibold leading-6 bg-gray-600 hover:bg-gray-700 c rounded-lg"
          @click="closeModal"
        >
          Annuler
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: Number, // Define the 'id' prop
  },
  data() {
    return {
      showModal: false,
      userInputModel: "",
    };
  },
  methods: {
    checkInput() {
      if (this.userInputModel === "supprimer") {
        document.getElementById("deleteWorkingTime");
        console.log(document.getElementById("buttonDeleteWorkingTime"));
        document.getElementById("buttonDeleteWorkingTime").style.opacity = "1";
        document
          .getElementById("buttonDeleteWorkingTime")
          .classList.remove("cursor-not-allowed");
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteWorkingTime(id) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/workingtimes/${id}`
        );
        if (response.status === 204) {
          "La suppression a réussi", response;
          await getWorkingTime(userId, workingTimeId);
          router.push(`/workingtimes/${userId}`);
        } else {
          console.error("La suppression a échoué", response);
        }
      } catch (error) {
        console.error("Erreur lors de la suppression", error);
      }
    },
  },
};
</script>

<!-- <template>
  <div
    class="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto"
  >
    <div class="max-w-xl w-full mx-auto pt-6 px-6 pb-8 bg-gray-500 rounded-xl">
      Ajout d'un logo pour quitter la modal -->
<!-- <div class="right-0 ml-auto w-fit mb-4">
        <div class="w-fit rounded-full bg-gray-600 p-1">
          <img
            src="../assets/icons/cross.svg"
            alt="Quitter la modal de suppression de working time"
          />
        </div>
      </div>
      <div class="max-w-sm mx-auto mb-10 text-center">
        <h4 class="text-2xl font-semibold text-gray-100 mb-4">
          Suppression Working Times
        </h4>
        <p class="text-gray-300 font-medium leading-6">
          Êtes-vous sûr de vouloir supprimer ce working time ? Écrivez "<i
            class="text-red-500"
            >supprimer</i
          >" pour confirmer la suppression.
        </p>
        <p class="text-gray-300 font-medium leading-6">
          Écrivez "<i class="text-red-500">supprimer</i>" pour confirmer la
          suppression.
        </p>
      </div>
      <form action="">
        <div
          class="relative w-full h-14 py-4 px-3 mb-10 border border-gray-400 focus-within:border-green-500 rounded-lg"
        >
          <span
            class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500"
            >Suppression</span
          >
          <input
            class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
            id="modalInput7-1"
            type="email"
          />
        </div>
        <button
          class="block w-full h-12 py-2 px-6 text-center text-blue-50 font-semibold leading-6 bg-red-500 hover:bg-blue-600 rounded-lg transition duration-200"
        >
          Supprimer
        </button>

        <button
          class="mt-4 block w-full h-12 py-2 px-6 text-center text-blue-50 font-semibold leading-6 bg-gray-600 hover:bg-blue-600 rounded-lg transition duration-200"
        >
          Annuler
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script> -->
