<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Home',
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
    <div class="container">
        <div class="jumbotron d-flex my-5">
            <div class="col-12 align-self-center">
                <div class="j-title">
                    Welcome!
                </div>
                <div class="j-sub">
                    this is boolfolio, <br>
                    a web app for your online portfolio.
                </div>
                <div class="my-3">
                    <div class="button-purple d-inline-block mx-2">
                        link1
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div class="button-pink d-inline-block mx-2">
                        link2
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div class="button-orange d-inline-block mx-2">
                        link3
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

.jumbotron {
    height: 500px;

    .j-title {
        font-size: 55px;
        font-weight: bold;
    }

    .j-sub {
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
}
</style>./SingleProject.vue/index.js../components/ProjectCard.vue/index.js