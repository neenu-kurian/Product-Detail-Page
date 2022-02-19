<template>
<div class="product--description">
    <h1><slot name="desc-title">Information</slot></h1>
    <p><slot name="desc">Sample description</slot></p>   
</div>
</template>

<script>
export default {
    name: 'ProductDescription',
}
</script>