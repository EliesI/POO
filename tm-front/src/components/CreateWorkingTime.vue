<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 text-black"
  >
    <div class="bg-white w-auto md:w-1/3 rounded-lg p-4">
      <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
      <hr />
      <div class="mb-4">
        <slot></slot>
      </div>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-blue m-1"
        >
          Fermer
        </button>
        <button
          @click="createWT"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pastel-blue m-1"
        >
          Créer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, getCurrentInstance } from "vue";

const { title } = defineProps(["title"]);
const instance = getCurrentInstance();

const createWT = () => {
  instance.emit("create");
};

const closeModal = () => {
  instance.emit("close");
};
</script>
