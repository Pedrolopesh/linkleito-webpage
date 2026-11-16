<template>
    <div class="mt-15">
        <div class="section-grey">
            
            <h1 class="alg-txt-c mb-10">Onde Link Leito foi Notícia</h1>

            <div class="d-flex ac brake-small">
                <div v-for="(itens, i) in firstMidiaData" :key="i" class="ac mt-15">
                    <a :href="itens.sourceLink" target="_blank" rel="noopener noreferrer">
                        <img :src="itens.sourceImages" :alt="itens.altName" :class="itens.customClass" class="img-midia-size">
                    </a>
                </div>
            </div>

            <div class="d-flex ac brake-small">
                <div v-for="(itens, i) in secondMidiaData" :key="i" class="ac mt-7">
                    <a :href="itens.sourceLink" target="_blank" rel="noopener noreferrer">
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
        // Só ficam as matérias que ainda estão no ar. Os logos ficam no próprio site (public/midia)
        // para não quebrarem quando os veículos mudam os arquivos de lugar.
        firstMidiaData: [
            {
                sourceImages: './midia/saude-sc.png',
                altName:'Secretaria de Estado da Saúde de Santa Catarina',
                sourceLink:'https://www.saude.sc.gov.br/index.php/noticias-geral/11771-aplicativo-link-leito-controla-fluxo-de-pacientes-no-hijg',
                customClass:''
            },
            {
                sourceImages: './midia/fiesc.png',
                altName:'FIESC',
                sourceLink:'https://fiesc.com.br/pt-br/imprensa/app-criado-por-estudantes-do-senai-controla-lotacao-do-hospital-infantil',
                customClass:''
            },
            {
                sourceImages: './midia/sbt.svg',
                altName:'SBT (SCC SBT)',
                sourceLink:'https://www.youtube.com/watch?v=o01xFu0Fu6E&feature=youtu.be&ab_channel=SCCSBT',
                customClass:'img-midia-round'
            },
        ],
        secondMidiaData:[
            {
                sourceImages: './midia/tv-barriga-verde.png',
                altName:'TV Barriga Verde',
                sourceLink:'https://www.youtube.com/watch?v=tjca9Od6oGw&ab_channel=TVBARRIGAVERDE',
                customClass:''
            },
            {
                sourceImages: './midia/imagem-da-ilha.png',
                altName:'Imagem da Ilha',
                sourceLink:'https://www.imagemdailha.com.br/noticias/cidade/controle-de-pacientes-aplicativo-desenvolvido-por-estudantes-evita-lotacao-no-hospital-infantil-da-capital.html',
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
.img-midia-round{
    width: 84px;
    max-width: 84px;
}
.img-midia-size-custom{
    max-width: 190px;
    width: 100%;
}
</style>