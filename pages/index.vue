<template>
  <div class="w-full">
    <PriceListView :search="search" />
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref, ref } from 'vue'

definePageMeta({
  layout: 'price-list',
})

const search = inject<Ref<string>>('searchTerm', ref(''))
</script>