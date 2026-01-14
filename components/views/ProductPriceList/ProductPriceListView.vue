<script setup lang="ts">
import { computed, ref } from "vue";
import {
  serviceCategories,
  type ServiceItem,
} from "~/components/views/priceList/Data";
import PriceListModal from "~/components/ui/PriceListModal.vue";
import { useAdvancedSearch } from "~/composable/useSearch";

const props = defineProps<{
  search: string;
}>();

const { t: $t } = useI18n();
const { advancedSearch } = useAdvancedSearch();

// Barcha kategoriyalardagi barcha xizmatlarni bitta massivga yig'amiz
const allServices = computed(() => {
  return serviceCategories.flatMap((cat) => cat.services);
});

// Qidiruv bo'yicha filtrlash
const filteredServices = computed(() => {
  if (!props.search.trim()) {
    return allServices.value;
  }
  return allServices.value.filter((service) => {
    const translatedTitle = $t(service.title);
    return advancedSearch(props.search, translatedTitle);
  });
});

const showModal = ref(false);
const selectedService = ref<ServiceItem | null>(null);

function openServiceDetails(service: ServiceItem) {
  selectedService.value = service;
  showModal.value = true;
}
</script>

<template>
  <div class="flex w-full flex-col px-14 gap-[20px] py-10">
    <h1 class="text-[#145CB8] font-bold mb-10 text-[48px]">
      {{ $t("Xizmatlar narxlari") }}
    </h1>

    <template v-if="filteredServices.length > 0">
      <div
        v-for="(service, index) in filteredServices"
        :key="service.id"
        @click="openServiceDetails(service)"
        class="flex items-center cursor-pointer self-stretch rounded-[60px] border border-[#A4CCFF] bg-[#E0EEFF] shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
      >
        <div class="flex items-center">
          <div
            class="flex py-[48px] px-[60px] rounded-l-[60px] justify-center items-center bg-[#C2DDFF]"
          >
            <p
              class="flex w-[120px] h-[80px] justify-center items-center rounded-[20px] bg-[#145CB8] text-white font-bold text-[46px]"
            >
              {{ index + 1 }}
            </p>
          </div>
        </div>

        <div class="w-full flex items-center justify-between px-14">
          <span class="text-[#145CB8] font-semibold text-[40px]">
            {{ $t(service.title) }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="48"
            viewBox="0 0 28 48"
            fill="none"
          >
            <path
              d="M4 4L24 24L4 44"
              stroke="#145CB8"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="w-full text-center py-20">
        <p class="text-gray-400 text-[32px]">Natija topilmadi</p>
      </div>
    </template>
  </div>

  <PriceListModal v-model:show="showModal" :service="selectedService" />
</template>
