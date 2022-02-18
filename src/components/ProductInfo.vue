<template>
  <div>
    <p>Bobbi Ravioli (100 euro min)</p>
    <h1>{{title}}</h1>
    <p>20% discount</p>
    <ProductTable></ProductTable>
    <Button type="btn-text" class="block">add to cart</Button>
    <Button type="btn-icon" class="block">
      <i class="fa-solid fa-heart block"></i>add to favorites
    </Button>
    <Button type="btn-outline block">contact the brand</Button>
    <font-awesome-icon icon="coffee" />
  </div>
</template>

<script>
import data from "../data.json";
import Button from "../common/Button.vue";
import ProductTable from "../common/ProductTable.vue";

export default {
  name: "ProductInfo",
  data() {
    return {
      title: data.storefrontBySlug.listing.translation.title
    };
  },
  components: {
    Button,
    ProductTable,
  },
};
</script>