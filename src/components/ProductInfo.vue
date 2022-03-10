<template>
  <div class="product--info--wrapper" v-if="!loading">
    <p class="product--brand">Bobbi Ravioli (100 euro min)</p>
    <rating></rating>
    <h1 class="product--title">{{title}}</h1>
    <p class="discount--text">20% discount</p>
    <ProductTable></ProductTable>
    <Button type="btn--text" class="block">add to cart</Button>
    <Button type="btn--icon" class="block">
      <i class="fa fa-heart-o" aria-hidden="true"></i> add to favorites
    </Button>
    <Button type="btn--outline block">contact the brand</Button>
  </div>
</template>

<script>
import Button from "../common/Button.vue";
import ProductTable from "../common/ProductTable.vue";
import Rating from "../common/Rating.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ProductInfo",

  computed: {
    ...mapState(["loading", "total"]),
    ...mapGetters(["title"]),
  },
  components: {
    Button,
    ProductTable,
    Rating,
  },
};
</script>