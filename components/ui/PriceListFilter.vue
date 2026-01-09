<template>
  <div class="w-full px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
    <div class="text-center border w-full 
              rounded-t-[20px] sm:rounded-t-[30px] md:rounded-t-[40px] xl:rounded-t-[50px]
              bg-[#C2DDFF] 
              px-4 sm:px-6 md:px-10 xl:px-14 
              py-2 mx-auto shadow-2xl cursor-pointer">
      <div class="items-center 
                min-h-[60px] sm:min-h-[80px] md:min-h-[120px] xl:min-h-[150px]
                flex justify-center">
        <h2 class="text-[#145CB8] font-sans font-[700]
                 text-[20px] sm:text-[28px] md:text-[40px] lg:text-[50px] xl:text-[56px]
                 leading-tight text-center px-2">
          {{ $t("PriceFilter.title") }}
        </h2>
      </div>
    </div>
    <div>
      <div class="border 
                rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[40px] xl:rounded-b-[50px]
                shadow-2xl h-auto bg-[#E0EEFF]
                px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40
                py-[20px] sm:py-[25px] md:py-[35px] xl:py-[50px]
                items-center justify-center mx-auto mb-6 sm:mb-8 xl:mb-10 cursor-pointer">
        <n-input 
          :placeholder="$t('PriceFilter.placeholder')" 
          @update:value="emit('update:modelValue', $event)"
          class="rounded-xl sm:rounded-2xl md:rounded-3xl bg-white py-2 sm:py-4 md:py-6 xl:py-10" 
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
    height: '60px',
    fontSize: '16px'
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
