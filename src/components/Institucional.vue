<template>
  <v-row>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="400" elevation="12">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://archconsultoria.com.br/wp-content/uploads/2018/04/novos-cursos-de-medicina.jpg"
        >
          <v-card-title>1 Transplante de Cabeca</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Cirurgia </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Primeiro transplante de cabeca realizado pelo medico blabalbal</div>
        </v-card-text>

        <div class="text-center">
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            dense
          ></v-rating>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://lh3.googleusercontent.com/proxy/JEPErmna_xH1SjAtYh7w13QnyWBJq0Xl9Yq_F6A_v6POf1_2MKryqeBEkh3CFLa3tugGr8XdF2PGdJMRkIUUfya0tphV2ngfMwiorCosfPPBgDmV3Du0oojGnLihYUdeCToq3Mc",
        },
        {
          src:
            "https://clinicanasnuvens.com.br/blog/wp-content/uploads/2019/09/tecnicas-de-organizacao-para-recepcao-de-clinicas-718x350.jpeg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>