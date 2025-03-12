<template>
  <div class="gallery">
    <div class="photo-grid">
      <div class="photo" v-for="(photo, index) in photoPaths" :key="index" @click="goToPhotoDetails(index)">
        <img :src="photo" :alt="'Photo' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
const photoPaths = [
  '../assets/photos/bowl.jpg',
  '../assets/photos/cabinet-kitchen.jpg',
  '../assets/photos/cabinet-shop.jpg',
  '../assets/photos/coffee.jpg',
  '../assets/photos/desk.jpg',
  '../assets/photos/frame-black.jpg',
  '../assets/photos/frame-cars.jpg',
  '../assets/photos/frame-two.jpg',
  '../assets/photos/mirror.jpg',
  '../assets/photos/stool-unfinished.jpg',
  '../assets/photos/tool-chest-shop.jpg',
];

export default {
  data() {
    return {
      photoPaths
    };
  },
  mounted() {
    console.log(this.photoPaths);
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
