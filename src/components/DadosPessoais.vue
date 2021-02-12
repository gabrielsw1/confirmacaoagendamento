<template>
  <v-main>
    <v-row>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field dense v-model="perfil.nome" label="Nome*" required></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.sexo" label="Sexo*" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field cols="12" v-model="perfil.dtNascimento" label="Data de Nascimento*" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field readonly :value="perfil.cpf | CPF" label="CPF*" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.mae" label="Nome da Mãe" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.pai" label="Nome do Pai" dense></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field append-icon="mdi-magnify" v-model="perfil.endereco.cep" label="Digite o CEP"
          @click:append="buscaEndereco(perfil.endereco.cep)" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="1" md="4" sm="12">
        <v-text-field v-model="perfil.endereco.uf" label="UF" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.endereco.end" label="Logradouro" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="4" sm="12">
        <v-text-field v-model="perfil.endereco.bairro" label="Bairro" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field v-model="perfil.endereco.cidade" label="Cidade" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="1" md="8" sm="12">
        <v-text-field v-model="perfil.endereco.numero" label="Numero" dense></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" md="8" sm="12">
        <v-text-field v-model="perfil.endereco.complemento" label="Complemento" placeholder="Ex.: apto 101" dense>
        </v-text-field>
      </v-col>
    </v-row>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
  </v-main>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      ...mapGetters(["buscaDadosPaciente"]),
      perfil() {
        return this.buscaDadosPaciente;
      },
      alert() {
        if (this.buscaDadosPaciente.endereco.err) {
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      ...mapActions(["buscaPorCEP"]),
      async buscaEndereco(cep) {
        this.loading = true;
        await this.buscaPorCEP(cep);
        this.loading = false;
      },
    },
    filters: {
      CPF(cpf) {
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      },
    },
  };
</script>