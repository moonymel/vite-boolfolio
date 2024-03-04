<script>
import SingleProject from '../components/SingleProject.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        SingleProject
    },
    data(){
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created(){
        this.getProjects();
    },
    methods: {
        getProjects(page_number){
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
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
        <div class="text-center my-3">
            <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-dark btn-sm btn-square me-3" @click="getProjects(currentPage - 1)">
                <
            </button>
            <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-dark btn-sm btn-square" @click="getProjects(currentPage + 1)">
                >
            </button>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>./SingleProject.vue/index.js