<template>
  <div class="w-full px-14">
    <div class="text-center border w-full rounded-t-[50px] bg-[#C2DDFF] px-10 py-2 mx-auto shadow-2xl cursor-pointer ">
      <div class="items-center min-h-[150px] flex justify-center">
        <h2 class="text-[#145CB8] font-sans text-[56px] font-[700]">
          Тиббий хизмат кўрсатиш тарифини излаш
        </h2>
      </div>
    </div>
    <div>
      <div
        class="border rounded-b-[50px] shadow-2xl h-auto bg-[#E0EEFF] px-40 py-[50px] items-center justify-center mx-auto mb-10 cursor-pointer">
        <n-input placeholder="Тиббий хизмат кўрсатиш тарифини ёзинг"
          class="rounded-2xl bg-white !text-4xl !item-center py-10" size="large" :input-style="{
            height: '100px',
            fontSize: '32px',
          }">
          <template #prefix>
            <n-icon size="70" :component="Search" class="!pr-10" />
          </template>
        </n-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "~/assets/icon/search.svg";
import { NInput, NIcon } from "naive-ui";
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
