<script>
import AppHome from './pages/AppHome.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHome,
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>./pages/AppHome.vue
