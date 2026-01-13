<template>
  <div class="w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-24">
    <div class="text-center border w-full
              rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] xl:rounded-t-[2rem]
              bg-[#C2DDFF]
              px-4 sm:px-6 md:px-10 xl:px-14
              py-2 mx-auto shadow-2xl cursor-pointer">
      <div class="items-center
                min-h-[6rem] sm:min-h-8rem] md:min-h-[2rem] xl:min-h-[7rem]
                flex justify-center">
        <h2 class="text-[#145CB8] font-sans font-[700]
                 text-[2rem] sm:text-[28rem] md:text-[0.4rem] lg:text-[0.5rem] xl:text-[3rem]
                 leading-tight text-center px-2">
          {{ $t("PriceFilter.title") }}
        </h2>
      </div>
    </div>
    <div>
      <div class="border
                rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem] xl:rounded-b-[2rem]
                shadow-2xl h-auto bg-[#E0EEFF]
                px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40
                py-[2rem] sm:py-[25rem] md:py-[35rem] xl:py-[3rem]
                items-center justify-center mx-auto mb-6 sm:mb-8 xl:mb-10 cursor-pointer">
        <n-input
          :placeholder="$t('PriceFilter.placeholder')"
          @update:value="emit('update:modelValue', $event)"
          class="rounded-xl sm:rounded-2xl md:rounded-3xl bg-white py-2 sm:py-4 md:py-6 xl:py-8 text-[1.2rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[1.8rem] w-full"
          size="large"
          :input-style="inputStyles">
          <template #prefix>
            <n-icon :size="iconSize" class="!pr-4 sm:!pr-6 md:!pr-8 xl:!pr-10">
              <Search />
            </n-icon>
          </template>
        </n-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "~/assets/icon/search.svg"
import { computed } from "vue"
import { NInput, NIcon } from "naive-ui"

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Responsive styles
const inputStyles = computed(() => {
  return {
    height: '90px',
    fontSize: '106px'
  }
})

const iconSize = computed(() => 50)
</script>

<style scoped>
:deep(.n-input__prefix) {
  padding-right: 34px;
  padding-left: 20px;
  border-right: 2px solid #d1d5db;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
}

:deep(.n-input__input-el) {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
