<template>
  <div>
    <h1>My Shop</h1>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
    <price-slider :sliderStatus="sliderStatus" v-model="maxAmount"></price-slider>
    <product-list :maximum="maximum" :products="products"></product-list>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import PriceSlider from './PriceSlider.vue';
import ProductList from './ProductList.vue';

export default {
  name: 'products',
  data: function() {
    return {
      maxAmount: 99,
    };
  },
  props: ['products', 'maximum', 'cart', 'cartQty', 'cartTotal', 'sliderStatus'],
  components: {
    Navbar,
    PriceSlider,
    ProductList,
  },
};
</script>
