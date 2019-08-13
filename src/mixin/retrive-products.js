export default{
    data(){
        return {
            products: []
        };
    },

    created(){
        //alert('retriving products');
        this.products = this.getProductList();
    },

    methods: {
        getProductList(){
            return [
                { name: 'Personal', price: 9.95},
                { name: 'Startup', price: 99.95},
                { name: 'Enterprise', price: 199.95},
            ];
        },

        addToCart(product){
            alert('adding ' + product.name + ' to cart(mixin)');
        }
    }
}