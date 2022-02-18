<template>
  <div>
    <swiper></swiper>
    <product-description>
      <template v-slot:desc-title>{{title}}</template>
      <template v-slot:desc>{{description}}</template>
    </product-description>
    {{description}}
  </div>
</template>

<script>
import data from "../data.json";
import Swiper from "../common/Swiper.vue";
import ProductDescription from "../common/ProductDescription.vue";

export default {
  name: "ProductDetails",
  data() {
    return {
      description: data.storefrontBySlug.listing.translation.description,
      title: data.storefrontBySlug.listing.translation.title
    };
  },
  components: {
    Swiper,
    ProductDescription,
  },
  mounted() {
      console.log('descr',this.description);
  }
};
</script>