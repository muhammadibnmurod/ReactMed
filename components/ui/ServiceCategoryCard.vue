<script setup lang="ts">
import type { ServiceCategory } from "~/components/views/priceList/Data";
import {
  serviceCategories,
  type ServiceItem,
} from "~/components/views/priceList/Data";

defineProps<{
  item: ServiceCategory;
}>();
const showModal = ref(false);
const selectedCategory = ref<ServiceItem | null>(null);

function openServiceDetails(service: ServiceCategory) {
  // Convert ServiceCategory to ServiceItem format
  selectedCategory.value = {
    id: service.id,
    title: service.title,
    price: 0, // Category doesn't have a price
    subServices: service.services.flatMap(s => s.subServices)
  };
  showModal.value = true;
}
</script>

<template>
  <div>
    <div
      @click="openServiceDetails(item)"
      class="block rounded-[20px] sm:rounded-[24px] xl:rounded-[28px] cursor-pointer bg-[#EAF2FF] overflow-hidden border border-[#D6E4FF] shadow-xl hover:shadow-2xl transition"
    >
      <div
        class="flex items-center justify-center h-[8rem] sm:h-[2rem] md:h-[6rem] xl:h-[35rem]"
      >
        <component
          :is="item.icon"
          class="w-[4rem] h-[7rem] sm:w-[8rem] sm:h-[2rem] md:w-[21rem] md:h-[25rem] xl:w-[25rem] xl:h-[30rem]"
        />
      </div>

      <div
        class="bg-[#2F5FB3] px-4 sm:px-6 h-[140px] sm:h-[180px] md:h-[210px] xl:h-[250px] flex items-center justify-center"
      >
        <p
          class="text-white text-center font-semibold leading-tight text-[20px] sm:text-[26px] md:text-[32px] xl:text-[40px]"
        >
          {{ $t(item.title) }}
        </p>
      </div>
    </div>
    <PriceListModal v-model:show="showModal" :service="selectedCategory" />
  </div>
</template>
