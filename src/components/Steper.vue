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
        <Agendamentos :agendamentos="agendamentosPendentes" />
        <v-btn color="primary" @click="e1 = 2"> Próximo </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-btn color="primary" @click="e1 = 3"> Próximo </v-btn>

        <v-btn text @click="e1 = 1"> Retornar </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <Perfil />
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
import Perfil from "@/components/Perfil";
export default {
  name: "Tabs",
  components: { Agendamentos, Perfil },
  data() {
    return {
      e1: 1,
      agendamentosPendentes: [
        {
          id: 1,
          nome: "Teste de HIV",
          dia: "28/01/12",
          hora: "13:00",
          medico: "Medico Teste",
          endereco: "Rua Teste, 123",
          status: "Pagamento nao realizado",
        },
        {
          id: 2,
          nome: "Teste de COVID",
          dia: "28/01/12",
          hora: "13:00",
          medico: "Medico Teste",
          endereco: "Rua Teste, 123",
          status: "Pagamento nao realizado",
        },
        {
          id: 3,
          nome: "Teste de HIV",
          dia: "28/01/12",
          hora: "13:00",
          medico: "Medico Teste",
          endereco: "Rua Teste, 123",
          status: "Pagamento nao realizado",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>