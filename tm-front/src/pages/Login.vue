<template>
  <div>
    <Login />
  </div>
</template>
<script setup>
import Login from "@/components/Login.vue";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onBeforeMount(() => {
  if (localStorage.getItem("token")) {
    router.push("/");
  }
});
</script>
