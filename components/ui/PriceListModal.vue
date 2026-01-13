<template>
  <n-modal
      :show="show"
      @update:show="handleClose"
      transform-origin="center"
  >
    <n-card
        class="w-[100vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[2400px]
             bg-[#F0F7FF]
             rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem]"
        :bordered="false"
        role="dialog"
        aria-modal="true"
        content-style="padding: 0;"
    >
      <!-- ✅ BUTUN MODAL SCROLL -->
      <div
          v-if="service"
          class="flex flex-col
               max-h-[85vh]
               overflow-y-auto
               bg-[#F0F7FF]
               rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem]
               custom-scrollbar"
      >
        <!-- Back button -->
        <div class="p-3 sm:p-4 md:p-5">
          <BackPage mode="modal" @click="handleClose(false)" />
        </div>

        <!-- Title -->
        <div class="px-3 sm:px-4 md:px-6 lg:px-8 pt-1">
          <h2
              class="text-[#222932] font-['Inter']
                   text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]
                   font-bold leading-tight"
          >
            {{ $t(service.title) }}
          </h2>
        </div>

        <!-- Filter -->
        <div class="px-3 sm:px-4 md:px-6 lg:px-8 py-3">
          <PriceListFilter v-model="searchQuery" />
        </div>

        <!-- List -->
        <div
            class="px-3 sm:px-4 md:px-6 lg:px-8
                 pb-6 sm:pb-8 md:pb-10
                 flex flex-col gap-2 md:gap-2.5"
        >
          <template v-if="filteredSubServices.length">
            <div
                v-for="(sub, index) in filteredSubServices"
                :key="sub.id"
                class="flex items-stretch
                     min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]
                     rounded-[0.75rem] sm:rounded-[0.875rem] md:rounded-[1rem]
                     overflow-hidden
                     border border-[#A4CCFF]
                     bg-[#E8F2FF]
                     hover:border-[#145CB8]
                     transition-all shadow-sm"
            >
              <!-- Left -->
              <div
                  class="flex items-center gap-2 sm:gap-3 md:gap-3.5
                       px-3 sm:px-4 md:px-5
                       flex-1 py-1.5 sm:py-2 md:py-2.5"
              >
                <span
                    class="text-[#145CB8] text-center font-['Inter']
                         text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
                         font-semibold min-w-[1.5rem] sm:min-w-[2rem]"
                >
                  {{ index + 1 }}
                </span>

                <span
                    class="text-[#222932] font-['Inter']
                         text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem]
                         font-semibold leading-snug"
                >
                  {{ $t(sub.title) }}
                </span>
              </div>

              <!-- Price -->
              <div
                  class="flex w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem]
                       py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4
                       justify-end items-center
                       bg-[#145CB8]"
              >
                <span
                    class="text-white text-right font-['Inter']
                         text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
                         font-semibold"
                >
                  {{ sub.price.toLocaleString() }}
                </span>
              </div>
            </div>
          </template>

          <!-- Empty -->
          <div v-else class="text-center py-8">
            <p
                class="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem]
                     text-gray-400 italic font-medium"
            >
              {{ $t('common.no_results') }}
            </p>
          </div>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { NModal, NCard } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import PriceListFilter from '~/components/ui/PriceListFilter.vue'
import BackPage from '~/components/ui/BackPage.vue'
import type { ServiceItem } from '~/components/views/priceList/Data'
import { useAdvancedSearch } from '~/composable/useSearch'

const { t } = useI18n()
const { advancedSearch } = useAdvancedSearch()

const props = defineProps<{
  show: boolean
  service: ServiceItem | null
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

const searchQuery = ref('')

const handleClose = (val: boolean) => {
  emit('update:show', val)
  if (!val) searchQuery.value = ''
}

const filteredSubServices = computed(() => {
  if (!props.service) return []
  if (!searchQuery.value.trim()) return props.service.subServices

  return props.service.subServices.filter(sub => {
    return advancedSearch(searchQuery.value, t(sub.title))
  })
})

watch(
    () => props.show,
    (val) => {
      if (val) searchQuery.value = ''
    }
)
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #a4ccff;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #145cb8;
}
</style>
