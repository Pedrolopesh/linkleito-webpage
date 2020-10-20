<template>
  <div class="mt-10 container-carousel">

        <v-carousel
            class="mt-3 style-carousel ac"
            height="600"
            hide-delimiter-background
            cycle
            show-arrows-on-hover
        >
          <div class="container-carousel">
            <h1> Equipe Responsavel </h1>
          </div>
        
            <v-carousel-item
            v-for="(item, i) in data"
            :key="i"
            >
            <v-sheet
                class=""
                color="black"
                height="70%"
            >
                <v-card class="p15">
                    <h1>{{ item.name }}</h1>
                </v-card>
                <v-row
                align="center"
                justify="center"
                >
                <div class="p20">
                    <img :src="item.imgSrc" alt="" class="image-size">
                </div>
                </v-row>

                <div class="text-center">
                    <a target="_blank" :href="item.lekedinUrl">
                      <v-btn color="primary">
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </a>
                </div>

            </v-sheet>
            </v-carousel-item>
        </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'black',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        data: [
            {
                imgSrc: './Pedro.jpg', 
                name:'Pedro Lopes', 
                email: 'pedrolopeshls99@gmail.com', 
                phone: '(48) 999422614', 
                subTitle: 'Desenvolvedor Front-end Vue js, e Designer interface',
                lekedinUrl: 'https://www.linkedin.com/in/pedro-lopes-50b3b818a/',
            },
            { 
                imgSrc: './Marco.jpg', 
                name:'Marco Antônio', 
                email: 'marcoasjunior90@gmail.com',
                phone: '(48) 98489-2595', 
                subTitle: 'Desenvolvedor Fullstack Vue, Node, MongoDB',
                lekedinUrl: 'https://www.linkedin.com/in/marco-ant%C3%B4nio-da-silva-j%C3%BAnior-153b36152/',
            },
            { 
                imgSrc: './Clovis.jpg', 
                name:'Clovis Tavares', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595', 
                subTitle: 'Especialista em Educação, Geoprocessamento, Tecnologia e Gestão de Projetos',
                lekedinUrl: 'https://www.linkedin.com/in/clovis-tavares-pmp-81328a15/',
            },
            { 
                imgSrc: './Batistella.jpg', 
                name:'Paulo Battistella', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595',
                subTitle: 'Ph. D. Computer Science',
                lekedinUrl: 'https://www.linkedin.com/in/paulo-eduardo-battistella-9222711b/?originalSubdomain=br',
            },
        ],
      }
    },

    methods:{
        redirectLinkedin(){},

        redirectFacebook(){},

        redirectInstagram(){}
    }
  }
</script>
<style lang="scss">
  .container-carousel{
    display: block;
    min-height: 100px;
    max-width: 100%;
    width: 500px;
  }

  .image-size{
    display: block;
    max-width: 100%;
    width: 250px;
    height: 250px;
  }
</style>