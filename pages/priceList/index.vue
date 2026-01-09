<template>
    <div class="w-full">
        <PriceListView :search="search" />
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

definePageMeta({
    layout: 'price-list', 
})

const search = inject('searchTerm')
</script>