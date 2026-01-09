<template>
    <div class="w-full">
        <PriceListView :search="search" />
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

definePageMeta({
    layout: 'price-list', // Layout nomi
})

const search = inject('searchTerm')
</script>