<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.name">
                {{ product.name }} ({{ product.price | currency}}) - 
                <a href="#"  @click.prevent="addToCart(product)">Add to Cart</a>
            </li>
        </ul>
    </div>
</template>

<script>
import RetriveProducts from '../mixin/retrive-products.js';
export default {
    mixins: [ RetriveProducts ],
    created(){
        //alert('list product created');
    },
    methods: {
        // it will override the mixin methods
        addToCart(product){
            product.name = "Test";
            alert('adding ' + product.name + 'adding from listProducts');
        }
    }
}
</script>