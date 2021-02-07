<template>
  <v-main>
    <v-row>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.nome" label="Nome"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.sexo" label="Sexo"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field
          cols="12"
          v-model="perfil.dtNascimento"
          label="Data de Nascimento"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field readonly :value="perfil.cpf | CPF " label="CPF"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.mae" label="Nome da Mãe"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.pai" label="Nome do Pai"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field
          append-icon="mdi-magnify"
          v-model="perfil.endereco.cep"
          label="Digite o CEP"
          :loading="loadind"
          @click:append="buscaEndereco(perfil.endereco.cep)"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.tipoLogradouro"
          label="Tipo"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field v-model="perfil.endereco.uf" label="UF"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.end"
          label="Logradouro"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.bairro"
          label="Bairro"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.cidade"
          label="Cidade"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.numero"
          label="Numero"
        ></v-text-field>
      </v-col>
         <v-col cols="12" lg="4" md="8" sm="12">
        <v-text-field
          v-model="perfil.endereco.complemento"
          label="Complemento"
          placeholder="Ex.: apto 101"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  },
  methods: {
    ...mapActions(["buscaPorCEP"]),
    buscaEndereco(cep) {
      this.loading = true;
      this.buscaPorCEP(cep);
      this.loading = false;
    },
  },
  filters:{
    CPF(cpf){
      return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
  }
};
</script>