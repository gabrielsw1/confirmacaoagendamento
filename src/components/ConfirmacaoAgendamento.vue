<template>
  <v-row class="mb-3">
    <v-col>
      <v-row justify="center">
        <v-expansion-panels popout inset>
          <v-expansion-panel v-for="(item, i) in retornaAgendamentosSelecionados" :key="i">
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <span><b>{{ i + 1 }} - Procedimento:</b>{{ item.descrProcedimento }}</span>
                </v-col>
                <v-col>
                  <span> <b>Data:</b>{{ item.dtAgendamento }}</span>
                </v-col>
                <v-col>
                  <span><b>Hora:</b> {{ item.hrAgendamento }}</span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col lg="6" md="8" sm="12">
                  <b>Convênio:</b> {{ item.nmConvenio || "Nao informado" }}
                </v-col>
                <v-col lg="6" md="8" sm="12">
                  <b>Categoria:</b> {{ item.nmCategoria || "Nao informada" }}
                </v-col>
                <v-col lg="6" md="8" sm="12">
                  <b>Prestador:</b> {{ item.nmPrestador || "Nao informado" }}
                </v-col>
                <v-col lg="6" md="8" sm="12">
                  <b>Instituicao:</b> {{ item.nmHospital || "Nao informado" }}
                </v-col>
                <v-col lg="6" md="8" sm="12">
                  <b>Observacões:</b>
                  {{ item.observacaoAgendamento || "Nao ha observacoes" }}
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters(["buscaAgendamentosSelecionados", "buscaAgendamentosById"]),
      retornaAgendamentosSelecionados() {
        return this.buscaAgendamentosById(this.buscaAgendamentosSelecionados);
      },
    },
  };
</script>