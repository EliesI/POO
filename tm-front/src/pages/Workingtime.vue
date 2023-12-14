<template>
  <div>
    <WorkingTime />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import WorkingTime from "@/components/Workingtime.vue";
</script>
