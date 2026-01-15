<script setup lang="ts">
import type { StaffMember } from '~/components/views/AboutUs/StaffMember'
import { NModal, NCard } from 'naive-ui'
import BackPage from './BackPage.vue'

defineProps<{
  item: StaffMember
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleUpdateShow = (value: boolean) => {
  if (!value) emit('close')
}
</script>

<template>
  <n-modal :show="show" @update:show="handleUpdateShow" mask-closable transform-origin="center">
    <n-card
        class="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[100vw] xl:w-[70vw] max-w-[100rem]
                   rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3.125rem]
                   bg-[#E0EEFF]"
        :bordered="false"
        role="dialog"
        aria-modal="true"
        content-style="padding: 0;">

      <div class="flex flex-col
                        gap-[1.25rem] sm:gap-[1.875rem] md:gap-[2.5rem] lg:gap-[3.125rem] xl:gap-[3.75rem]
                        max-h-[85vh] overflow-y-auto">

        <div class="px-[16px] sm:px-[1.25rem] md:px-[1.875rem] lg:px-[2.5rem] xl:px-[3.125rem]
                            pt-[1rem] sm:pt-[1.25rem] md:pt-[1.5rem] lg:pt-[1.875rem] xl:pt-[2.1875rem]">
          <BackPage mode="modal" @click="emit('close')" />
        </div>

        <div class="flex flex-col items-center justify-center text-center
                            gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem] lg:gap-[3.125rem] xl:gap-[3.75rem]
                            px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3.125rem]
                            pb-[1.5rem] sm:pb-[2rem] md:pb-[2.5rem] lg:pb-[3.125rem] xl:pb-[3.75rem]">

          <div class="w-full max-w-[17.5rem] sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[31.25rem] xl:max-w-[37.5rem]
                                aspect-square overflow-hidden flex justify-center items-start
                                rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2.25rem] xl:rounded-[2.75rem]
                                border border-[#A4CCFF] bg-[#E0EEFF]
                                shadow-[0_0.25rem_1rem_0_rgba(0,0,0,0.16)]">
            <img :src="item.image"
                 class="w-full h-full object-cover object-top"
                 :alt="item.fullName" />
          </div>

          <div class="flex flex-col items-center justify-center
                                gap-[0.75rem] sm:gap-[1rem] md:gap-[1.25rem] lg:gap-[1.5rem] xl:gap-[1.75rem]">
            <h2 class="text-[#222932] text-center font-['Inter'] font-bold leading-tight
                                   text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]">
              {{ item.fullName }}
            </h2>

            <p class="text-[#222932] text-center font-['Inter'] leading-normal
                                  text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2.25rem]">
              {{ $t(item.position) }}
            </p>

            <div class="text-[#222932]/70 font-['Inter'] font-normal leading-relaxed text-left
                                    text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]
                                    max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[100%]">
              5 yillik tajribaga ega mutahasis bo'lib, ular Yaponiya davlatida malaka ham oshirganlar,
              hozirgi kunda eng yutuk shifokor mutahasislardan biri, sizga aynan shu inson tashxis
              qo'yishi va to'liq davolanib chiqishinggiz uchun yordam beruvchi qahramonimiz bo'ladi 15
              yillik tajribaga ega mutahasis bo'lib, ular Yaponiya davlatida malaka ham oshirganlar,
              hozirgi kunda eng yutuk shifokor mutahasislardan biri, sizga aynan shu inson tashxis
              qo'yishi va to'liq davolanib chiqishinggiz uchun yordam beruvchi qahramonimiz bo'ladi
            </div>
          </div>

        </div>

      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
/* Custom scrollbar for modal content */
.flex.flex-col::-webkit-scrollbar {
  width: 6px;
}

.flex.flex-col::-webkit-scrollbar-track {
  background: transparent;
}

.flex.flex-col::-webkit-scrollbar-thumb {
  background: #A4CCFF;
  border-radius: 10px;
}

.flex.flex-col::-webkit-scrollbar-thumb:hover {
  background: #145CB8;
}
</style>