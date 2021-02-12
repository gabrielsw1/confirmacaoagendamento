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
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-overlay>

        <Agendamentos :agendamentos="agendamentos" />

        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn small text @click="
                () => {
                  this.$router.push('/main');
                }
              ">
              Sair
            </v-btn>
            <v-btn color="primary" small @click="e1 = 2" :disabled="
                buscaAgendamentosSelecionados.length == 0 ? true : false
              ">
              Próximo
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card class="mb-3" elevation="7">
          <v-toolbar dark dense flat color="primary" height="30%">
            Confirmar Agendamentos Selecionados
          </v-toolbar>
          <v-card-text>
            <ConfirmacaoAgendamento />
          </v-card-text>
        </v-card>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn text small @click="e1 = 1"> Retornar </v-btn>
            <v-btn color="primary" small @click="e1 = 3"> Próximo </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="mb-3" elevation="7">
          <v-toolbar dark dense flat color="primary" height="30%">
            Confirmação de Dados Pessoais
          </v-toolbar>
          <v-card-text>
            <DadosPessoais />
          </v-card-text>
        </v-card>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn text small @click="e1 = 2"> Retornar </v-btn>
            <v-btn color="primary" small @click="e1 = 4"> Próximo </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card>
          <v-card-title>
            <v-icon color="primary">mdi-calendar-edit</v-icon>
            <span style="
                text-decoration: underline 3px;
                text-decoration-color: #1976d2;
              " class="ml-2">
              Conferência de Dados
            </span>
          </v-card-title>
          <v-card class="mb-3" elevation="7">
            <v-toolbar dark dense flat color="primary" height="30%">
              Dados Pessoais
            </v-toolbar>
            <v-card-text>
              <DadosPessoais />
            </v-card-text>
          </v-card>
        </v-card>

        <v-divider class="mb-4 mt-4"></v-divider>

        <v-card elevation="7">
          <v-toolbar dark dense flat color="primary" height="30%">
            Dados dos Agendamentos
          </v-toolbar>
          <v-card-text>
            <ConfirmacaoAgendamento />
          </v-card-text>
        </v-card>
        <v-row>
          <v-col class="d-flex justify-end mt-3">
            <v-btn text small @click="e1 = 3"> Retornar </v-btn>
            <v-btn color="error" class="ml-2" small>
              Cancelar Atendimento
            </v-btn>
            <v-btn color="warning" class="ml-2" small> Transferir </v-btn>
            <v-btn color="success" class="ml-2" small @click="alert('Concluido')">
              Confirmar
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  import Agendamentos from "@/components/Agendamentos";
  import DadosPessoais from "@/components/DadosPessoais";
  import ConfirmacaoAgendamento from "@/components/ConfirmacaoAgendamento";
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "Tabs",
    components: {
      Agendamentos,
      DadosPessoais,
      ConfirmacaoAgendamento
    },
    mounted() {
      this.$store.dispatch("buscaAgendamentos");
    },
    data() {
      return {
        e1: 1,
        loading: true,
      };
    },
    watch: {
      agendamentos() {
        this.loading = false;
      },
    },
    computed: {
      ...mapGetters(["buscaDadosAgendamento", "buscaAgendamentosSelecionados"]),
      agendamentos() {
        return this.buscaDadosAgendamento;
      },
    },
  };
</script>

<style scoped>
</style>