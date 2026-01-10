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
        class="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] max-w-[1400px]
                   rounded-[20px] sm:rounded-[24px] md:rounded-[32px] lg:rounded-[40px] xl:rounded-[50px]
                   bg-[#E0EEFF]"
        :bordered="false"
        role="dialog"
        aria-modal="true"
        content-style="padding: 0;">

      <div class="flex flex-col
                        gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px]
                        max-h-[85vh] overflow-y-auto">

        <div class="px-[16px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px]
                            pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[30px] xl:pt-[35px]">
          <BackPage mode="modal" @click="emit('close')" />
        </div>

        <div class="flex flex-col items-center justify-center text-center
                            gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px]
                            px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] xl:px-[50px]
                            pb-[24px] sm:pb-[32px] md:pb-[40px] lg:pb-[50px] xl:pb-[60px]">

          <div class="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]
                                aspect-square overflow-hidden flex justify-center items-start
                                rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[36px] xl:rounded-[44px]
                                border border-[#A4CCFF] bg-[#E0EEFF]
                                shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
            <img :src="item.image"
                 class="w-full h-full object-cover object-top"
                 :alt="item.fullName" />
          </div>

          <div class="flex flex-col items-center justify-center
                                gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[28px]">
            <h2 class="text-[#222932] text-center font-['Inter'] font-bold leading-tight
                                   text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px]">
              {{ item.fullName }}
            </h2>

            <p class="text-[#222932] text-center font-['Inter'] leading-normal
                                  text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px]">
              {{ $t(item.position) }}
            </p>

            <div class="text-[#222932]/70 font-['Inter'] font-normal leading-relaxed text-left
                                    text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]
                                    max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
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