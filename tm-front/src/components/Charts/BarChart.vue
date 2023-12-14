<template>
  <section class="py-3">
    <div class="container px-4 mx-auto">
      <div class="pt-6 pb-8 rounded-xl">
        <div class="px-6">
          <h4 class="text-lg text-black font-semibold mb-6">
            Détail des temps travaillés
          </h4>
          <div>
            <!-- WARN : le canvas du graphique doit être dans une balise parente seul, 
            ou si non le graph s'affiche à l'infini
         -->
            <Canvas class="w-full h-96" id="planet-chart"></Canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import Chart from "chart.js/auto";
import { jwtDecode } from "jwt-decode";

export default {
  name: "PlanetChart",
  setup() {
    const data = ref([]);
    const chartInitialized = ref(false);

    // onMounted(async () => {
    // if (!chartInitialized.value) {
    //     // 1. Récupérer les données de l'API
    //     const jwttoken = localStorage.getItem('token');
    //     const userId = jwtDecode(jwttoken).user_id;
    //     const config = {
    //         headers: {
    //             'Authorization': `Bearer ${jwttoken}`
    //         }
    //     };
    //     const response = await fetch(`http://localhost:4000/api/workingtimes/${userId}`, config);
    //     const responseData = await response.json();
    //     data.value = responseData.data;
    //     data.value.forEach((item) => {
    //         const start = new Date(item.start);
    //         const end = new Date(item.end);
    //         const year = start.getFullYear();
    //         const month = start.getMonth() + 1; // Les mois sont indexés de 0 à 11
    //         const day = start.getDate();

    onMounted(async () => {
      if (!chartInitialized.value) {
        // 1. Récupérer les données de l'API
        const jwttoken = localStorage.getItem("token");
        const userId = jwtDecode(jwttoken).user_id;
        const config = {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        };
        const response = await fetch(
          `http://localhost:4000/api/workingtimes/${userId}`,
          config
        );
        const responseData = await response.json();
        data.value = responseData.data;

        // 2. Traiter les données
        const monthlyData = {};
        data.value.forEach((item) => {
          const start = new Date(item.start);
          const end = new Date(item.end);
          const year = start.getFullYear();
          const month = start.getMonth() + 1; // Les mois sont indexés de 0 à 11
          const day = start.getDate();

          if (!monthlyData[year]) {
            monthlyData[year] = {};
          }

          if (!monthlyData[year][month]) {
            monthlyData[year][month] = {
              totalHours: 0,
              workingDays: 0,
            };
          }

          monthlyData[year][month].totalHours +=
            (end - start) / (1000 * 60 * 60);
          if (!monthlyData[year][month].daysWorked) {
            monthlyData[year][month].daysWorked = [];
          }
          monthlyData[year][month].daysWorked.push(day);
        });

        const monthNames = [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ];

        const labels = [];
        const totalHoursData = [];
        const workingDaysData = [];

        Object.keys(monthlyData).forEach((year) => {
          Object.keys(monthlyData[year]).forEach((month) => {
            const monthName = monthNames[parseInt(month) - 1];
            labels.push(`Mois ${monthName}, Année ${year}`);
            totalHoursData.push(monthlyData[year][month].totalHours);
            workingDaysData.push(monthlyData[year][month].daysWorked.length);
          });
        });

        // 3. Mettre à jour les données du graphique
        const ctx = document.getElementById("planet-chart").getContext("2d");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Total Heures Travaillées",
                data: totalHoursData,
              },
              {
                label: "Jours Travaillés",
                data: workingDaysData,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              annotation: {
                annotations: {},
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Mois et Années",
                  color: "#181E38",
                },
                grid: {
                  display: false,
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Valeur",
                  color: "#181E38",
                },
                grid: {
                  display: true,
                },
              },
            },
            elements: {
              bar: {
                borderRadius: 10,
                hoverBackgroundColor: "#EB9255",
              },
            },
          },
        });
        chartInitialized.value = true;
      }
    });

    return {
      data,
    };
  },
};
</script>
