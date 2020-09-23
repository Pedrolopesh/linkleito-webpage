<template>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Link Leito </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="mt-1 d-flex">
        <v-icon v-if="darkTheme">mdi-lightbulb-outline</v-icon>
        <v-icon v-else>mdi-lightbulb</v-icon>
          <v-switch
            class="mt-4"
            color="error"
            v-model="darkTheme"
            :label="switchName"
          ></v-switch> 
      </div>

      <!-- <v-btn>
        <v-icon>mdi-home</v-icon><span class="ml-2">Home</span>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

    </v-toolbar>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
      darkTheme: false,
      switchName:'Luzes acessas'
    }),

    methods:{

    },

    watch:{
      darkTheme(){
          if(!this.darkTheme){
            this.$vuetify.theme.dark = false
            this.switchName = 'Luzes acessas'
            
          }else{
            this.$vuetify.theme.dark = true
            this.switchName = 'Luzes apagadas'
          }
      }
    }
  }
</script>
