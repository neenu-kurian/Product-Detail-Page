<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <img :src="image" alt="product-image" class="swiper-image" />
      </div>
    </div>
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
import { mapGetters } from 'vuex';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

Swiper.use([Navigation]);

export default {
  name: "Swiper",
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(['images'])
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