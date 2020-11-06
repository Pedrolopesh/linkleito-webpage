<template>
  <div class="mt-10 container-carousel">

        <v-carousel
            class="mt-3 style-carousel ac"
            height="800"
            hide-delimiter-background
            hide-delimiters
            cycle
        >
          <div class="">
            <h1> Equipe link-leito </h1>
          </div>
        
            <v-carousel-item
            v-for="(item, i) in data"
            :key="i"
            >
            <v-sheet
                class="section-height"
                color="black"
            >
                <!-- height="60%" -->
                <v-card class="p15">
                    <h1>{{ item.name }}</h1>
                </v-card>
                <v-row
                align="center"
                justify="center"
                >
                <div class="p20">
                    <img :src="item.imgSrc" alt="" class="image-size">

                    <span class="subtile-carrousel">{{ item.subTitle }}</span>
                </div>
                </v-row>

                <div class="text-center">
                    <a target="_blank" :href="item.lekedinUrl">
                      <v-btn color="primary" class="mb-8">
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
                subTitle: 'Desenvolvedor Fullstack',
                lekedinUrl: 'https://www.linkedin.com/in/pedro-lopes-50b3b818a/',
            },
            { 
                imgSrc: './Marco.jpg', 
                name:'Marco Antônio', 
                email: 'marcoasjunior90@gmail.com',
                phone: '(48) 98489-2595', 
                subTitle: 'Desenvolvedor Fullstack',
                lekedinUrl: 'https://www.linkedin.com/in/marco-ant%C3%B4nio-da-silva-j%C3%BAnior-153b36152/',
            },
            { 
                imgSrc: './Clovis.jpg', 
                name:'Clovis Tavares', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595', 
                subTitle: 'Professor orientador',
                lekedinUrl: 'https://www.linkedin.com/in/clovis-tavares-pmp-81328a15/',
            },
            { 
                imgSrc: './Batistella.jpg', 
                name:'Paulo Battistella', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595',
                subTitle: 'Professor orientador',
                lekedinUrl: 'https://www.linkedin.com/in/paulo-eduardo-battistella-9222711b/?originalSubdomain=br',
            },
            { 
                imgSrc: './joao.jpg', 
                name:'João Clayton', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595',
                subTitle: 'Coordenador SENAI',
                lekedinUrl: 'https://www.linkedin.com/in/jo%C3%A3o-clayton-aires-aa088511a/',
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
    height: 550px;
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

  .section-height{
    height: 60%;

    @media screen and (max-width: 700px){
      height: 80%;
    }
  }

  .subtile-carrousel{
    font-size: 20px;
  }
</style>