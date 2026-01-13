<script setup lang="ts">
import Info from "@/assets/icon/info.svg"
import { FlagUz, FlagRu, FlagEng } from "assets/image"

const { locale, setLocale } = useI18n()
const router = useRouter()

function changeLocale(code: "uz" | "uz-cyr" | "ru" | "en") {
  setLocale(code)
}

function goAboutUs() {
  router.push({ name: "AboutUs" })
}
const flags: Record<string, { name: string; flag: string; code: "uz" | "uz-cyr" | "ru" | "en" }> = {
  uz: { name: "O'zbekcha", flag: FlagUz, code: "uz" },
  kril: { name: "Криллча", flag: FlagUz, code: "uz-cyr" },
  ru: { name: "Русский", flag: FlagRu, code: "ru" },
  en: { name: "English", flag: FlagEng, code: "en" },
}
</script>


<template>
  <div class="w-full flex flex-col px-5 py-3 sm:px-8 sm:py-6 md:px-12 lg:px-18 lg:py-12 bg-[#D7E8FF]">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

      <button @click="goAboutUs"
        class="flex items-center gap-2 px-4 py-3 border-2 border-[#145CB8] rounded-xl bg-transparent lg:h-28 hover:bg-blue-50 transition-colors sm:px-6 sm:py-3 sm:gap-4 sm:rounded-2xl shrink-0">
        <Info class="w-5 h-5 text-[#145CB8] sm:w-6 sm:h-6 lg:w-10 lg:h-10 md:w-8 md:h-8" />
        <span class="text-[3rem] font-medium text-[#145CB8] sm:text-xl md:text-2xl lg:text-4xl">
          {{ $t('aboutus') }}
        </span>
      </button>

      <div class="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto justify-start sm:justify-end">
        <button v-for="(item, key) in flags" :key="key" @click="changeLocale(item.code)" :class="[
          'flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 sm:px-5 sm:py-3 lg:px-14 lg:py-8',
          locale === item.code
            ? 'bg-[#3367D6] text-white border-[#3367D6] shadow-md'
            : 'bg-white/50 text-[#333] border-gray-300 hover:bg-white',
        ]">
          <div
            class="w-6 h-6 overflow-hidden border border-gray-100 rounded-full shrink-0 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:h-12 lg:w-12">
            <img :src="item.flag" :alt="item.name" class="object-cover w-full h-full" />
          </div>

          <span class="font-semibold text-sm sm:text-base md:text-lg lg:text-3xl whitespace-nowrap">
            {{ item.name }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
