<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import CustomForm from '@/components/atomics/CustomForm.vue';
import type Model_1 from '@/models/Model_1';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

//#region [STORES]
const user = useUserStore()
const cart = useCartStore();
//#endregion

const formFields = ref([
  { name: 'productName', label: 'Product Name', type: 'text' },
]);

const AddItemToCart = (formData: Model_1) => {

  if (!formData.productName) return

  cart.addItem(formData.productName)
  formData.productName = ''
};

const removeItem = (name:string) =>{
  cart.removeItem(name);
}

</script>

<template>
  <main>
    <section class="relative">
      <div class="relative pt-24 lg:pt-28">
        <CustomForm :fields="formFields" @submit="AddItemToCart" />
        <li v-for="item in cart.items" :key="item.name">
          <span>{{ item.name }} ({{ item.amount }})</span>
          <button :disabled="!user.name" @click="removeItem(item.name)">x</button>
        </li>

        <TheWelcome />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>