<template>
  <footer
    class="bg-white md:bg-gray-500 border-t mt-6 text-white fixed bottom-0 left-0 w-full"
  >
    <div class="hidden md:block">
      <p class="font-montserrat">&copy; 2023 MSC-1 LIL-5 POOGER</p>
      <a class="flex justify-center font-montserrat"
        >Vous avez des questions?
        <RouterLink :to="`/FAQ`" class="text-green-500 font-montserrat">
          Venez ici
        </RouterLink>
      </a>
    </div>

    <!-- Tap bar pour le mobile -->
    <div class="md:hidden flex flex-row place-content-around py-2">
      <!-- TODO : Quand non sélectionné logo et texte en gris, quand séletionné en primary -->
      <RouterLink
        :to="`/`"
        class="text-gray-500 font-montserrat flex flex-col justify-center items-center"
      >
        <div class="text-[32px] w-auto flex justify-center items-center">
          <DashboardIcon class="" />
        </div>
        Dashboard
      </RouterLink>
      <RouterLink
        :to="`/clock`"
        class="text-gray-500 font-montserrat flex flex-col justify-center items-center"
      >
        <div class="text-[32px] w-auto flex justify-center items-center">
          <PointageIcon class="" />
        </div>
        Pointage
      </RouterLink>
      <RouterLink
        :to="`/faq`"
        class="text-gray-500 font-montserrat flex flex-col justify-center items-center"
      >
        <div class="text-[32px] w-auto flex justify-center items-center">
          <FaqIcon class="" />
        </div>
        FAQ
      </RouterLink>
      <RouterLink
        :to="`/settings`"
        class="text-gray-500 font-montserrat flex flex-col justify-center items-center"
      >
        <div class="text-[32px] w-auto flex justify-center items-center">
          <ProfileIcon class="" />
        </div>
        Profile
      </RouterLink>
    </div>
  </footer>
</template>

<style scoped>
.my-svg {
  fill: red;
  color: red;
}
</style>

<script>
import ProfileIcon from "@/assets/icons/icon-profil.vue";
import FaqIcon from "@/assets/icons/faq.vue";
import DashboardIcon from "@/assets/icons/dashboard.vue";
import PointageIcon from "@/assets/icons/pointage.vue";

export default {
  components: {
    ProfileIcon,
    FaqIcon,
    DashboardIcon,
    PointageIcon,
  },
  // rest of the code
};

import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import Faq from "../assets/icons/faq.vue";

const router = useRouter();
</script>
