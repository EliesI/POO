<template>
  <div>
    <div v-if="workData">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="py-2 font-semibold border-b">Date de début</th>
            <th class="py-2 font-semibold border-b">Date de fin</th>
            <th class="py-2 font-semibold border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="workData.id" class="work-entry border-b">
            <td class="start py-2">{{ workData.start }}</td>
            <td class="end py-2">{{ workData.end }}</td>
            <td class="py-2">
              <button @click="deleteWorkingTime(workData.id)" class="suppr hover:text-red-500">Supprimer/</button>
              <button @click="openModifyModal(workData)" class="suppr hover:text-blue-500"> Modifier</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="loading" class="text-center mt-4">Chargement des données...</p>
    <p v-else class="text-center mt-4">
      <button @click="openCreateModal" class="suppr">Créer Working Time</button>
    </p>

    <ModifyModal v-if="ModifyModalOpen" :title="'Modify WorkingTime'" @close="closeModifyModalOpen"
      @modify="updateWorkingTime">
      <div>
        <input v-model="formattedStartDate" type="text" placeholder="Start Date"
          class="mb-2 p-2 rounded border border-gray-300 mt-2">
        <input v-model="formattedEndDate" type="text" placeholder="End Date" class="p-2 rounded border border-gray-300">
      </div>
    </ModifyModal>

    <CreateModal v-if="CreateModalOpen" :title="'Create WorkingTime'" @close="closeCreateModal"
      @create="createWorkingTime">
      <div class="flex flex-col">
        <input v-model="createStartDate" type="text" placeholder="Start Date"
          class="mb-2 p-2 rounded border border-gray-300 mt-2">
        <input v-model="createEndDate" type="text" placeholder="End Date" class="p-2 rounded border border-gray-300">
      </div>
    </CreateModal>
  </div>
</template>

<script setup>
import ModifyModal from '../components/ModifyWorkingTime.vue';
import CreateModal from '../components/CreateWorkingTime.vue';
import { ref, onBeforeMount, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { format } from 'date-fns';

const route = useRoute();
const router = useRouter();
const userId = route.params.userid;
const workingTimeId = route.params.workingtimeid;
let workData = ref(null);
let loading = ref(false);
let ModifyModalOpen = ref(false);
let CreateModalOpen = ref(false);
let createStartDate = ref("");
let createEndDate = ref("");
let selectedWork = reactive({});
let formattedStartDate = '';
let formattedEndDate = '';

function openModifyModal(work) {
  ModifyModalOpen.value = true;
  formattedStartDate = work.start;
  formattedEndDate = work.end;
  selectedWork = { ...work };
}

function openCreateModal() {
  CreateModalOpen.value = true;
}

function closeCreateModal() {
  CreateModalOpen.value = false;
}

function closeModifyModalOpen() {
  ModifyModalOpen.value = false;
}

const formatDateTime = (datetime) => {
  return format(new Date(datetime), 'yyyy-MM-dd HH:mm:ss');
};

async function getWorkingTime(userId, wtId) {
  try {
    loading.value = true;
    const response = await axios.get(`http://localhost:4000/api/workingtimes/${userId}/${wtId}`);
    if (response.status === 200) {
      workData.value = response.data.data;
    } else {
      console.error('La requête GET a échoué', response);
    }
  } catch (error) {
    console.error('Erreur lors de la requête GET', error);
  } finally {
    loading.value = false;
  }
}

async function deleteWorkingTime(id) {
  try {
    const response = await axios.delete(`http://localhost:4000/api/workingtimes/${id}`);
    if (response.status === 204) {
      ('La suppression a réussi', response);
      await getWorkingTime(userId, workingTimeId);
      router.push(`/workingtimes/${userId}`);
    } else {
      console.error('La suppression a échoué', response);
    }
  } catch (error) {
    console.error('Erreur lors de la suppression', error);
  }
}

const updateWorkingTime = async () => {
  try {
    const { id } = selectedWork;

    const body = {
      working_time: {
        start: formattedStartDate,
        end: formattedEndDate,
      },
    };

    const response = await axios.put(`http://localhost:4000/api/workingtimes/${id}`, body);

    if (response.status === 200) {
      ('La modification a réussi', response);
      await getWorkingTime(userId, workingTimeId);
    } else {
      console.error('La modification a échoué', response);
    }
  } catch (error) {
    console.error('Erreur lors de la modification', error);
  }
};

const createWorkingTime = async () => {
  try {
    const newWorkingTimeData = {
      working_time: {
        start: createStartDate.value,
        end: createEndDate.value
      }
    };
    const response = await axios.post(`http://localhost:4000/api/workingtimes/${userId}`, newWorkingTimeData);
    if (response.status === 201) {
      ('La création a réussi', response);
      router.push(`/workingtimes/${userId}`);
    } else {
      console.error('La création a échoué', response);
    }
  } catch (error) {
    console.error('Erreur lors de la création', error);
  }
};

onBeforeMount(async () => {
  if (userId && workingTimeId) {
    await getWorkingTime(userId, workingTimeId);
  }
});
</script>
