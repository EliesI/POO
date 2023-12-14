<template>
  <div>
    <div class="flex justify-between items-center w-full hidden md:block infos">
      <div class="infos-name">Votre Username : {{ name }}</div>
      <div class="infos-email">Votre Email : {{ email }}</div>
    </div>
    <div class="flex flex-col"></div>
    <div class="md:hidden flex flex-row place-content-around py-2">
      <div class="flex justify-center font-montserrat font-bold">
        {{ name }}
      </div>
    </div>
    <div class="md:hidden flex flex-row place-content-around py-2">
      <div class="flex justify-center font-montserrat font-bold">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";

let name = ref("");
let email = ref("");

// Get the token from the localStorage et name et...
</script>
