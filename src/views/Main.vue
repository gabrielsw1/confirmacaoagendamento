<template>
  <v-layout>
    <v-app-bar color="teal lighten-3" dense app>
      <v-app-bar-title>
        <span class="font-weight-bold">MV</span><span class="font-weight-light">Hospidata - Agendamentos</span>
      </v-app-bar-title>
    </v-app-bar>
    <v-container>
      <v-main>
        <Agendamentos/>
      </v-main>
    </v-container>
  </v-layout>
</template>

<script>

import Agendamentos from "@/components/Agendamentos";

export default {
  name: "Main",
  components:{
    Agendamentos
  }
}
</script>

<style scoped>

</style>