<template>
  <div>
    <Settings />
  </div>
</template>
<script setup >
import Settings from "@/components/Settings.vue";
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
</script>
