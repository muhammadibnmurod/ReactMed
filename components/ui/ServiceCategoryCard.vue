<script setup lang="ts">
import type { ServiceCategory } from '~/components/views/priceList/Data'

defineProps<{
    item: ServiceCategory
}>()
</script>

<template>
    <div class="rounded-[28px] cursor-pointer bg-[#EAF2FF] overflow-hidden border border-[#D6E4FF] hover:shadow-lg transition shadow-2xl">
        <div class=" flex items-center justify-center">
            <component :is="item.icon" class="w-[250px] h-[300px]" />
        </div>


        <div class="bg-[#2F5FB3] px-6 h-[180px] flex items-center justify-center">
            <p class="text-white text-center text-[40px] font-semibold leading-tight">
                {{ item.title }}
            </p>
        </div>
    </div>
</template>
