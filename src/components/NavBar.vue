<template>
    <div dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  <v-toolbar>
      <v-toolbar-title> Link Leito </v-toolbar-title>

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
    </v-toolbar>

    </div>
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
