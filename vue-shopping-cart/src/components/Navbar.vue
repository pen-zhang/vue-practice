<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ms-auto d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>

      <div class="dropdown ms-2" v-if="cart.length > 0">
        <!-- text on the dropdown -->
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          type="button"
          id="cartDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge rounded-pill bg-light text-dark">{{ cartQty }}</span>
          <font-awesome-icon icon="shopping-cart" class="mx-2"></font-awesome-icon>
          <price :value="Number(cartTotal)"></price>
        </button>
        <!-- dropdown menu -->
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cartDropdown">
          <div v-for="(item, index) in cart" :key="index" class="dropdown-item-text text-nowrap text-end">
            <span class="badge rounded-pill bg-warning align-text-top me-1">{{ item.qty }}</span>
            {{ item.product.name }}
            <strong>
              <price :value="Number(item.qty * item.product.price)"></price>
            </strong>
            <a
              href="#"
              @click.stop="$parent.$emit('delete', index)"
              class="badge bg-danger text-white mx-1"
              style="text-decoration: none;"
            >
              X
            </a>
          </div>
          <router-link class="btn btn-sm btn-outline-info text-darkf float-end me-3" to="/checkout">Checkout</router-link>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
import Price from './Price.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'navbar',
  props: ['cart', 'cartQty', 'cartTotal'],
  components: {
    FontAwesomeIcon,
    Price,
  },
};
</script>
