<template>
  <div>
    <table class="product--table">
      <tr>
        <th>Quantity</th>
        <th>Variant</th>
        <th>Price</th>
        <th>MSRP</th>
        <th>Stock</th>
      </tr>
      <template v-if="noOfVariants>0">
        <tr v-for="(item, index) in tableData" :key="index">
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
            <button
              class="btn btn--plus"
              @click="changeCounter(1,index)"
              type="button"
              name="button"
            >
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
        <tr>
          <td colspan="5">TOTAL: € {{total}}</td>
        </tr>
      </template>
      <template v-else>
        <tr>No data available</tr>
      </template>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductTable",
  data: function () {
    return {
      quantity: [],
    };
  },
  computed: {
    ...mapGetters(["noOfVariants", "tableData", "stock"]),
    total: function () {
      return this.quantity.reduce(
        (total, eachItem, index) =>
          total + eachItem * this.tableData[index].node.price,
        0
      );
    },
  },
  mounted: function () {
    this.setQuantity();
  },
  methods: {
    changeCounter: function (num, index) {
      let oldValue = this.quantity[index];
      let newValue = parseInt(oldValue) + num;
      if (newValue < 0) {
        newValue = 0;
      }
      this.$set(this.quantity, index, newValue);
    },
    setQuantity: function () {
      for (let index = 0; index < this.noOfVariants; index++) {
        this.$set(this.quantity, index, 0);
      }
    },
  },
};
</script>