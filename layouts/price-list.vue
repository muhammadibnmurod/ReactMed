<template>
  <div class="flex flex-col min-h-screen w-full bg-[#EBF4FF]">
    <Header />
    <LanguageSelect />

    <!-- <div class="!p-14px !pl-14 sm:p-4 md:p-5 pb-0">
      <BackPage />
    </div> -->

    <div
      class="px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 gap-5"
    >
      <h1
        class="text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-3 sm:pb-4 md:pb-5 w-full text-[#222932] font-bold font-sans text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-tight"
      >
        {{ $t("priceList.title") }}
      </h1>
      <p
        class="flex justify-center text-center p-14 font-sans text-[#222932B2] text-[3rem]"
      >
        {{ $t("priceList.description-1") }}
        <br />
        {{ $t("priceList.description-2") }}
      </p>

      <div class="pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full">
        <PriceListFilter v-model="search" />
      </div>
    </div>

    <div class="flex-1 w-full px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import PriceListFilter from "~/components/ui/PriceListFilter.vue";
import BackPage from "~/components/ui/BackPage.vue";

const search = ref("");
provide("searchTerm", search);
</script>
