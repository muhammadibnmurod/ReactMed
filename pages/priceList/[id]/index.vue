<template>
    <div>
        <ProductPriceListView :id="route.params.id" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

definePageMeta({
    layout: 'price-list', // Xuddi shu layoutni ishlatamiz
})
</script>