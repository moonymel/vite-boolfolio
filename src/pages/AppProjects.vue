<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number) {
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

        <!-- TITOLO  -->
        <div class="my-title">
            My projects
            <div class="my-subtitle d-flex">
                <div class="my-sub-line align-self-center me-3">
                </div>
                <div>
                    just a click away
                </div>
            </div>
        </div>

        <!-- CONTAINER PRINCIPALE -->
        <div class="my-proj-container rounded-4">
            <div class="row">

            <!-- SINGOLA CARD CICLATA  -->
            <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
            </div>
        </div>

        <!-- BOTTONI NAVIGAZIONE -->
        <div class="text-center my-3">
            <button :class="currentPage == 1 ? 'button-purple disabled' : ''" class="button-orange me-3" @click="getProjects(currentPage - 1)">
                <
                <span></span><span></span><span></span><span></span>
            </button>
            <button :class="currentPage == lastPage ? 'button-purple disabled' : ''" class="button-orange" @click="getProjects(currentPage + 1)">
                >
                <span></span><span></span><span></span><span></span>
            </button>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;


.my-proj-container {
    background-color: $light_bg;
    padding: 50px;
}
</style>./SingleProject.vue/index.js../components/ProjectCard.vue/index.js