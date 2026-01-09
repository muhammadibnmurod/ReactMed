<script setup lang="ts"></script>

<template>
  <div class="flex flex-col w-full bg-[#EBF4FF]">
    <Header />
    <LanguageSelect />

    <div class="flex-1 w-full px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <NuxtPage class="w-full h-full" />
    </div>
  </div>
</template>
