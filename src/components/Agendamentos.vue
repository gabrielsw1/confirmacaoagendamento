<template>
  <v-row>
    <v-col v-for="item in agendamentos" :key="item.id" xl="2" lg="4" md="6" sm="12">
      <v-card elevation="6" color="red lighten-5">
        <v-toolbar dense flat color="red lighten-2">
          <span class="font-weight-bold">Item Agendamento:</span> {{ item.nome }}
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col lg="12" md="12" sm="12">
              <v-chip label color="red" dark small>{{ item.status }}</v-chip>
            </v-col>
            <v-col lg="6" md="8" sm="12">
              <span class="font-weight-bold"> Data: </span>{{ item.dia || 'Nao Informada' }}
            </v-col>
            <v-col lg="6" md="8" sm="12">
              <span class="font-weight-bold"> Hora: </span>{{ item.hora || 'Nao Informada' }}
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <span class="font-weight-bold"> Medico: </span>{{ item.medico || 'Nao Informado' }}
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <span class="font-weight-bold"> Endereco: </span>{{ item.endereco || 'Nao Informado' }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn-toggle rounded dense>
            <v-btn  color="teal lighten-1" elevation="3">
              Confirmar
            </v-btn >
            <v-btn  color="teal lighten-1" elevation="3">
              Transferir
            </v-btn>
            <v-btn  color="teal lighten-1" elevation="3">
              Cancelar
            </v-btn>
          </v-btn-toggle>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Agendamentos",
  data() {
    return {
      agendamentos: [
        {
          id: 1,
          nome: 'Teste de HIV',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'
        },
        { id: 2,
          nome: 'Teste de COVID',
          dia: '28/01/12',
          hora: '13:00',
          medico: 'Medico Teste',
          endereco: 'Rua Teste, 123',
          status: 'Pagamento nao realizado'},
      ]
    }
  }
}
</script>

<style scoped>

</style>