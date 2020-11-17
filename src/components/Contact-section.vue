<template>
    <div>
        <div class="container-sides-contact p20 mt-20">
            <div class="container-left ac">
                <h1 class="mb-4">Contato</h1>

                <v-text-field
                    v-model="contact.name"
                    :rules="nameRules"
                    color="error"
                    label="Nome"
                    outlined
                ></v-text-field>

                <v-text-field
                    v-model="contact.email"
                    :rules="emailRules"
                    color="error"
                    label="E-mail"
                    outlined
                ></v-text-field>

                <v-text-field
                    v-model="contact.whatsapp"
                    label="whatsapp"
                    color="error"
                    outlined
                ></v-text-field>

                <v-textarea
                    outlined
                    color="error"
                    v-model="contact.message"
                    label="Mensagem"
                ></v-textarea>


                <div class="ac" align="center">
                    <v-btn :loading="loading" @click="sendEmail()" color="error">
                        Enviar
                    </v-btn>
                </div>

            </div>

            <div class="container-rigth ac">
                <img :src="sourceImg" alt="" class="ac image-contact-size mt-16-5">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data:() => ({
        sourceImg:'./logotype.png',
        url: process.env.VUE_APP_SERVICES_URL,
        contact:{
            name:'',
            email:'',
            whatsapp:'',
            message:'',
        },
        loading: false,
        nameRules: [
            v => !!v || 'Preciso preencher',
        ],
        emailRules: [
            v => !!v || 'Preciso preencher',
            v => /.+@.+/.test(v) || 'Necessário email válido',
        ],
    }),
    computed: {
    },
    methods:{
        sendEmail(){
            this.loading = true
            let body = this.contact
            console.log(body)

            this.$http.post(this.url + '/send/email', body)
            .then(resp => {
                console.log(resp)
                if(resp.data.success == true){
                    this.$vs.notification({
                        color: 'success',
                        title: 'Mensagem enviado com successo',
                        text: `Obrigado por entrar em contato, iremos te retornar em breve.`
                    })
                    this.loading = false

                }else{
                    this.$vs.notification({
                        color: 'danger',
                        title: 'Erro ao enviar email',
                        text: `Houve algum problema durante o envio do email, tente novamente!`
                    })
                    this.loading = false
                }
            })
            .catch(err => {
                console.log(err)
                    this.$vs.notification({
                        color: 'danger',
                        title: 'Erro ao enviar email',
                        text: `Houve algum problema durante o envio do email, tente novamente!`
                    })
                this.loading = false
            })
        }

    }
}
</script>
<style lang="scss">
    .image-contact-size{
        display: block;
        max-width: 100%;
        width: 100%;
    }

    .container-sides-contact{
    display: flex;

    @media screen and (max-width:700px) {
        flex-direction: column-reverse;
    }

    .container-left{
        max-width: 70%;
        width: 430px;

        @media screen and (max-width:700px) {
            margin-top: 100px;
            max-width: 100%;
        }
    }
    
    .container-rigth{
        max-width: 30%;

        @media screen and (max-width:700px) {
            max-width: 100%;
        }
    }
}
</style>