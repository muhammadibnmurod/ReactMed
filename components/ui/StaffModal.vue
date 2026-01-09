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
    <n-modal :show="show" @update:show="handleUpdateShow" mask-closable>
        <n-card class="w-[2450px] rounded-[60px] bg-[#E0EEFF]" :bordered="false" role="dialog" aria-modal="true">
            <div class="flex flex-col gap-[80px]">

                <div class="px-[60px] pt-[40px] mb-10 h-full w-full ">
                    <BackPage @click="emit('close')" />
                </div>

                <div class="flex flex-col items-center justify-center text-center gap-[80px] px-[60px] pb-[60px]">

                    <div
                        class="w-[800px] h-[760px] overflow-hidden flex justify-center items-start rounded-[50px] border border-[#A4CCFF] bg-[#E0EEFF] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
                        <img :src="item.image" class="w-full h-[820px] object-cover object-top" />
                    </div>


                    <div class="flex flex-col items-center justify-center gap-[30px]">
                        <h2 class="text-[#222932] text-center font-['Inter'] text-[56px] font-bold leading-normal">
                            {{ item.fullName }}
                        </h2>

                        <p class="text-[#222932] text-center font-['Inter'] text-[40px] leading-normal">
                            {{ $t(item.position) }}
                        </p>

                        <div class="text-[#222932]/70 font-['Inter'] text-[56px] font-normal leading-normal">
                            5 yillik tajribaga ega mutahasis bo’lib, ular Yaponiya davlatida malaka ham oshirganlar, hozirgi kunda eng yutuk shifokor mutahasislardan biri, sizga aynan shu inson tashxis qo’yishi va to’liq davolanib chiqishinggiz uchun yordam beruvchi qahramonimiz bo’ladi 15 yillik tajribaga ega mutahasis bo’lib, ular Yaponiya davlatida malaka ham oshirganlar, hozirgi kunda eng yutuk shifokor mutahasislardan biri, sizga aynan shu inson tashxis qo’yishi va to’liq davolanib chiqishinggiz uchun yordam beruvchi qahramonimiz bo’ladi
                        </div>
                    </div>

                </div>

            </div>
        </n-card>
    </n-modal>
</template>
