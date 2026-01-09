<template>
    <div class="w-full">
        <ProductPriceListView />
    </div>
</template>

<script setup lang="ts">
import ProductPriceListView from '~/components/views/ProductPriceList/ProductPriceListView.vue'

definePageMeta({
    layout: 'price-list',
})
</script>