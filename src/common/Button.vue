<template>
  <button type="button" :class="type" class="btn--primary">
    <slot>
      Add to Cart
      <span>Price</span>
    </slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
  }
};
</script>
