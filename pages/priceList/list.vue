<template>
  <PriceListProduct :search="search" />
</template>

<script setup lang="ts">
defineProps<{
  search: string
}>()
</script>
