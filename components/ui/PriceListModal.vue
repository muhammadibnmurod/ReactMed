<template>
    <n-modal :show="show" @update:show="handleClose" transform-origin="center">
        <n-card class="w-[90vw] max-w-[2578px] rounded-[24px] md:rounded-[40px] bg-[#F0F7FF]" :bordered="false"
            role="dialog" aria-modal="true" content-style="padding: 0;">
            <div v-if="service"
                class="flex flex-col max-h-[85vh] overflow-hidden bg-[#E0EEFF ] rounded-[24px] md:rounded-[40px]">
                <div class="p-4 md:p-8 pb-0">
                    <BackPage mode="modal" @click="handleClose(false)" />

                </div>

                <div class="px-4 md:px-8 pt-4 md:pt-6">
                    <h2 class="text-[#222932] font-['Inter']
                   text-[40px] md:text-[80px]
                   font-bold leading-normal">
                        {{ $t(service.title) }}
                    </h2>
                </div>

                <div class="px-4 md:px-8 py-4 md:py-6">
                    <PriceListFilter v-model="searchQuery" />
                </div>

                <div class="px-4 md:px-8 pb-10
                 flex flex-col gap-3 md:gap-4
                 overflow-y-auto">
                    <template v-if="filteredSubServices.length">
                        <div v-for="(sub, index) in filteredSubServices" :key="sub.id" class="flex items-stretch
                     min-h-[64px] md:min-h-[150px]
                     rounded-[20px] md:rounded-[px]
                     overflow-hidden
                     border border-[#A4CCFF]
                     bg-[#E8F2FF]
                     hover:border-[#145CB8]
                     transition-all shadow-sm">
                            <div class="flex items-center gap-3 md:gap-5
                       px-4 md:px-8
                       flex-1 py-3 md:py-4">
                                <span class="text-[#145CB8] text-center font-['Inter']
                         text-[32px] md:text-[40px]
                         font-semibold">
                                    {{ index + 1 }}
                                </span>

                                <span class="text-[#222932] font-['Inter']
                         text-[26px] md:text-[32px]
                         font-semibold">
                                    {{ $t(sub.title) }}
                                </span>
                            </div>

                            <div class="flex w-[380px] md:w-[420px]
                       py-[24px] pr-[40px] pl-[20px]
                       justify-end items-center
                       bg-[#145CB8]">
                                <span class="text-white text-right font-['Inter']
                         text-[32px] md:text-[40px]
                         font-semibold">
                                    {{ sub.price.toLocaleString() }}
                                </span>
                            </div>
                        </div>
                    </template>

                    <div v-else class="text-center py-20">
                        <p class="text-[20px] md:text-[32px]
                     text-gray-400 italic font-medium">
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

const emit = defineEmits(['update:show'])

const searchQuery = ref('')

const handleClose = (val: boolean) => {
    emit('update:show', val)
    if (!val) searchQuery.value = ''
}

const filteredSubServices = computed(() => {
    if (!props.service) return []
    if (!searchQuery.value.trim()) return props.service.subServices

    return props.service.subServices.filter(sub => {
        const translatedTitle = t(sub.title)
        return advancedSearch(searchQuery.value, translatedTitle)
    })
})

watch(() => props.show, val => {
    if (val) searchQuery.value = ''
})
</script>

<style scoped>
:deep(::-webkit-scrollbar) {
    width: 10px;
}

:deep(::-webkit-scrollbar-track) {
    background: transparent;
}

:deep(::-webkit-scrollbar-thumb) {
    background: #A4CCFF;
    border-radius: 10px;
    border: 3px solid #F0F7FF;
}
</style>
