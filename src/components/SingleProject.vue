<script>
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    props: {
        project: Object
    },
    data(){
        return {
            store
        }
    },
    methods: {
        createExcerpt(){
            return this.project.description.substr(0, 100) + "...";
        },

        getUrlImage(){
            let image;
            if(this.project.preview_image != 0) {
                image = this.project.preview_image;
            }
            else {
                image = "place.png"
            }

            return `${this.store.baseUrl}/storage/${image}`
        }
    }
}
</script>

<template lang="">
    <div class="col-3 my-3">
        <div class="card">
            <img :src="getUrlImage()" class="card-img-top">
            <div class="card-body">
                <h6>{{ project.title }}</h6>
            </div>
            <p class="px-2">
                {{ createExcerpt() }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>./SingleProject.vue/index.js