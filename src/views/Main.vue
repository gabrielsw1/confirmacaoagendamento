<template>
  <v-layout>
    <v-app-bar color="grey lighten-4" dense app>
      <v-app-bar-title>
        <span class="font-weight-bold" style="color: #1976d2">MV</span
        ><span class="font-weight-light"
          ><b>Hospidata</b> - Confirmação de Agendamentos</span
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn plain>Institucional</v-btn>
      <v-btn plain>Agendamentos</v-btn>
      <v-btn icon color="primary"> <v-icon>mdi-account-circle</v-icon> </v-btn>
        
    </v-app-bar>

    <v-container>
      <v-main>
        <Stepper class="mb-2" />
      </v-main>
    </v-container>
  </v-layout>
</template>

<script>
import Stepper from "@/components/Steper";
export default {
  name: "Main",
  components: {
    Stepper,
  },
};
</script>

<style scoped>
</style>