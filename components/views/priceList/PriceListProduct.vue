<script setup lang="ts">
import { computed } from 'vue'
import { serviceCategories } from '~/components/views/priceList/Data'
import ServiceCategoryCard from '~/components/ui/ServiceCategoryCard.vue'

const props = defineProps<{
  search: string
}>()

const filteredCategories = computed(() => {
  if (!props.search.trim()) return serviceCategories

  return serviceCategories.filter(item =>
    item.title.toLowerCase().includes(props.search.toLowerCase())
  )
})
</script>

<template>
  <div class="grid grid-cols-4 w-full px-14 gap-6 bg-[#EBF4FF]">
    <ServiceCategoryCard v-for="item in filteredCategories" :key="item.id" :item="item" />
  </div>
</template>
