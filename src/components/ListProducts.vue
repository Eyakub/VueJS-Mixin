<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.name">{{ product.name }} (${{ product.price}})</li>
        </ul>
    </div>
</template>

<script>
import RetriveProducts from '../mixin/retrive-products.js';
export default {
    mixins: [ RetriveProducts ]
}
</script>