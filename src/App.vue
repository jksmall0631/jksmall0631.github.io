<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Title msg="Small Wood" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/store">Store</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
