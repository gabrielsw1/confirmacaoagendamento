<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1">
        Selecione o Agendamento
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="2" :complete="e1 > 2">
        Dados do Agendamento
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="3" :complete="e1 > 3">
        Dados Pessoais
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="4" :complete="e1 > 4"> Conclusão </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-overlay :absolute="true" :value="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>

        <Agendamentos :agendamentos="agendamentos"/>
        
        <v-btn color="primary" @click="e1 = 2"> Próximo </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <DadosAgendamentos/>
        <v-btn color="primary" @click="e1 = 3"> Próximo </v-btn>

        <v-btn text @click="e1 = 1"> Retornar </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <DadosPessoais />
        <v-btn color="primary" @click="e1 = 4"> Próximo </v-btn>
        <v-btn text @click="e1 = 2"> Retornar </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        teste 4
        <v-btn color="primary" @click="alert('Concluido')"> Concluir </v-btn>
        <v-btn text @click="e1 = 3"> Retornar </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Agendamentos from "@/components/Agendamentos";
import DadosPessoais from "@/components/DadosPessoais";
import DadosAgendamentos from "@/components/DadosAgendamentos";
import { mapGetters } from "vuex";
export default {
  name: "Tabs",
  components: { Agendamentos, DadosPessoais, DadosAgendamentos },
  mounted() {
    this.$store.dispatch("buscaAgendamentos");
  },
  data() {
    return {
      e1: 1,
      loading: true,
    };
  },
  watch:{
    agendamentos(){
      this.loading = false
    }
  },
  computed: {
    ...mapGetters(["buscaDadosAgendamento"]),
    agendamentos() {
      return this.buscaDadosAgendamento;
    },
  },
};
</script>

<style scoped>
</style>