<template>
  <div>
      <p>Bobbi Ravioli (100 euro min)</p>
      <h1>Dress Isabel</h1>
      <p>20% discount</p>
    <ProductTable></ProductTable>
    <Button type="btn-text" class="block">add to cart</Button>
    <Button type="btn-icon" class="block">
      <i class="fa-solid fa-heart block"></i>add to favorites
    </Button>
    <Button type="btn-outline block">contact the brand</Button>
  </div>
</template>

<script>
import Button from '../common/Button.vue';
import ProductTable from '../common/ProductTable.vue';

export default {
  name: "ProductInfo",
  components: {
      Button,
      ProductTable,
  }
};
</script>