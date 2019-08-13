<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">E-Commerce Inc.</a>
        </div>
        
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#" @click.prevent="activeView='app-product-list'">Product List</a></li>
            <li><a href="#" @click.prevent="activeView='app-sitemap'">Sitemap</a></li>
          </ul>
        </div>

      </div>
    </nav>

    <keep-alive>
      <component :is="activeView"></component>
    </keep-alive>
  </div>
</template>

<script>
import ListProducts from './components/ListProducts';
import Sitemap from './components/Sitemap';

export default {
  data(){
    return {
      activeView: 'app-product-list',
    };
  },

  components: {
    appProductList: ListProducts,
    appSitemap: Sitemap,
  }
}
</script>