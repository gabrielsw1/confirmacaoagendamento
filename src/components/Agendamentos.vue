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
            :value="item.idAgendamento"
            v-model="selected"
            class="mt-5"
          >
          </v-checkbox>
          {{ item.descrProcedimento }}
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
              >{{ item.nmHospital || "Não Informado" }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Endereço: </span
              >{{ item.logradouro || "Não Informado" }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color="error"
                class="mr-2"
                x-small
                fab
                dark
                @click="openDialog(item)"
              >
                <v-icon dark> mdi-calendar-remove </v-icon>
              </v-btn>
            </template>
            <span>Cancelar Agendamento</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color="yellow darken-3"
                x-small
                fab
                dark
              >
                <v-icon dark> mdi-calendar-arrow-right </v-icon>
              </v-btn>
            </template>
            <span>Transferir Agendamento</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          Cancelamento de Agendamento
        </v-card-title>

        <v-card-text>
          Tem certeza que deseja cancelar o agendamento do dia
          <b>{{ cancelItem.dtAgendamento }}</b> as
          <b>{{ cancelItem.hrAgendamento }}</b> ?
          <v-select
            :items="retornaMotivosCancelamento"
            item-text="descricaoMotivoCancelamento"
            item-value="idMotivoCancelamento"
            label="Selecione o motivo do cancelamento"
            :loading="loading"
          ></v-select>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Fechar
          </v-btn>

          <v-btn color="error" text @click="dialog = false"> Confirmar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Agendamentos",
  props: ["agendamentos"],
  data() {
    return {
      dialog: false,
      selected: [],
      cancelItem: {},
      loading: false
    };
  },
  watch: {
    selected(newValue) {
      this.$store.commit("agendamentosSelecionados", newValue);
    },
  },
  mounted() {
    this.selected = [];
  },
  computed: {
    ...mapGetters(["retornaMotivosCancelamento"]),
  },
  methods: {
    ...mapActions(["buscaMotivosCancelamento"]),
    openDialog(item) {
      this.cancelItem = item;
      this.dialog = true;
      this.loading = true
      this.buscaMotivosCancelamento();
      this.loading = false
      
    },
  },
};
</script>

<style scoped>
</style>