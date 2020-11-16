<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar/>

    <div class="container-home-intro brake-small-reverse p20">

      <div class="container-left-texts">
        <div class="text-intro">
          
          <h1 class="font-size-60">Link Leito</h1>
          
          <h3 class="mt-1">Gestão de leitos</h3>

          <p class="mt-3">Uma maneira inteligente e simples de solucionar e reformular o ecossistema hospitalar, confira aqui mais informações sobre o aplicativo, a equipe por trás do projeto e mais!</p>
        
          <!-- <v-btn class="mt-4" color="error" rounded>
            Conheça a Equipe
          </v-btn> -->
        </div>
      </div>

      <div class="container-rigth-image">
        <img src="../../public/bg-full.png" alt="Background home" class="img-size-home">
      </div>
    </div>


    <ExplaningSection />

    <MissionSection />

    <AppSection />


    <ContactSection />

    <!-- <TeamSection /> -->
    <MidiaSection />

    <FooterSection />



  </div>
</template>

<script>
// @ is an alias to /src
import svgSet from '../assets/Svgs/cpmSvgs';
import NavBar from '../components/NavBar';
import ExplaningSection from '../components/Explaning-section';
import MissionSection from '../components/Mission-section';
import AppSection from '../components/App-section';
import MidiaSection from '../components/midia-section';
import TeamSection from '../components/ProductWoner-section';
import ContactSection from '../components/Contact-section';
import FooterSection from '../components/Footer-section';

export default {
  name: 'Home',
  components: {
    NavBar,
    MissionSection,
    ExplaningSection,
    AppSection,
    TeamSection,
    MidiaSection,
    ContactSection,
    FooterSection,
  },
  data:() => ({
    svgSet:svgSet,
    darkTheme: false,
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
