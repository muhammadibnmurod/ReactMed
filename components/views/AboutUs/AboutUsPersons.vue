<!-- <script setup lang="ts">
import { computed } from 'vue'
import { staffMembers } from './StaffMember';
import StaffCategoryCard from '~/components/ui/StaffCategoryCard.vue'

</script>

<template>
  <div class="grid grid-cols-4 w-full px-14 gap-6 bg-[#EBF4FF]">
    <StaffCategoryCard v-for="item in staffMembers" :key="item.id" :item="item" />
  </div>
</template> -->

<script setup lang="ts">
import { staffMembers } from './StaffMember';
import StaffCategoryCard from '~/components/ui/StaffCategoryCard.vue'
</script>
<template>
  <div class="grid grid-cols-2 w-full px-10 gap-6 bg-[#EBF4FF]">
    <StaffCategoryCard v-for="item in staffMembers" :key="item.id" :item="item" />
  </div>
</template>