<script>
import { store } from '../store.js';
import axios from 'axios';


export default {

    name: 'SingleProject',

    data() {
        return {
            store,
            project: null,
            success: null,
        }
    }, 
    created(){
        this.getProjectData();
    },
    methods: {
        getProjectData() {
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success) {
                    this.project = response.data.project;
                    this.success = response.data.success;
                }
                else {
                    this.$router.push({ name: 'not-found' });
                }
            });
        }
    }
    
}
</script>

<template lang="">
    <div>
        <div class="container">
            <div class="row" v-if="success == true">
                <div class="col-12 text-center">
                    prova prova prova
                    <h6>{{ project.title }}</h6>
                </div>
            </div>
            <div class="row" v-else>

            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>