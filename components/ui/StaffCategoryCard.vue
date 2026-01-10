<script setup lang="ts">
import type { StaffMember } from '~/components/views/AboutUs/StaffMember'

defineProps<{
  item: StaffMember
}>()

const showModal = ref(false);

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <div @click="showModal = true ; emit('click')"
       class="flex flex-col
               min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]
               cursor-pointer shadow-2xl
               rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] xl:rounded-[40px]
               items-center text-center justify-center
               hover:shadow-3xl transition-shadow duration-300">

    <div class="w-full aspect-[4/5] overflow-hidden
                    rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] lg:rounded-t-[32px] xl:rounded-t-[40px]
                    border border-black/20">
      <img :src="item.image"
           :alt="item.fullName"
           class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
    </div>

    <div class="flex bg-[#145CB8]
                    rounded-b-[20px] sm:rounded-b-[24px] md:rounded-b-[28px] lg:rounded-b-[32px] xl:rounded-b-[40px]
                    w-full
                    p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px]
                    flex-col justify-center items-center
                    gap-[6px] sm:gap-[8px] md:gap-[10px]">
      <h3 class="text-[#FFF] text-center font-['Inter'] font-bold leading-tight
                       text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[44px]">
        {{ item.fullName }}
      </h3>
      <p class="text-white text-center font-['Inter'] font-normal leading-normal
                      text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px]">
        {{ $t(item.position) }}
      </p>
    </div>
  </div>
  <StaffModal :item="item" :show="showModal" @close="showModal = false" />
</template>

<style scoped>
@media (hover: hover) {
  .flex.flex-col:hover img {
    transform: scale(1.05);
  }
}
</style>