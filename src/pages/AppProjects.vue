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
            selectedTechnologyId: null
        }
    },
    created() {
        this.getProjects();
    },
    computed() {
        this.displayedProjects()
    },
    methods: {

        displayedProjects() {
            // se selectedTechnologyId è null, visualizza tutti i progetti,
            // altrimenti filtra solo i progetti associati alla tecnologia selezionata, prendendo il valore dall'id della tecnologia dalla tabella pivot dei risultati
            return this.selectedTechnologyId ? this.projects.filter(project => project.pivot.technology_id === this.selectedTechnologyId) : this.projects;
        },

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
        },

        getProjectsByTechnology(technologyId, page_number) {
            axios.get(`${this.store.baseUrl}/api/projects/technology/${technologyId}`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                // faccio un controllo sulla risposta dell'api, altrimenti non mi funziona
                if (response && response.data && response.data.results && response.data.results.data) {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.selectedTechnologyId = technologyId; // imposto la tecnologia selezionata
                } else {
                    console.error('Response data is invalid:', response);
                }
            }).catch((error) => {
                console.error('Error fetching projects by technology:', error);
            });
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

        <!-- LABELS TECHNOLOGIES  -->
        <button @click="getProjectsByTechnology(1, 1)">Tecnologia 1</button>


        <!-- CONTAINER PRINCIPALE -->
        <div class="my-proj-container rounded-4">
            <div class="row">

            <!-- SINGOLA CARD CICLATA  -->
            <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
            </div>
        </div>

        <!-- BOTTONI NAVIGAZIONE -->
        <div class="text-center my-3">
            <button :class="currentPage == 1 ? 'button-purple disabled' : ''" class="button-orange me-3"  @click="selectedTechnologyId ? getProjectsByTechnology(selectedTechnologyId, currentPage - 1) : getProjects(currentPage - 1)"">
                <
                <span></span><span></span><span></span><span></span>
            </button>
            <button :class="currentPage == lastPage ? 'button-purple disabled' : ''" class="button-orange"  @click="selectedTechnologyId ? getProjectsByTechnology(selectedTechnologyId, currentPage + 1) : getProjects(currentPage + 1)"">
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