<script setup lang="ts">
import { computed } from 'vue'
import { serviceCategories } from '~/components/views/priceList/Data'
import ServiceCategoryCard from '~/components/ui/ServiceCategoryCard.vue'
import { useAdvancedSearch } from '~/composable/useSearch'

const props = defineProps<{
  search: string
}>()

const { t: $t } = useI18n()
const { advancedSearch } = useAdvancedSearch()

const filteredCategories = computed(() => {
  if (!props.search.trim()) return serviceCategories

  return serviceCategories.filter(item => {
    const translatedTitle = $t(item.title)
    return advancedSearch(props.search, translatedTitle)
  })
})
</script>

<template>
  <div class="grid 
           grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
           w-full 
           px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 
           gap-3 sm:gap-4 md:gap-5 xl:gap-6 
           bg-[#EBF4FF]">
    <ServiceCategoryCard v-for="item in filteredCategories" :key="item.id" :item="item" />
  </div>
</template>
