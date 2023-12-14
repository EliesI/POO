<template>
  <section class="py-3">
    <div class="container px-4 mx-auto">
      <div class="pt-6 pb-8 bg-gray-500 rounded-xl">
        <div class="px-6">
          <div class="flex flex-row w-full place-content-between">
            <h4 class="text-lg text-gray-100 font-semibold mb-6">
              Détail des temps travaillés
            </h4>
            <button
              @click="openCreateModal"
              class="inline-flex items-center h-9 py-1 pl-2 pr-4 text-xs text-blue-50 font-semibold bg-green-500 hover:bg-green-600 rounded-lg"
            >
              <img src="../assets/icons/plus.svg" alt="Edit working time" />
              Ajouter un working time
            </button>
          </div>
          <div class="w-full mt-6 pb-6 overflow-x-auto">
            <table class="w-full min-w-max">
              <thead>
                <tr class="text-left">
                  <th class="p-0">
                    <div class="py-3 px-6 rounded-l-xl bg-gray-600">
                      <span class="text-xs text-gray-300 font-semibold"
                        >Début</span
                      >
                    </div>
                  </th>
                  <th class="p-0">
                    <div class="py-3 px-6 bg-gray-600">
                      <span class="text-xs text-gray-300 font-semibold"
                        >Fin</span
                      >
                    </div>
                  </th>
                  <th class="p-0">
                    <div class="py-3 px-6 bg-gray-600">
                      <span class="text-xs text-gray-300 font-semibold"
                        >Modifier</span
                      >
                    </div>
                  </th>
                  <th class="p-0">
                    <div class="py-3 px-6 bg-gray-600 rounded-r-xl">
                      <span class="text-xs text-gray-300 font-semibold"
                        >Supprimer</span
                      >
                    </div>
                  </th>
                </tr>
              </thead>
              <!-- En attendant le résultat de la requête mettre un loader -->
              <tbody v-if="workData.value && workData.value.length > 0">
                <tr v-for="(work, index) in workData.value" :key="index">
                  <td class="p-0">
                    <div class="flex items-center h-16 px-6 rounded-l-lg">
                      <div class="flex items-center">
                        <span class="text-sm text-gray-100 font-medium">{{
                          formatDateTime(work.start)
                        }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-0">
                    <div class="flex items-center h-16 px-6">
                      <span
                        class="inline-block px-2 py-1 text-sm text-gray-100 font-medium"
                        >{{ formatDateTime(work.end) }}</span
                      >
                    </div>
                  </td>
                  <td class="p-0">
                    <div class="flex items-center h-16 px-8">
                      <span
                        class="text-sm text-gray-100 font-medium cursor-pointer"
                      >
                        <img
                          @click="openModifyModal(work)"
                          src="../assets/icons/edit.svg"
                          alt="Edit working time"
                        />
                      </span>
                    </div>
                  </td>
                  <td class="p-0">
                    <div class="flex items-center h-16 px-8 rounded-r-lg">
                      <span
                        class="text-sm font-medium text-gray-100 cursor-pointer"
                      >
                        <img
                          src="../assets/icons/delete.svg"
                          alt="Delete working time"
                          @click="openDeleteWorkingTime(work.id)"
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>

              <!-- <tr class="mx-auto">
                Chargement des données...
              </tr> -->
              <div v-else class="absolute mx-auto w-[75%] bg-gray-600">
                <p class="text-center mx-auto">
                  Il n'y a encore aucun working time
                </p>
              </div>
            </table>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-between px-6 pt-8 border-t border-gray-400"
        >
          <div class="w-full sm:w-auto mb-6 sm:mb-0">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-400">
                <span>Showing</span>
                <span class="px-px text-gray-200">1</span>
                <span>to</span>
                <span class="px-px text-gray-200">{{
                  numberWorkingTimes
                }}</span>
                <span class="ml-4"
                  >total :
                  <b class="px-px text-gray-200">{{
                    numberWorkingTimes
                  }}</b></span
                >
              </p>
            </div>
          </div>
          <!-- TODO : Display les boutons selon les bonnes conditions -->
          <div class="w-full sm:w-auto mb-6 sm:mb-0">
            <div class="flex flex-wrap items-center -m-1.5">
              <div class="w-auto p-1.5">
                <a
                  class="inline-flex items-center h-9 py-1 px-4 text-xs text-gray-400 font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
                  href="#"
                  >Previous</a
                >
              </div>
              <div class="w-auto p-1.5">
                <a
                  class="inline-flex items-center h-9 py-1 px-4 text-xs text-blue-50 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                  href="#"
                  >Next</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ModifyModal
    v-if="ModifyModalOpen"
    :title="'Modify WorkingTime'"
    @close="closeModifyModalOpen"
    @modify="updateWorkingTime"
  >
    <div class="flex flex-col">
      <div class="flex flex-row items-center">
        <span>Date de début : </span>
        <input
          v-model="StartDate"
          type="date"
          placeholder="Start Date"
          class="mb-2 p-2 rounded border border-gray-300 mt-2"
        />
        <input
          type="time"
          v-model="StartTime"
          min="00:00"
          max="00:00"
          required
        />
      </div>
      <div class="flex flex-row items-center">
        <span>Date de fin : </span>
        <input
          v-model="EndDate"
          type="date"
          placeholder="End Date"
          class="p-2 rounded border border-gray-300"
        />
        <input type="time" v-model="EndTime" min="00:00" max="00:00" required />
      </div>
    </div>
  </ModifyModal>

  <CreateModal
    v-if="CreateModalOpen"
    :title="'Création d&lsquo;un temps de travail'"
    @close="closeCreateModal"
    @create="createWorkingTime"
  >
    <!-- TODO : Améliorer le design de la date et l'heure -->
    <div class="flex flex-col">
      <div class="flex flex-row items-center">
        <span>Date de début : </span>
        <input
          v-model="StartDate"
          type="date"
          placeholder="Start Date"
          class="mb-2 p-2 rounded border border-gray-300 mt-2"
        />
        <input
          type="time"
          v-model="StartTime"
          min="00:00"
          max="00:00"
          required
        />
      </div>
      <div class="flex flex-row items-center">
        <span>Date de fin : </span>
        <input
          v-model="EndDate"
          type="date"
          placeholder="End Date"
          class="p-2 rounded border border-gray-300"
        />
        <input type="time" v-model="EndTime" min="00:00" max="00:00" required />
      </div>
    </div>
  </CreateModal>
</template>

<style scoped>
tr:nth-child(2n) > td > div {
  background-color: rgb(75 85 99); /* replace with your desired styles */
}
</style>

<script setup>
import ModifyModal from "@/components/ModifyWorkingTime.vue";
import DeleteWorkingTime from "@/components/deleteWorkingTime.vue";
import { ref, onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";
import api from "@/services/api.js";

const route = useRoute();
// const userId = localStorage.getItem("id");
let workData = reactive({ data: [] });
let numberWorkingTimes = 0;
let ModifyModalOpen = ref(false);
let selectedWork = reactive({});

let CreateModalOpen = ref(false);
import CreateModal from "../components/CreateWorkingTime.vue";

let StartDate = ref("");
let EndDate = ref("");
let StartTime = ref("");
let EndTime = ref("");

const jwttoken = localStorage.getItem("token");
const userId = jwtDecode(jwttoken).user_id;

// TODO: Faire appel à la modal de confirmation de suppression
function openDeleteWorkingTime(id) {
  console.log({ id });

  deleteWorkingTime(id);
}

function openCreateModal() {
  CreateModalOpen.value = true;
}

function closeCreateModal() {
  CreateModalOpen.value = false;
}

function openModifyModal(work) {
  console.log(work);
  ModifyModalOpen.value = true;
  formattedStartDate = work.start;
  formattedEndDate = work.end;
  selectedWork = work;
}

function closeModifyModalOpen() {
  ModifyModalOpen.value = false;
}

const formatDateTime = (datetime) => {
  return format(new Date(datetime), "yyyy-MM-dd HH:mm:ss");
};

async function getWorkingTimes(userId) {
  api.setToken(`${jwttoken}`);

  const [error, data] = await api.get(`/workingtimes/${userId}`);
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    workData.value = data.data;
    numberWorkingTimes = workData.value.length;
  }
}

const updateWorkingTime = async () => {
  api.setToken(`${jwttoken}`);

  const { id } = selectedWork;
  const [error, data] = await api.put(`/workingtimes/${id}`, {
    working_time: {
      start: StartDate.value + " " + StartTime.value,
      end: EndDate.value + " " + EndTime.value,
    },
  });
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    workData.value = workData.value.filter((item) => item.id !== id);
    workData.value.push(data.data);

    // workData.value === undefined
    //   ? (workData.value = [data.data])
    //   : workData.value.push(data.data);

    numberWorkingTimes = workData.value.length;
  }
};

const createWorkingTime = async () => {
  api.setToken(`${jwttoken}`);

  const [error, data] = await api.post(`/workingtimes/${userId}`, {
    working_time: {
      start: StartDate.value + " " + StartTime.value,
      end: EndDate.value + " " + EndTime.value,
    },
  });
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    workData.value === undefined
      ? (workData.value = [data.data])
      : workData.value.push(data.data);

    numberWorkingTimes = workData.value.length;
  }
};

async function deleteWorkingTime(id) {
  api.setToken(`${jwttoken}`);

  const [error, data] = await api.delete(`/workingtimes/${id}`);
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    workData.value = workData.value.filter((item) => item.id !== id);
    numberWorkingTimes = workData.value.length;
  }
}

onBeforeMount(async () => {
  if (userId) {
    await getWorkingTimes(userId);
  }
});
</script>
