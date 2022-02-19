<template>
  <div class="product--details--wrapper">
    <swiper :images="images"></swiper>
    <product-description>
      <template v-slot:desc-title></template>
      <template v-slot:desc>{{description}}</template>
    </product-description>
  </div>
</template>

<script>
import * as json from "../data.json";
import Swiper from "../common/Swiper.vue";
import ProductDescription from "../common/ProductDescription.vue";

export default {
  name: "ProductDetails",
  components: {
    Swiper,
    ProductDescription,
  },
  data() {
    return {
      data: json.default.data.storefrontBySlug,
      description: json.default.data.storefrontBySlug.listing.description,
    };
  },
  computed: {
    images: function () {
      return this.data.listing.images.edges.map((eachImageInfo) => {
        return eachImageInfo.node.modal;
      });
    },
  },
};
</script>