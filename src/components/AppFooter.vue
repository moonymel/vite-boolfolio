<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="logo">
                    LOGO
                </div>
                <div class="menu">
                    <ul>
                        <li v-for="(link, index) in store.menu">{{ link.label }}</li>
                    </ul>
                </div>
                <div class="contact">
                    <button class="button-pink">
                        contact us
                        <span></span><span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

header {
    background-color: black;
    border-bottom: 2px solid #292929;

    .logo,
    .menu,
    .contact {
        width: fit-content;
    }

    li {
        display: inline-block;
        padding: 0px 10px;
    }
}
</style>