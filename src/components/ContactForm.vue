<script>
import { store } from '../store.js';

export default {
    name: 'ContactForm',
    data(){
        return {
            store, 
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
            loading: false,
            success: false
        }
    },

    methods: {
        sendForm() {
            const data = {
                name: this.name, 
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            this.errors = {}

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(response.data.success) {
                    this.name = "";
                    this.surname = "";
                    this.success = true;
                }
                else {
                    this.errors = response.data.errors; 
                }
                
                this.loading = false 
            });
        }

    }
}
</script>

<template lang="">
    <div>
        <div v-if="success">
            <div class="alert alert-success">
                Email inviata con successo 
            </div>
        </div>
        <form @submit.prevent="sendForm()" method="POST">
            <label></label>
            <input type="text" placeholder="Nome" class="form-control" :class="errors && errors.name ? 'is-invalid' : ''" v-model="name">
            <button type="submit" :disabled="loading">
                {{ loading ? 'Invio in corso..' : 'Invia' }}
            </button>
        </form>
        <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
            {{ error }}
        </p>

    </div>
</template>

<style lang="">
    
</style>