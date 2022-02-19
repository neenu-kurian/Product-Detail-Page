<template>
  <div>
    <button class="btn btn--minus" @click="changeCounter(-1,index,quantity)" type="button" name="button">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
    <input type="number" min="0" class="quantity" v-model="quantity[index]"/>
    <button class="btn btn--plus" @click="changeCounter(1,index,quantity)" type="button" name="button">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "QuantityField",
  data: function () {
    return {
      quantity: [0,0,0,0,0],
      variantQuantity:{},
    };
  },
  props: {
      index: Number,
      length: Number
  },
  methods: {
    changeCounter: function (num,index,quantity) {
        quantity[index] = quantity[index]+num;
        console.log(this.quantity)
    },
  },
};
</script>