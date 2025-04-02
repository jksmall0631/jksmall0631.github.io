<template>
  <div class="gallery">
    <div class="photo-grid">
      <div class="photo" @click="goToPhotoDetails(1)">
        <img src="../assets/photos/item1/photo1.jpg" :alt="'Photo 1'" />
      </div>
      <!-- <div class="photo" @click="goToPhotoDetails(1)">
        <img src="../assets/photos/item2/photo2.jpg" :alt="'Photo 2'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(2)">
        <img src="../assets/photos/item3/photo3.jpg" :alt="'Photo 3'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(3)">
        <img src="../assets/photos/item4/photo4.jpg" :alt="'Photo 4'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(4)">
        <img src="../assets/photos/item5/photo5.jpg" :alt="'Photo 5'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(5)">
        <img src="../assets/photos/item6/photo6.jpg" :alt="'Photo 6'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(6)">
        <img src="../assets/photos/item7/photo7.jpg" :alt="'Photo 7'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(7)">
        <img src="../assets/photos/item8/photo8.jpg" :alt="'Photo 8'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(8)">
        <img src="../assets/photos/item9/photo9.jpg" :alt="'Photo 9'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(9)">
        <img src="../assets/photos/item10/photo10.jpg" :alt="'Photo 10'" />
      </div>
      <div class="photo" @click="goToPhotoDetails(10)">
        <img src="../assets/photos/item11/photo11.jpg" :alt="'Photo 11'" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPhotoDetails(id) {
      this.$router.push({ name: 'details', params: { id } });
    }
  }
};
</script>

<style scoped>
.gallery {
  align-items: center;
  display: flex;
  flex-direction: column;
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
