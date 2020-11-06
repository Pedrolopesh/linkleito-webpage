<template>
    <div>

        <div class="alg-txt-c">
            <v-spacer class="mt-20"></v-spacer>
            <!-- <h1>SOBRE O PROJETO</h1> -->
        </div>

        <div class="container-app-section brake-small ac p20">
            
            <div class="container-right-img">
                
                <h1>O aplicativo Link Leito</h1>
                
                <p class="mt-3">
                    O aplicativo atualmente está em uso pela equipe do Hospital Infantil Joana de Gusmão em florianópolis, as equipes da emergência, NIR e limpeza utilizam o aplicativo atualmente na unidade D do hospital. O app conta com diversas funcionalidades, dês do registro do paciente que precisa ser atendido até a gestão do Hospital como um todo, a ideia inicial que motivou a equipe de desenvolvimento a realizar este projeto foi a dificuldade em fazer a gestão do hospital de maneira eficiente e que ajude todos os pacientes e a própria equipe do hospital a realizar atendimento mais eficaz e rápida podendo assim ter uma sincronia com todos os envolvidos do processo que faz o atendimento do paciente. 
                </p>
            
            <div class="mt-9">
                <h2>Conheça a equipe que tecnicas e mentores do desenvolvimento desse projeto</h2>
                <vs-button gradient size="large" class="mt-3" @click="teamModal = true">
                    Conheça a equipe
                </vs-button>
            </div>


            </div>


            <div class="container-left-text">
                <img src="../../public/img-1.png" alt="Hospital Tech" class="ml-a img-size">
            </div>
        </div>


        <vs-dialog blur v-model="teamModal">
            <Team/>
        </vs-dialog>

    </div>
</template>
<script>
import Team from './ProductWoner-section'
export default {
    components:{
        Team
    },
    data:() =>({
        teamModal: false
    })
}
</script>
<style lang="scss">
    .team-dialog{
        div{
            max-width: 60%;
            width: 60%;
        }
    }
</style>