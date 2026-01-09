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
  <div class="w-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 bg-[#D7E8FF]">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
      <button @click="goAboutUs" class="px-4 sm:px-6 py-2 sm:py-3 
               flex items-center border-2 rounded-xl sm:rounded-2xl 
               border-[#145CB8] gap-2 sm:gap-4 
               bg-transparent hover:bg-blue-50 transition-colors">
        <Info class="text-[#145CB8] w-5 h-5 sm:w-6 sm:h-6" />
        <span class="text-[18px] sm:text-[24px] md:text-[30px] text-[#145CB8]">
          {{ $t('aboutus') }}
        </span>
      </button>

      <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
        <button v-for="(item, key) in flags" :key="key" @click="changeLocale(item.code)" :class="[
          'flex items-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border transition-all duration-200',
          locale === item.code
            ? 'bg-[#3367D6] text-white border-[#3367D6] shadow-md'
            : 'bg-white/50 text-[#333] border-gray-300 hover:bg-white',
        ]">
          <div class="rounded-full overflow-hidden border border-gray-100 flex-shrink-0 
                    w-6 h-6 sm:w-8 sm:h-8">
            <img :src="item.flag" :alt="item.name" class="w-full h-full object-cover" />
          </div>

          <span class="font-semibold 
                     text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
