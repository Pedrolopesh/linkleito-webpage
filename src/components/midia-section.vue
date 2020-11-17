<template>
    <div class="mt-15">
        <div class="section-grey">
            
            <h1 class="alg-txt-c mb-10">Onde Link Leito foi Notícia</h1>

            <div class="d-flex ac brake-small">
                <div v-for="(itens, i) in firstMidiaData" :key="i" class="ac mt-15">
                    <a :href="itens.sourceLink" target="_blank">
                        <img :src="itens.sourceImages" :alt="itens.altName" :class="itens.customClass" class="img-midia-size">
                    </a>
                </div>
            </div>

            <div class="d-flex ac brake-small">
                <div v-for="(itens, i) in secondMidiaData" :key="i" class="ac mt-7">
                    <a :href="itens.sourceLink" target="_blank">
                        <img :src="itens.sourceImages" :alt="itens.altName" :class="itens.customClass" class="img-midia-size">
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data:() => ({
        firstMidiaData: [
            {
                sourceImages: 'https://www.saude.sc.gov.br/images/stories/website/novologoses2020ok.png', 
                altName:'Governo Santa catarina',
                sourceLink:'https://www.saude.sc.gov.br/index.php/noticias-geral/11771-aplicativo-link-leito-controla-fluxo-de-pacientes-no-hijg',
                customClass:''
            },
            {
                sourceImages: 'http://lageshoje.com.br/wp-content/uploads/2018/05/lages-hoje-logo.png',
                altName:'Lages Hoje',
                sourceLink:'http://lageshoje.com.br/tag/aplicativo-link-leito/',
                customClass:''
            },
            {
                sourceImages: 'https://folhadeflorianopolis.com.br/wp-content/uploads/2019/12/noticias-florianopolis-1.png', 
                altName:'Folha de Florianópolis',
                sourceLink:'https://folhadeflorianopolis.com.br/2020/11/10/aplicativo-link-leito-controla-fluxo-de-pacientes-no-hospital-infantil-de-florianopolis/',
                customClass:''
            },
            {
                sourceImages: 'https://i2.wp.com/www.jornalfloripa.com.br/geral/wp-content/uploads/2020/04/unnamed.png?resize=207%2C62&ssl=1', 
                altName:'Jornal Floripa',
                sourceLink:'https://www.jornalfloripa.com.br/geral/aplicativo-controla-fluxo-de-pacientes-no-hospital-infantil-de-florianopolis/',
                customClass:''
            },
            {
                sourceImages: 'https://fiesc.com.br/sites/default/files/inline-images/FIESC%20WEB%20big.png', 
                altName:'Fiesc', 
                sourceLink:'https://fiesc.com.br/pt-br/imprensa/app-criado-por-estudantes-do-senai-controla-lotacao-do-hospital-infantil',
                customClass:''
            },
        ],
        secondMidiaData:[
            {
                sourceImages: 'https://www.sbt.com.br/assets/images/logo-sbt.png', 
                altName:'TV SBT SCC',
                sourceLink:'https://www.youtube.com/watch?v=o01xFu0Fu6E&feature=youtu.be&ab_channel=SCCSBT',
                customClass:''
            },
            {
                sourceImages: './Tvbv2019.png',
                altName:'TV Barriga Verde',
                sourceLink:'https://www.youtube.com/watch?v=tjca9Od6oGw&ab_channel=TVBARRIGAVERDE',
                secondSourceLink:'https://www.youtube.com/watch?v=GJJhjRMotv0&feature=youtu.be&ab_channel=NossoCanal',
                customClass:''
            },
            {
                sourceImages: 'https://www.nsctotal.com.br/static/logos/color/nsc.svg', 
                altName:'NSC TV',
                sourceLink:'https://www.nsctotal.com.br/noticias/app-criado-por-estudantes-do-senai-controla-lotacao-de-hospital-infantil',
                customClass:''
            },
            {
                sourceImages: 'http://www.imagemdailha.com.br/pages/imgilha2016/images/img/logo.png', 
                altName:'Jornal imagemdailha',
                sourceLink:'http://www.imagemdailha.com.br/noticias/cidade/controle-de-pacientes-aplicativo-desenvolvido-por-estudantes-evita-lotacao-no-hospital-infantil-da-capital.html',
                customClass:''
            },
        ]
    })
}
</script>
<style lang="scss">
.section-grey{
    display: block;
    background-color:#e2e2e2;
    // background-color: #009ddf;
    padding: 100px;
    // min-height: 500px;   
}
.img-midia-size{
    max-width: 190px;
    width: 100%;
}
.img-midia-size-custom{
    max-width: 190px;
    width: 100%;
}
</style>