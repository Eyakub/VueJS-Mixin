<template>
    <div>
        <h1>Sitemap</h1>
        <ul>
            <li>Home</li>
            <li>Products
                <ul>
                    <li v-for="product in products" :key="product.name">{{ product.name }}</li>
                </ul>
            </li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<script>
import RetriveProducts from '../mixin/retrive-products';
export default {
    mixins: [ RetriveProducts ]
}
</script>