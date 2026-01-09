<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div>
    <PriceListProduct :search="search" class="pb-20" />
  </div>
</template>

