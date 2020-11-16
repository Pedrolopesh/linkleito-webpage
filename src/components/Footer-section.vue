<template>
  <v-footer
    class="1"
    dark
    padless
    
  >
    <v-card
      flat
      tile
      class="mw-w-100 error lighten-1 white--text text-center"
    >
      <v-card-text>
        <a target="_blank" href="https://www.instagram.com/hospitalinfantilhijg/">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        </a>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Todos os direitos reservados © 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Link Leito</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-instagram',
      ],
    }),
  }
</script>