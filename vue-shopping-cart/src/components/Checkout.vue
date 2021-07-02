<template>
  <div>
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length > 0">
      <caption class="text-right h3">
        <strong>Total:</strong>
        <price class="d-block text-success font-weight-light" :value="Number(cartTotal)"></price>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic Example">
              <button class="btn btn-info" @click="$emit('add', item.product)">+</button>
              <button class="btn btn-outline-info" @click="$emit('delete', index)">-</button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">{{ item.product.price }}</td>
          <td class="text-right">{{ Number(item.product.price * item.qty) }}</td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-outline-info text-dark" to="/">Keep Shopping</router-link>

  </div>
</template>

<script>
import Price from './Price.vue';

export default {
  name: 'checkout',
  props: ['cart', 'cartTotal'],
  components: {
    Price,
  },
};
</script>
