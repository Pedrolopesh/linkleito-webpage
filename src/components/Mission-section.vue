<template>
    <div class="mt-17 section-red">
        <v-row class="mb-6 p20 brake-small container ac">
        <v-col
            v-for="(item, i) in itens"
            :key=i
        >
            <div
            class="container-descriptions"
            tile
            >
                <span class="container-icon">
                    <img :src="item.imgSrc" alt="Conections app" class="img-size-25">
                </span>
                
                <h2 class="clr-whi mt-2 mb-3">{{ item.title }}</h2>
                
                <p class="clr-whi">{{ item. description }}</p>

            </div>
        </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data:() => ({
        itens:[
            {imgSrc: './icons-mission-01.svg', title: 'Como funciona?', description: 'O app conta com o acesso a usuários que fazem parte da equipe do Hospital, no Link Leito é possível registrar pacientes, internar nas unidades cadastradas, transferir para outras unidades ou de outros leitos, dar altas, direcionar os leitos para a equipe de limpeza entre outras utilidades que se complementam.'},
            {imgSrc: './icons-mission-02.svg', title: 'Para quem?', description: 'O aplicativo foi desenvolvido com o intuito de atender a Hospitais que precisam melhorar seus processos tanto o atendimento do paciente e seu acompanhamento e até as equipes que fazem parte do hospital para que todos possam ter uma qualidade e eficiência.'},
            {imgSrc: './icons-mission-03.svg', title: 'Sobre o projeto', description: 'O Link Leito é um projeto que nasceu a partir da idea de se criar um impacto social na vida de todos, nossa missão é fazer com que todos tenham uma melhor experiência no hospital, tanto os pacientes quanto a equipe de profissionais do hospital em questão.'},
        ]
    })    
}
</script>
<style lang="scss">
.section-red{
    display: block;
    background-color: #ff6f6a;
    padding: 140px;

    @media screen and (max-width: 700px){
        padding: 40px;
    }
    // min-height: 500px;   
}
</style>