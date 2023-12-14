<template>
  <div>
    <ClockManager />
  </div>
</template>
<script setup >
import ClockManager from "@/components/ClockManager.vue";
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { jwtDecode } from "jwt-decode";

const router = useRouter();
const jwttoken = localStorage.getItem('token');

onBeforeMount(() => {
  jwtDecode(jwttoken)
});
</script>
L