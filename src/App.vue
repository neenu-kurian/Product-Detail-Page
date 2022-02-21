<template>
  <div id="app">
    <div class="flex pdp--page">
      <product-details class="flex-item"></product-details>
      <product-info class="flex-item"></product-info>
    </div>
  </div>
</template>

<script>
import ProductInfo from "./components/ProductInfo.vue";
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: {
    ProductInfo,
    ProductDetails,
  },
  async created() {
    try { 
      await this.$store.dispatch('fetchData');
    }
    catch (error) {
        console.log("error");
      }
  },
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}

.pdp--page {
  margin-top: 30px;
}
</style>

