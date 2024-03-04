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
}
</script>

<template lang="">
    <div class="col-3">
        <div class="card">
            <img :src="`${store.baseUrl}/storage/${project.preview_image}`" alt="" class="card-img-top">
            <div class="card-body">
                <h6>{{ project.title }}</h6>
            </div>
            <p>
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
</style>./SingleProject.vue/index.js