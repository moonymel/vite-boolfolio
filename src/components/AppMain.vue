<script>
import SingleProject from './SingleProject.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        SingleProject
    },
    data(){
        return {
            store,
            projects: []
        }
    },
    created(){
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results.data;
            })
        }
    }
}
</script>

<template lang="">
    <div class="container my-4">
        <div class="text-center my-3">
            <h3>I miei progetti</h3>
        </div>
        <div class="row">
            <SingleProject v-for="project, index in projects" :key="index" :project="project" />
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>./SingleProject.vue/index.js