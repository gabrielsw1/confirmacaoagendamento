<template>
  <v-card>
    <v-tabs
        v-model="tab"
        centered
        dark
        background-color="teal lighten-2">
      <v-tabs-slider></v-tabs-slider>
      <v-tab :href="'#pendentes'">
        <v-badge
            color="orange lighten-1"
            :content="agendamentosPendentes.length"
        >
          Pendentes
        </v-badge>
      </v-tab>
      <v-tab :href="'#confirmados'">
        <v-badge
            color="green"
            :content="agendamentosConfirmados.length"
        >
          Confirmados
        </v-badge>
      </v-tab>
      <v-tab :href="'#cancelados'">
        <v-badge
            color="red darken-2"
            :content="agendamentosCancelados.length"
        >
          Cancelados
        </v-badge>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="pendentes">
        <v-card flat color="grey lighten-4">
          <v-card-text>
            <Agendamentos :agendamentos="agendamentosPendentes"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="confirmados">
        <v-card flat color="grey lighten-4">
          <v-card-text>
            <Agendamentos :agendamentos="agendamentosConfirmados"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="cancelados">
        <v-card flat color="grey lighten-4">
          <v-card-text>
            <Agendamentos :agendamentos="agendamentosCancelados"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>

import Agendamentos from "@/components/Agendamentos";

export default {
  name: "Tabs",
  components: {Agendamentos},
  data() {
    return {
      tab: null,
      agendamentosPendentes: [
        {
          id: 1,
          nome: 'Teste de HIV',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
        {
          id: 2,
          nome: 'Teste de COVID',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
        {
          id: 1,
          nome: 'Teste de HIV',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
      ],
      agendamentosConfirmados: [
        {
          id: 2,
          nome: 'Teste de COVID',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
      ],
      agendamentosCancelados: [
        {
          id: 2,
          nome: 'Teste de COVID',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>