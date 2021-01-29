<template>
  <v-layout>
    <v-app-bar color="teal lighten-1" dense app>
      <v-app-bar-title>
        <span class="font-weight-bold">MV</span><span class="font-weight-light">Hospidata - Agendamentos</span>
      </v-app-bar-title>
    </v-app-bar>

    <v-container>
      <v-main>
        <Tabs/>

      </v-main>
    </v-container>
  </v-layout>
</template>

<script>


import Tabs from "@/components/Tabs";

export default {
  name: "Main",
  components:{
    Tabs
  }
}
</script>

<style scoped>

</style>