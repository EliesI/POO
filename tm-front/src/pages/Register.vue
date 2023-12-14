<template>
  <div>
    <Register />
  </div>
</template>
<script setup>
import Register from "@/components/Register.vue";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onBeforeMount(() => {
  if (localStorage.getItem("token")) {
    router.push("/");
  }
});
</script>
