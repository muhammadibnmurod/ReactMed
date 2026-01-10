<template>
  <div
    class="relative first-div w-full overflow-hidden flex items-center bg-gradient-to-br from-[#1E56B1] via-[#0B3A8D] to-[#082452] px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 lg:px-16 lg:py-10 lg:h-full xl:px-20 xl:py-14 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[100px]"
  >
    <!-- Background Logo -->
    <img
      :src="Logo"
      alt="Background Logo"
      class="absolute right-0 top-1/2 opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/4 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[400px] 2xl:w-[700px] object-contain"
    />

    <!-- Content Container -->
    <div
      class="relative z-10 flex flex-col md:flex-row second-div items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 lg:w-full xl:gap-8 w-full"
    >
      <!-- Main Logo -->
      <img
        :src="Logo"
        alt="Logo"
        class="w-16 h-16 header-image sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 object-contain flex-shrink-0"
      />

      <!-- Title Text -->
      <p
        class="font-semibold header-title text-white leading-tight w-full text-lg sm:text-xl md:text-3xl lg:text-3xl lg:w-full xl:text2xl 2xl:text-5xl max-w-3xl"
      >
        {{ $t("header.title") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/icon/Vector.png";
</script>

<style scoped>
/* --- Kichik va o'rta o'lchamlar --- */

@media (min-width: 710px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 822px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 950px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 1150px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 1308px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

/* --- Katta (Desktop) o'lchamlar --- */

@media (min-width: 1430px) {
  .first-div {
    height: 200px !important;
  }
  .header-title {
    font-size: 30px !important;
  }
  .header-image {
    width: 100px !important;
  }
}

@media (min-width: 1590px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 1750px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 1790px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 1910px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

/* --- Ultra-wide va 2K/4K o'lchamlar --- */

@media (min-width: 2150px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 2750px) {
  .first-div {
  }
  .header-title {
  }
  .header-image {
  }
}

@media (min-width: 2870px) {
  .first-div {
    height: 500px !important;
  }
  .header-title {
    max-width: none !important;
    width: 100% !important;
    font-size: 75px !important;
  }
  .header-image {
    width: 350px !important;
    height: auto !important;
    padding-left: 100px !important;
  }
}

@media (min-width: 4310px) {
  .first-div {
    height: 700px !important;
  }
  .header-title {
    width: 100% !important;
    font-size: 80px !important;
    padding-right: 700px !important;
  }
  .header-image {
    width: 450px !important;
    height: auto !important;
    padding-left: 100px !important;
  }
  @media (min-width: 5750px) {
    .first-div {
      height: 700px !important;
    }
    .header-title {
      width: 100% !important;
      font-size: 80px !important;
      padding-right: 700px !important;
    }
    .header-image {
      width: 550px !important;
      height: auto !important;
      padding-left: 100px !important;
    }
  }
}
</style>
