<script setup lang="ts">
defineProps<{
  search: string
}>()
</script>

<template>
  <div class="w-full">
    <PriceListProduct :search="search" class="pb-20" />
  </div>
</template>