<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-md mx-auto p-8 border rounded-lg bg-white shadow-lg">
      <div v-if="clockIn">
        <div class="text-center mb-4">
          <div class="font-semibold text-xl">Tu as commencé à pointer à :</div>
          <div class="text-xl">
            {{
              lastClockData
                ? formatDateTime(lastClockData.time)
                : "Heure de début"
            }}
          </div>
        </div>
        <button
          @click="clock"
          class="block mx-auto bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Terminer mon pointage
        </button>
      </div>
      <div v-else>
        <button
          @click="clock"
          class="block mx-auto bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Commencer mon pointage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { format } from "date-fns";
import { jwtDecode } from "jwt-decode";

import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import api from "@/services/api.js";

let clockData = null;
let clockIn = ref(false);
let lastClockData = ref([]);
const jwttoken = localStorage.getItem("token");
const userId = jwtDecode(jwttoken).user_id;

onBeforeMount(async () => {
  if (userId) {
    await getClockData(userId);
  }
});

const formatDateTime = (datetime) => {
  console.log(datetime);
  return format(new Date(datetime), "yyyy-MM-dd HH:mm:ss");
};

async function getClockData(userId) {
  api.setToken(`${jwttoken}`);
  const [error, data] = await api.get(`/clocks/${userId}`);
  if (error) {
    console.error(error);
    createToast(
      {
        title: "Service temporairement indisponible",
        description: "Réessayez plus tard",
      },
      {
        transition: "slide",
        type: "warning",
        timeout: 2000,
      }
    );
  } else {
    clockData = data;
    clockIn.value = clockData.data[clockData.data.length - 1].status;
    lastClockData = clockData.data[clockData.data.length - 1];
  }
}

async function clock() {
  const clock = {
    time: new Date().toISOString(),
  };
  api.setToken(`${jwttoken}`);

  const [clockError, clockData] = await api.post(`/clocks/${userId}`, {
    clock: clock,
  });
  if (clockError) {
    console.error(clockError);
    createToast(
      {
        title: "Service temporairement indisponible",
        description: "Réessayez plus tard",
      },
      {
        transition: "slide",
        type: "warning",
        timeout: 4000,
      }
    );
    return null; // Stop the function
  }

  if (clockData) {
    clockIn.value = !clockIn.value; // Toggle clockIn value, pour afficher le pointage dans le front
    if (clockIn.value == false) {
      const start = formatDateTime(lastClockData.time);
      const end = formatDateTime(clock.time);
      const workingTime = {
        start: start,
        end: end,
      };

      const [workingTimeError, workingTimeData] = await api.post(
        `/workingtimes/${userId}`,
        {
          working_time: workingTime,
        }
      );
      if (workingTimeError) {
        console.error(workingTimeError);
        createToast(
          {
            title: "Service temporairement indisponible",
            description: "Réessayez plus tard",
          },
          {
            transition: "slide",
            type: "warning",
            timeout: 4000,
          }
        );
      } else {
        if (workingTimeData.status === 201) {
          createToast("Pointage terminé !", {
            type: "success",
            timeout: 4000,
            transition: "slide",
          });
        }
      }
    }
  }
}
</script>
