<template>
    <div class="mt-20">
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
                
                <h2 class="mt-2 mb-3">{{ item.title }}</h2>
                
                <p>{{ item. description }}</p>

            </div>
        </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data:() => ({
        itens:[
            {imgSrc: './icons-mission-01.svg', title: 'Como funciona?', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea perspiciatis neque ipsam omnis suscipit ad delectus, ratione consectetur id modi repudiandae commodi porro quaerat laboriosam qui odit aperiam aliquam!'},
            {imgSrc: './icons-mission-02.svg', title: 'Para quem?', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea perspiciatis neque ipsam omnis suscipit ad delectus, ratione consectetur id modi repudiandae commodi porro quaerat laboriosam qui odit aperiam aliquam!'},
            {imgSrc: './icons-mission-03.svg', title: 'Sobre o projeto', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea perspiciatis neque ipsam omnis suscipit ad delectus, ratione consectetur id modi repudiandae commodi porro quaerat laboriosam qui odit aperiam aliquam!'},
        ]
    })    
}
</script>