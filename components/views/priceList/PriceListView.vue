<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div>
    <h1 class="justify-center pb-[284px] text-center pt-5 w-full text-[#222932] text-[96px] font-bold  font-sans">
      {{ $t("priceList.title") }}
    </h1>

    <div class="pb-36 bg-[#EBF4FF] w-full">
      <PriceListFilter v-model="search" />
    </div>

    <PriceListProduct :search="search" class="pb-20" />
  </div>
</template>

