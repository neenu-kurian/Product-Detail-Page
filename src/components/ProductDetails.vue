<template>
  <div class="product--details--wrapper" v-if="!loading">
    <swiper></swiper>
    <product-description>
      <template v-slot:desc-title></template>
      <template v-slot:desc>{{description}}</template>
    </product-description>
  </div>
</template>

<script>
import Swiper from "../common/Swiper.vue";
import ProductDescription from "../common/ProductDescription.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ProductDetails",
  components: {
    Swiper,
    ProductDescription,
  },
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["description"]),
  },
  //mounted((
};
</script>