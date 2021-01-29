<template>
  <v-main class="gradient">
    <v-row class="align-center justify-center" style="height: 100%">
      <v-col cols="4">
        <v-card rounded elevation="12">
          <v-card-title class="justify-center">
            Confirmacao de Agendamento
          </v-card-title>
          <v-card-text >
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Informe o CPF"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Informe sua Data de Nascimento"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn elevation="4"  min-width="100%"> Continuar </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "Login.vue"
}
</script>

<style scoped>
.gradient{
  background: #1f4037;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>