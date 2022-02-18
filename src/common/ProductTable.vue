<template>
  <div>
    <table>
      <tr>
        <th>Quantity</th>
        <th>Variant</th>
        <th>Price</th>
        <th>MSRP</th>
        <th>Stock</th>
      </tr>
      <tr v-for="(item, index) in this.items" :key="index">
        <td>
          <QuantityField></QuantityField>
        </td>
        <td>{{item.variant}}</td>
        <td>{{item.price}}</td>
        <td>{{item.msrp}}</td>
        <td>{{item.stock}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import QuantityField from "./QuantityField.vue";
export default {
  name: "ProductTable",
  data: function () {
    return {
      items: [
        { variant: "sdfd", price: 12.8, msrp: 39.4, stock: true },
        { variant: "sdfg", price: 12.8, msrp: 39.4, stock: true },
        {
          variant: "sdeueuefd",
          price: 12.8,
          msrp: 39.4,
          stock: true,
        },
        {
          variant: "yehe ddf",
          price: 12.8,
          msrp: 39.4,
          stock: true,
        },
        {
          variant: "tyh jkkk kk k k ",
          price: 12.8,
          msrp: 39.4,
          stock: true,
        },
      ],
    };
  },
  components: {
    QuantityField,
  },
};
</script>