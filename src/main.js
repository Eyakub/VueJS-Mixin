import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// Vue.mixin({
//   created(){
//     alert('a vue instance was created');
//   }
// });

Vue.filter('currency', function(value){
  let formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
