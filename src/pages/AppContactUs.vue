<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    name: 'AppContactUs',
    components: {
        ContactForm
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>Contattaci!</h3>
                Ti risponderemo il prima possibile.
            </div>
        </div>

        <ContactForm />
    </div>
</template>

<style lang="scss">
    
</style>