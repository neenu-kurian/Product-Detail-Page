<template>
  <div>
    <button class="btn btn--minus" @click="changeCounter(-1)" type="button" name="button">-</button>
    <input type="number" v-model="quantity" min="0" />
    <button class="btn btn--plus" @click="changeCounter(1)" type="button" name="button">+</button>
  </div>
</template>

<script>
export default {
  name: "QuantityField",
  data: function () {
    return {
      quantity: 0,
    };
  },
  methods: {
    changeCounter: function (num) {
      if (!this.quantity == 0 && !num < 0) {
        this.quantity += num;
      }
    },
  },
};
</script>