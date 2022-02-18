<template>
  <div>
    <swiper></swiper>
    <product-description></product-description>
  </div>
</template>

,<script>
import Swiper from "../common/Swiper.vue";
import ProductDescription from '../common/ProductDescription.vue';
export default {
  name: "ProductDetails",
  components: {
    Swiper,
    ProductDescription
  },
};
</script>