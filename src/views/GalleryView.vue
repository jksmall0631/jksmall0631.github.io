<template>
  <div class="gallery">
    <div class="photo-grid">
      <div class="photo" @click="goToPhotoDetails(16)">
        <img
          src="../assets/photos/item16/photo1.jpg"
          alt="Item 16"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(15)">
        <img
          src="../assets/photos/item15/photo1.jpg"
          alt="Item 15"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(14)">
        <img
          src="../assets/photos/item14/photo1.jpg"
          alt="Item 1"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(13)">
        <img
          src="../assets/photos/item13/photo1.jpg"
          alt="Item 2"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(12)">
        <img
          src="../assets/photos/item12/photo1.jpg"
          alt="Item 3"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(11)">
        <img
          src="../assets/photos/item11/photo1.jpg"
          alt="Item 4"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(10)">
        <img
          src="../assets/photos/item10/photo1.jpg"
          alt="Item 5"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(9)">
        <img
          src="../assets/photos/item9/photo1.jpg"
          alt="Item 6"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(8)">
        <img
          src="../assets/photos/item8/photo1.jpg"
          alt="Item 7"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(7)">
        <img
          src="../assets/photos/item7/photo1.jpg"
          alt="Item 8"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(6)">
        <img
          src="../assets/photos/item6/photo1.jpg"
          alt="Item 9"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(5)">
        <img
          src="../assets/photos/item5/photo1.jpg"
          alt="Item 10"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(4)">
        <img
          src="../assets/photos/item4/photo1.jpg"
          alt="Item 11"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(3)">
        <img
          src="../assets/photos/item3/photo1.jpg"
          alt="Item 12"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(2)">
        <img
          src="../assets/photos/item2/photo1.jpg"
          alt="Item 13"
        />
      </div>
      <div class="photo" @click="goToPhotoDetails(1)">
        <img
          src="../assets/photos/header/small-wood-mascot.jpeg"
          alt="Small Wood Mascot"
        />
      </div>
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
  display: flex;
  flex-direction: column;
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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
