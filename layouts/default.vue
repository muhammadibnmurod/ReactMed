<script setup lang="ts"></script>

<template>
  <div class="
      flex flex-col
      min-h-screen
      w-full
      bg-[#EBF4FF]
    ">
    <Header />
    <LanguageSelect />

    <div class="
        flex-1
        w-full
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24
      ">
      <NuxtPage class="w-full h-full" />
    </div>
  </div>
</template>
