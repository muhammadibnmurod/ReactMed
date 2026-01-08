<script setup lang="ts">
import { serviceCategories } from '~/components/views/priceList/Data'
import ServiceCategoryCard from '~/components/ui/ServiceCategoryCard.vue'
</script>

<template>
  <div class="grid grid-cols-4 w-full px-14 gap-6 bg-[#EBF4FF]">
    <ServiceCategoryCard v-for="item in serviceCategories" :key="item.id" :item="item" />
  </div>
</template>
