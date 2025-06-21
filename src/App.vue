<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="headerWrapper">
      <div class="photoContainer">
        <img
            class="photo"
            src="@/assets/photos/header/small-wood-logo-horizontal.png"
        />
        <img
            class="photo"
            src="@/assets/photos/header/small-wood-mascot.jpeg"
        />
      </div>
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>
      </nav>
    </div>
  </header>
  <div class="spacer" />
  <div class="contentWrapper">
    <RouterView />
  </div>
  <footer>
    <div class="footerSpacer" />
  </footer>
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
.photo {
  height: 140px;
}

.photoContainer {
  display: flex;
  justify-content: space-between;
}

.photoContainer img:last-child {
  display: block;
}

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

.spacer {
  height: 240px;;
}

.contentWrapper {
  max-width: 940px;
  margin: auto;
}

.footerSpacer {
  height: 100px;
}

@media (max-width: 850px) {
  .photoContainer img:last-child {
    display: none;
  }
}

@media (max-width: 700px) {
  .photo {
    height: 60px;
  }

  .spacer {
    height: 160px;
  }
}
</style>
