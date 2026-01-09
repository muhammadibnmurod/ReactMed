<script setup lang="ts">
import type { ServiceCategory } from '~/components/views/priceList/Data'

defineProps<{
    item: ServiceCategory
}>()
</script>

<template>
    <NuxtLink :to="`/priceList/${item.id}`" class="block rounded-[20px] sm:rounded-[24px] xl:rounded-[28px]
               cursor-pointer bg-[#EAF2FF] overflow-hidden
               border border-[#D6E4FF]
               shadow-xl hover:shadow-2xl transition">

        <div class="flex items-center justify-center
                    h-[180px] sm:h-[220px] md:h-[260px] xl:h-[300px]">
            <component :is="item.icon" class="w-[140px] h-[170px]
                       sm:w-[180px] sm:h-[210px]
                       md:w-[210px] md:h-[250px]
                       xl:w-[250px] xl:h-[300px]" />
        </div>

        <div class="bg-[#2F5FB3]
                   px-4 sm:px-6
                   h-[140px] sm:h-[180px] md:h-[210px] xl:h-[250px]
                   flex items-center justify-center">
            <p class="text-white text-center font-semibold leading-tight
                       text-[20px]
                       sm:text-[26px]
                       md:text-[32px]
                       xl:text-[40px]">
                {{ $t(item.title) }}
            </p>
        </div>
    </NuxtLink>
</template>
