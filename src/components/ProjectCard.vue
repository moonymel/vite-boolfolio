<script>
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        createExcerpt() {
            return this.project.description.substr(0, 100) + "...";
        },

        getUrlImage() {
            let image;
            if (this.project.preview_image != 0) {
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

    <!-- CARD  -->
    <div class="col-3 mb-3">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
            <div class="my-card rounded-3">

                <!-- IMMAGINE  -->
                <figure class="snip1554">
                    <img :src="getUrlImage()">

                    <!-- TITOLO PROGETTO  -->
                    <figcaption>
                        <h3>{{ project.title }}</h3>
                    </figcaption>

                </figure>
                
            </div>
        </router-link>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

.my-card {
    width: 100%;
    height: 100%;
    background-color: $dark_bg;

    a {
        color: white;
    }

    // .my-card-img {
    //     width: 100%;
    //     aspect-ratio: 1 / 1;
    //     object-fit: cover;

    .snip1554 {
        background-color: $my_pink;
        color: #ffffff;
        display: inline-block;
        font-size: 10px;
        font-weight: bold;
        margin: 10px;
        max-width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        overflow: hidden;
        position: relative;
        text-align: left;
        border-radius: 10px;
    }

    .snip1554 * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.45s ease;
        transition: all 0.45s ease;
    }

    .snip1554:after {
        background-color: white;
        opacity: 0.6;
        top: 0;
        bottom: 0;
        content: '';
        left: -100%;
        position: absolute;
        width: 100%;
        box-shadow: 0 0 100px white;
        -webkit-transform: skew(-20deg);
        transform: skew(-20deg);
        -webkit-transition: all 0.6s ease;
        transition: all 0.6s ease;
    }

    .snip1554 img {
        vertical-align: top;
        width: 100%;
        backface-visibility: hidden;
    }

    .snip1554 figcaption {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        line-height: 1em;
        opacity: 0;
    }

    .snip1554 h3 {
        position: absolute;
        left: 10px;
        bottom: 10px;
        font-size: 1.4em;
        ;
        line-height: 1.1em;
        margin: 0;
        text-transform: uppercase;
    }

    .snip1554 h3 span {
        font-weight: 700;
    }

    .snip1554 a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .snip1554:hover>img,
    .snip1554.hover>img {
        opacity: 0.4;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .snip1554:hover:after,
    .snip1554.hover:after {
        left: 200%;
    }

    .snip1554:hover figcaption,
    .snip1554.hover figcaption {
        opacity: 1;
    }

    // }

    .my-card-title {
        color: white;
        font-size: 13px;
        text-transform: uppercase;
    }
}
</style>./SingleProject.vue/index.js