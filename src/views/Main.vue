<template>
  <v-layout>
    <v-app-bar color="grey lighten-4" dense app>
      
      <v-app-bar-title>
      
        <span class="font-weight-bold" style="color: #1976d2">MV</span><span class="font-weight-light"><b>Hospidata</b>
          - Confirmação de Agendamentos</span>
      
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn plain to="posts" active-class="active-class">Posts</v-btn>
      
      <v-btn plain to="institucional" active-class="active-class">Institucional</v-btn>
      
      <v-badge bordered color="error" overlap :content="countAgendamentos" class="mr-4 mt-0">
        <v-btn plain to="agendamentos" active-class="active-class">Agendamentos</v-btn>
      </v-badge>
      
      <v-menu offset-y>
        
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-divider vertical />
        </template>

        <v-list>
          <v-list-item :to="item.to" v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  
    <v-container>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        items: [{
            title: "Perfil",
            to: "/perfil",
          },
          {
            title: "Historicos",
            to: "/historico",
          },
          {
            title: "Pagamentos",
            to: "/pagamentos",
          },
          {
            title: "Sair",
          },
        ],
      };
    },
    computed: {
      countAgendamentos() {
        return this.$store.state.paciente.agendamentos.length;
      },
    },
  };
</script>

<style scoped>
  .active-class {
    text-decoration: underline 3px;
    text-decoration-color: #1976d2;
  }
</style>