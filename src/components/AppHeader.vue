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
            <div class="row justify-content-between align-items-center my-4">
                <div class="logo">
                    LOGO
                </div>
                <div class="menu">
                    <ul class="m-0">
                        <li v-for="(link, index) in store.menu">
                            <router-link :to="{ name: link.routeName }">
                                {{ link.label }}
                            </router-link>
                        </li>
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
    background-color: $dark_bg;
    border-bottom: 2px solid #292929;

    a {
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
        position: relative;
        transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &::after {
            content: '';
            width: 0em;
            border-bottom: 0.08em solid white;
            position: absolute;
            bottom: -10px;
            left: 0;
            transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }

        &:hover {

            &::after {
                width: 100%;
            }
        }
    }

    .logo,
    .menu,
    .contact {
        width: fit-content;
        align-items: center;
    }

    li {
        display: inline-block;
        padding: 0px 10px;
    }
}
</style>