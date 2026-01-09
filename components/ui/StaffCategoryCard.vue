<script setup lang="ts">
import type { StaffMember } from '~/components/views/AboutUs/StaffMember'

defineProps<{
    item: StaffMember
}>()
</script>

<template>
    <div class="flex flex-col items-center text-center justify-center">

        <div class="w-full aspect-[4/5] overflow-hidden rounded-t-[40px] border border-black/20">
            <img :src="item.image" :alt="item.fullName" class="w-full h-full object-cover object-top" />
        </div>

        <div class="flex bg-[#145CB8] rounded-b-[40px] w-full p-[40px] flex-col justify-center items-center gap-[10px]">
            <h3 class="text-[#FFF] text-center font-['Inter'] text-[56px] font-bold leading-tight">
                {{ item.fullName }}
            </h3>
            <p class="text-white text-center font-['Inter'] text-[40px] font-normal leading-normal">
                {{ $t(item.position) }}
            </p>
        </div>
    </div>
</template>
