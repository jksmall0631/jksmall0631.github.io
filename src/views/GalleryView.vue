<template>
  <div class="gallery">
    <div class="photo-grid">
      <div class="photo" v-for="(photo, index) in photos" :key="index" @click="goToPhotoDetails(index)">
        <img :src="`../photos/${photo}`" :alt="'Photo' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    photos() {
      const photos = import.meta.glob('../assets/photos/*');
      const photoNames = Object.keys(photos).map((photo) => {
        return photo.replace('../assets/photos/', '');
      });
      return photoNames;
    }
  },
  methods: {
    goToPhotoDetails(index) {
      this.$router.push({ name: 'details', params: { id: index } });
    }
  }
};
</script>

<style>
.gallery {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.photo {
  width: 300px;
  height: 300px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s;
}

.photo img:hover {
  filter: brightness(0.8);
}
</style>
