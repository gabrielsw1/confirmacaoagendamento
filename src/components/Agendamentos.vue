<template>
  <v-row>
    <v-col v-for="item in agendamentos" :key="item.id" xl="2" lg="4" md="6" sm="12">
      <v-card elevation="6" color="red lighten-5">
        <v-toolbar dense flat color="red lighten-2">
          <span class="font-weight-bold">Item Agendamento:</span> {{ item.nome }}
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <v-chip label color="red" dark small>{{ item.status }}</v-chip>
            </v-col>
            <v-col lg="6" md="8" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Data: </span>{{ item.dia || 'Nao Informada' }}
            </v-col>
            <v-col lg="6" md="8" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Hora: </span>{{ item.hora || 'Nao Informada' }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Medico: </span>{{ item.medico || 'Nao Informado' }}
            </v-col>
            <v-col lg="12" md="12" sm="12" class="ma-0 pa-1">
              <span class="font-weight-bold"> Endereco: </span>{{ item.endereco || 'Nao Informado' }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn-toggle rounded dense>
            <v-btn  color="teal lighten-1" elevation="3" >
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
  props:['agendamentos'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>