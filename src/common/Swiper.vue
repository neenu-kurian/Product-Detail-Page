<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div v-for="(image, index) in this.images" :key="index" class="swiper-slide">
        <img :src="image" alt="product-image" class="swiper-image" />
      </div>
    </div>

    <!-- If we need navigation buttons -->
    <div
      class="swiper-button-prev"
      v-bind:style="{ 'background-image': 'url(' + '/src/assets/images/icon-arrow-left.svg' + ')' }"
    ></div>
    <div
      class="swiper-button-next"
      v-bind:style="{ 'background-image': 'url(' + '/src/assets/images/icon-arrow-right.svg' + ')' }"
    ></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

Swiper.use([Navigation]);

export default {
  name: "Swiper",
  data: function () {
    return {
      images: ["https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg", "https://cdn.pixabay.com/photo/2018/04/22/12/27/butterfly-3340921_1280.png", "https://cdn.pixabay.com/photo/2017/01/27/16/36/love-2013497_1280.png"],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          observer: true,
          observeParents: true,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>