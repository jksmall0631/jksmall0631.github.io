<template>
  <DetailView :id="0" />
</template>

<script>
import DetailView from './DetailView.vue';

export default {
  components: {
    DetailView,
  },
};
</script>

<style>
.home {
  align-items: center;
  width: 100%;
}
</style>
