<template>
  <div class="relative w-full overflow-hidden flex items-center
              bg-gradient-to-br from-[#1E56B1] via-[#0B3A8D] to-[#082452]
              px-4 py-8 
              sm:px-6 sm:py-10 
              md:px-12 md:py-16 
              lg:px-16 lg:py-10 lg:h-full
              xl:px-20 xl:py-14
              min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[100px]">

    <!-- Background Logo -->
    <img :src="Logo" alt="Background Logo" class="absolute right-0 top-1/2 opacity-10 pointer-events-none
                -translate-y-1/2 translate-x-1/4
                w-[200px] 
                sm:w-[300px] 
                md:w-[400px]  md:translate-x-400 md:translate-y-102
                lg:w-[500px] 
                xl:w-[400px] 
                2xl:w-[700px]
                object-contain" />

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col md:flex-row 
                items-start md:items-center 
                gap-4 sm:gap-6 md:gap-8 lg:gap-12 lg:w-full xl:gap-8
                w-full">

      <!-- Main Logo -->
      <img :src="Logo" alt="Logo" class="w-16 h-16
                  sm:w-20 sm:h-20
                  md:w-24 md:h-24
                  lg:w-28 lg:h-28
                  xl:w-32 xl:h-32
                  2xl:w-36 2xl:h-36
                  object-contain flex-shrink-0" />

      <!-- Title Text -->
      <p class="font-semibold text-white leading-tight w-full
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl lg:w-full
                xl:text3xl
                2xl:text-5xl
                max-w-3xl">
        {{ $t('header.title') }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/icon/Vector.png"
</script>