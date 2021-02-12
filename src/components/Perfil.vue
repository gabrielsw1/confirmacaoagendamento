<template>
  <v-card class="px-9" elevation="5">
    <v-card-title>
      <v-icon class="mr-2" color="primary">mdi-card-account-details</v-icon>
      Dados Pessoais
    </v-card-title>
    <v-divider />
    <DadosPessoais />
    <v-btn class="mb-4 mr-2" color="primary"> Salvar </v-btn>
    <v-btn class="mb-4 mr-2" text> Cancelar </v-btn>
  </v-card>
</template>
<script>
  import DadosPessoais from "@/components/DadosPessoais";
  export default {
    components: {
      DadosPessoais
    },
  };
</script>