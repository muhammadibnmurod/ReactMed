<script setup lang="ts">
import Info from "@/assets/icon/info.svg";
import { FlagUz } from "assets/image";
import { FlagRu } from "assets/image";
import { FlagEng } from "assets/image";

const { locale, setLocale } = useI18n();

function changeLocale(code: "uz" | "uz-cyr" | "ru" | "en") {
  setLocale(code);
}

const flags: Record<string, { name: string; flag: string; code: "uz" | "uz-cyr" | "ru" | "en" }> = {
  uz: {
    name: "O'zbekcha",
    flag: FlagUz,
    code: "uz",
  },
  kril: {
    name: "Криллча",
    flag: FlagUz,
    code: "uz-cyr",
  },
  ru: {
    name: "Русский",
    flag: FlagRu,
    code: "ru",
  },
  en: {
    name: "English",
    flag: FlagEng,
    code: "en",
  },
};

</script>

<template>
  <div class="w-full flex flex-col px-16 py-6 bg-[#D7E8FF]">
    <div class="flex justify-between items-center">
      <button
        class="px-6 py-3 flex items-center border-2 rounded-2xl border-[#145CB8] gap-4 bg-transparent hover:bg-blue-50 transition-colors"
      >
        <Info class="text-[#145CB8]" />
        <span class="text-[30px] text-[#145CB8]"> {{ $t('aboutus') }}</span>
      </button>

      <div class="flex items-center gap-3">
        <button
          v-for="(item, key) in flags"
          :key="key"
          @click="changeLocale(item.code)"
          :class="[
            'flex items-center gap-3 px-[40px] py-[20px] rounded-xl border transition-all duration-200',
            locale === item.code
              ? 'bg-[#3367D6] text-white border-[#3367D6] shadow-md'
              : 'bg-white/50 text-[#333] border-gray-300 hover:bg-white',
          ]"
        >
          <div
            class="rounded-full overflow-hidden border border-gray-100 flex-shrink-0"
          >
            <img
              :src="item.flag"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>

          <span class="font-semibold text-[30px]">{{ item.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
