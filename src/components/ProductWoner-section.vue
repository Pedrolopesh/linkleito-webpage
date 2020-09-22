<template>
  <div class="mt-20">

        <v-carousel
            class="mt-3 style-carousel ac"
            cycle
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
        >

            <h1> Equipe Responsavel </h1>
        
            <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            >
            <v-sheet
                :color="colors[i]"
                height="100%"
            >
                <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                    <div class="display-3">
                        <div class="container-carrousel">
                            <img :src="item.imgSrc" alt="">
                            <div class="ml-6">
                                {{ item.name }}
                                <span class="mt-1 d-block subtitle">{{ item.subTitle }}</span>
                                
                                <span class="d-block">
                                    <v-icon class="mt-4 mr-1"> mdi-whatsapp </v-icon><span class="descriptions">{{ item.phone }}</span>
                                </span>
                                
                                <span class="d-block">
                                    <v-icon class="mt-4 mr-1"> mdi-email </v-icon><span class="descriptions">{{ item.email }}</span>
                                </span>

                                <span class="d-block">
                                    
                                    <v-btn class="ml-2">
                                        <a :href="item.lekedinUrl" target="_blank">
                                            <v-icon> mdi-linkedin </v-icon> 
                                        </a>
                                    </v-btn>
                                    
                                    <!-- <v-btn class="ml-2"><v-icon> mdi-facebook </v-icon> </v-btn> -->
                                    <!-- <v-btn class="ml-2"><v-icon> mdi-instagram </v-icon> </v-btn> -->
                                </span>
                            </div>
                        </div>
                    </div>

                </v-row>
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
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
            {
                imgSrc: 'https://avatars2.githubusercontent.com/u/47143677?s=460&v=4', 
                name:'Pedro Lopes', 
                email: 'pedrolopeshls99@gmail.com', 
                phone: '(48) 999422614', 
                subTitle: 'Desenvolvedor Front-end Vue js, e Designer interface',
                lekedinUrl: 'https://www.linkedin.com/in/pedro-lopes-50b3b818a/',
            },
            { 
                imgSrc: 'https://res.cloudinary.com/dxblalpv2/image/upload/v1590084958/me_udkvmr.jpg', 
                name:'Marco Antônio', 
                email: 'marcoasjunior90@gmail.com',
                phone: '(48) 98489-2595', 
                subTitle: 'Desenvolvedor Fullstack Vue, Node, MongoDB',
                lekedinUrl: 'https://www.linkedin.com/in/marco-ant%C3%B4nio-da-silva-j%C3%BAnior-153b36152/',
            },
            { 
                imgSrc: 'https://res.cloudinary.com/dxblalpv2/image/upload/v1590157243/clo_gac9pl.jpg', 
                name:'Clovis Tavares', 
                email: 'marcoasjunior90@gmail.com', 
                phone: '(48) 98489-2595', 
                subTitle: 'Especialista em Educação, Geoprocessamento, Tecnologia e Gestão de Projetos',
                lekedinUrl: 'https://www.linkedin.com/in/clovis-tavares-pmp-81328a15/',
            },
            { 
                imgSrc: 'https://res.cloudinary.com/dxblalpv2/image/upload/v1590157241/bat_um1pm6.jpg', 
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