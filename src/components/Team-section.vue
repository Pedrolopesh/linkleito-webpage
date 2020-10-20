<template>
  <div class="container-refers ac">

    <h1 class="alg-txt-c">Time</h1>

    <!-- <v-card max-width="300"> -->
        <!-- <img src="https://avatars2.githubusercontent.com/u/47143677?s=460&v=4" alt="Imagem pedro"> -->
    <!-- </v-card> -->

      <template>
        <v-carousel
          cycle
          height="400"
          max-width="900"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="50%"
            >

              <v-card>
                <h1>Pedro Lopes</h1>
              </v-card>

              <v-row
                align="center"
                justify="center"
              >
                <div class="display-3">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </template>
    

  </div>
</template>

<script>

  export default {
    data:() => ({
        dialog: false,

        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    })
  }
</script>

<style>
.container-refers{
  max-width: 100%;
  width: 100%;
}
</style>
