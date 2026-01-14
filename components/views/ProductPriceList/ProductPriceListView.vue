<script setup lang="ts">
import { computed, ref } from "vue";
import {
  serviceCategories,
  type ServiceItem,
} from "~/components/views/priceList/Data";
import { useAdvancedSearch } from "~/composable/useSearch";

const props = defineProps<{
  search?: string;
}>();

const { t } = useI18n();
const { advancedSearch } = useAdvancedSearch();

/* === ALL SERVICES === */
const allServices = computed(() =>
  serviceCategories.flatMap((cat) => cat.services)
);

/* === SEARCH === */
const filteredServices = computed(() => {
  if (!props.search?.trim()) return allServices.value;

  return allServices.value.filter((service) =>
    advancedSearch(props.search!, t(service.title))
  );
});

/* === ACCORDION STATE === */
const openedId = ref<number | null>(null);

const toggle = (service: ServiceItem) => {
  openedId.value = openedId.value === service.id ? null : service.id;
};
</script>

<template>
  <div class="w-full px-6 sm:px-10 md:px-14 py-10 space-y-4">
    <div
      v-for="(service, index) in filteredServices"
      :key="service.id"
      class="rounded-[1.25rem] sm:rounded-[1.75rem] border border-[#A4CCFF] bg-[#E8F2FF] overflow-hidden"
    >
      <button
        @click="toggle(service)"
        class="w-full flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 lg:py-10 bg-[#E8F2FF] hover:bg-[#DDEBFF] transition"
      >
        <div class="flex items-center gap-10">
          <span
            class="flex items-center justify-center min-w-[6rem] h-[4.5rem] rounded-[1rem] bg-[#145CB8] text-white font-['Inter'] text-[3.1rem] font-semibold leading-normal"
          >
            {{ index + 1 }}
          </span>

          <span
            class="text-[#145CB8] font-['Inter'] text-[3rem] font-semibold leading-normal"
          >
            {{ t(service.title) }}
          </span>
        </div>

        <svg
          class="w-8 h-8 transition-transform duration-300 text-[#145CB8]"
          :class="openedId === service.id ? 'rotate-180' : ''"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-200 ease-in-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1000px] opacity-100"
        leave-from-class="max-h-[1000px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="openedId === service.id"
          class="px-5 sm:px-6 py-4 bg-[#F0F7FF] space-y-2"
        >
          <div
            v-for="(sub, i) in service.subServices"
            :key="sub.id"
            class="flex items-stretch rounded-[2rem] overflow-hidden border border-[#A4CCFF] bg-[#E8F2FF]"
          >
            <div class="flex items-center gap-10 flex-1 px-10 py-5">
              <span class="text-[#145CB8] font-semibold text-[2.5rem]">
                {{ i + 1 }}
              </span>

              <span class="text-[#222932] lg:text-[2.8rem] sm:text-[1rem]">
                {{ t(sub.title) }}
              </span>
            </div>

            <div
              class="flex w-[32.375rem] pt-[3rem] pr-[3rem] pb-[3rem] pl-[1.25rem] justify-center items-center gap-[20px] self-stretch bg-[#145CB8]"
            >
              <span
                class="text-white text-right font-['Inter'] text-[2.5rem] font-semibold leading-normal"
              >
                {{ sub.price.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div v-if="!filteredServices.length" class="py-16 text-center">
      <p class="text-gray-400 text-lg">
        {{ t("common.no_results") }}
      </p>
    </div>
  </div>
</template>
