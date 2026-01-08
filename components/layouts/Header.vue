<template>
  <div
    class="relative w-full h-full flex items-center px-36 py-64 overflow-hidden bg-gradient-to-br from-[#1E56B1] via-[#0B3A8D] to-[#082452]"
  >
    <!-- BACKGROUND LOGO (o‘ng tomonda) -->
    <img
      :src="Logo"
      alt="Background Logo"
      class="absolute right-0 top-1/2 translate-x-48 -translate-y-72 w-[1200px] opacity-10"
    />

    <!-- OLDINGI CONTENT -->
    <div class="relative z-10 flex gap-12 items-center">
      <!-- Chapdagi logo -->
      <img :src="Logo" alt="Logo" class="w-[279px] h-[369px] py-4" />

      <!-- Text -->
      <p class="font-semibold text-[70px] leading-tight text-white">
        “Ўзбекистон темир йўллари" АЖ Марказий поликлиникасининг пуллик тиббий
        хизматлари учун нархлар рўйхати
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/icon/Vector.png";
</script>
