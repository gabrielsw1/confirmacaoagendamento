<template>
  <v-row>
    <v-col
      v-for="(item, id) in agendamentos"
      :key="id"
      xl="2"
      lg="4"
      md="6"
      sm="12"
    >
      <v-card elevation="6" class="mb-3">
        <v-toolbar dark dense flat color="primary" height="30%">
          <v-checkbox
            :key="item.idAgendamento"
            :value="item"
            v-model="selected"
            class="mt-5"
          ></v-checkbox>
          {{ item.descrProcedimento }} {{ item.idAgendamento }}
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col lg="6" md="8" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Data: </span
              >{{ item.dtAgendamento || "Não Informada" }}
            </v-col>
            <v-col lg="6" md="8" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Hora: </span
              >{{ item.hrAgendamento || "Não Informada" }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Médico: </span
              >{{ item.nmPrestador || "Não Informado" }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Instituição: </span
              >{{ item.nomeHospital || "Não Informado" }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Endereço: </span
              >{{ item.logradouro || "Não Informado" }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Agendamentos",
  props: ["agendamentos"],
  data() {
    return {
      selected: [],
    };
  },
  watch: {
    selected(newValue) {
      this.$store.agendamentosSelecionados = newValue;
    },
  },
};
</script>

<style scoped>
</style>