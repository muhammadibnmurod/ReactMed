<template>
    <div class="
      flex flex-col
      min-h-screen
      w-full
      bg-[#EBF4FF]
    ">
        <Header />
        <LanguageSelect />
        <h1 class="justify-center text-center pt-5 w-full text-[#222932] text-[96px] font-bold font-sans">
            {{ $t("priceList.title") }}
        </h1>

        <div class="pb-36 bg-[#EBF4FF] w-full">
            <PriceListFilter v-model="search" />
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const search = ref('')
// Qidiruv matnini barcha ichki sahifalar olishi uchun provide qilamiz
provide('searchTerm', search)
</script>