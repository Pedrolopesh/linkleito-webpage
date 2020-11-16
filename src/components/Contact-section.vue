<template>
    <div>
        <div class="container-sides-contact p20 mt-20">
            <div class="container-left ml-a mr-1">
                <h1>Contato</h1>

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
                <v-btn color="error">
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
export default {
    data:() => ({
        sourceImg:'./logotype.png',
        contact:{
            name:'',
            email:'',
            whatsapp:'',
            message:'',
        },
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    })
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