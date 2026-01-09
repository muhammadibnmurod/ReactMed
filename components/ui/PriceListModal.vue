<template>
    <n-modal :show="show" @update:show="(val) => $emit('update:show', val)" transform-origin="center">
        <n-card class="!w-[90vw] max-w-[1000px] !rounded-[50px] bg-[#F5F9FF] shadow-2xl" :bordered="false" role="dialog"
            aria-modal="true">
            <div v-if="service" class="flex flex-col gap-8 p-6">
                <div class="flex justify-between items-center border-b border-[#A4CCFF] pb-6">
                    <h2 class="text-[#145CB8] font-['Inter'] text-[40px] font-bold">
                        {{ $t(service.title) }}
                    </h2>
                    <button @click="$emit('update:show', false)" class="text-[#145CB8] text-4xl">&times;</button>
                </div>

                <div class="flex flex-col gap-4">
                    <div v-for="sub in service.subServices" :key="sub.id"
                        class="flex justify-between items-center p-8 rounded-[30px] border border-[#A4CCFF] bg-[#E0EEFF] hover:bg-[#C2DDFF] transition-all">
                        <span class="text-[#222932] font-['Inter'] text-[32px] font-medium">
                            {{ $t(sub.title) }}
                        </span>
                        <span class="text-[#145CB8] font-['Inter'] text-[36px] font-bold">
                            {{ sub.price.toLocaleString() }} {{ $t('common.sum') }}
                        </span>
                    </div>
                </div>

                <div class="mt-4 text-center">
                    <p class="text-[#222932]/60 text-[24px] italic">{{ $t('common.modal_hint') }}</p>
                </div>
            </div>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { NModal, NCard } from 'naive-ui'
import type { ServiceItem } from '~/components/views/priceList/Data'

defineProps<{
    show: boolean
    service: ServiceItem | null
}>()

defineEmits(['update:show'])
</script>