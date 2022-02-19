<template>
  <div class="product--info--wrapper">
    <p class="product--brand">Bobbi Ravioli (100 euro min)</p>
    <rating></rating>
    <h1 class="product--title">{{title}}</h1>
    <p class="discount--text">20% discount</p>
    <ProductTable :data="tableContent" :stock="stock" @total-changed="showTotal"></ProductTable>
    <Button type="btn--text" class="block">add to cart (EUR {{this.total}})</Button>
    <Button type="btn--icon" class="block">
      <i class="fa fa-heart-o" aria-hidden="true"></i> add to favorites
    </Button>
    <Button type="btn--outline block">contact the brand</Button>
  </div>
</template>

<script>
import * as json from "../data.json";
import Button from "../common/Button.vue";
import ProductTable from "../common/ProductTable.vue";
import Rating from "../common/Rating.vue";

export default {
  name: "ProductInfo",
  data: function () {
    return {
      title: json.default.data.storefrontBySlug.listing.translation.title,
      tableContent: json.default.data.storefrontBySlug.listing.variants.edges,
      stock: json.default.data.storefrontBySlug.listing.inStock,
      total: 0,
    };
  },
  components: {
    Button,
    ProductTable,
    Rating,
  },
  methods: {
    showTotal(value) {
      this.total = value;
    },
  },
};
</script>