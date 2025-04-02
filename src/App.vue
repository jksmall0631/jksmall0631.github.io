<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'
</script>

<template>
  <header>
    <div class="headerWrapper">
      <Title msg="small wood" />
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>
      </nav>
    </div>
  </header>

  <div class="contentWrapper">
    <RouterView />
  </div> 
</template>

<script>
export default {
  mounted() {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  },
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
}

.headerWrapper {
  display: block;
  padding: 2rem;
  padding-bottom: 0;
  max-width: 1200px;
  margin: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-link-text-active);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  flex-grow: 1;
  padding: 1rem 1rem;
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
}

.contentWrapper {
  padding-top: calc(7rem + 40px);
  max-width: 1000px;
  margin: auto;
}
</style>
