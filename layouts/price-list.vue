<template>
    <div class="flex flex-col min-h-screen w-full bg-[#EBF4FF]">
        <Header />
        <LanguageSelect />

        <div class="p-10 gap-5">
            <h1 class="text-center pt-10 pb-5 w-full text-[#222932] text-[96px] font-bold font-sans">
                {{ $t("priceList.title") }}
            </h1>

            <div class="pb-10 w-full">
                <PriceListFilter v-model="search" />
            </div>
        </div>

        <div class="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import PriceListFilter from '~/components/ui/PriceListFilter.vue'

const search = ref('')
provide('searchTerm', search)
</script>