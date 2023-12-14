<template>
  <header>
    <layoutHeader v-if="showHeader" />
  </header>
  <RouterView />
  <footer class="mt-20">
    <layoutFooter v-if="showFooter" />
  </footer>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import layoutHeader from "@/components/Header.vue";
import layoutFooter from "@/components/Footer.vue";
import { computed } from "vue";

const route = useRoute();

const showHeader = computed(() => {
  return route.path !== "/login" && route.path !== "/register";
});

const showFooter = computed(() => {
  return route.path !== "/login" && route.path !== "/register";
});
</script>
