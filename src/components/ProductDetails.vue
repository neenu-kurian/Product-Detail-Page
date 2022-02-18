<template>
  <div>
    <swiper></swiper>
    <product-description>
      <template v-slot:desc-title></template>
      <template v-slot:desc>{{description}}</template>
    </product-description>
  </div>
</template>

<script>
import * as json from '../data.json';
import Swiper from "../common/Swiper.vue";
import ProductDescription from "../common/ProductDescription.vue";

export default {
  name: "ProductDetails",
  data() {
    return {
      description: json.default.data.storefrontBySlug.listing.description,
    };
  },
  components: {
    Swiper,
    ProductDescription,
  },
  mounted() {
      console.log('descr',this.data);
  }
};
</script>