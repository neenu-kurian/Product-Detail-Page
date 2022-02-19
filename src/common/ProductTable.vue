<template>
  <div>
    <table class="product--table" v-if="this.data && this.data.length>0">
      <tr>
        <th>Quantity</th>
        <th>Variant</th>
        <th>Price</th>
        <th>MSRP</th>
        <th>Stock</th>
      </tr>
      <tr v-for="(item, index) in this.data" :key="index">
        <td>
          <button
            class="btn btn--minus"
            @click="changeCounter(-1,index)"
            type="button"
            name="button"
          >
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <input type="number" min="0" class="quantity" v-model="quantity[index]" />
          <button class="btn btn--plus" @click="changeCounter(1,index)" type="button" name="button">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </td>
        <td>{{item.node.options[0].value}}</td>
        <td>{{item.node.price}}</td>
        <td>{{item.node.msrp}}</td>
        <td v-if="stock">
          <i class="fa fa-check" aria-hidden="true"></i>
        </td>
      </tr>
    </table>
    <table v-else class="product--table-empty product--table">
      <tr>
        <th>Quantity</th>
        <th>Variant</th>
        <th>Price</th>
        <th>MSRP</th>
        <th>Stock</th>
      </tr>
      <tr>No items available</tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductTable",
  data: function () {
    return {
      total: 0,
      quantity: [0, 0, 0, 0, 0],
    };
  },
  props: {
    data: Array,
    stock: Boolean,
  },
  methods: {
    changeCounter: function (num, index) {
      this.quantity[index] = this.quantity[index]+num;
      if (this.quantity[index] < 0) {
        this.quantity[index] = 0;
      }
      var total = 0;
      this.quantity.map((eachQuantity, index) => {
        total = total + parseInt(this.data[index].node.price) * eachQuantity;
      });
      this.$emit("total-changed", total);
    },
  },
};
</script>