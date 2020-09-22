<template>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Link Leito </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="my-2">
        <v-btn small color="error" @click="changeTheme">change to dark</v-btn>
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
      
    }),

    methods:{
      changeTheme(){
        if(this.$vuetify.theme.dark){
          this.$vuetify.theme.dark = false
        }else{
          this.$vuetify.theme.dark = true
        }
      }
    }
  }
</script>
