<script setup lang="ts">
import { ref } from "vue"; // ref ni import qilamiz
// import ListIcon from "~/assets/icon/list.svg";
// import GridIcon from "~/assets/icon/grid-two.svg";
import GridIcon from "~/assets/icon/grid.vue";
import List from "~/assets/icon/list.vue";

defineProps<{
  search: string;
}>();

const activeView = ref<"list" | "grid">("grid");
</script>

<template>
  <div class="w-full">
    <div class="flex p-14 justify-end gap-[1rem]">
      <button
        @click="activeView = 'list'"
        :class="[
          'flex h-[9.25rem] p-[2.5rem] justify-center items-center gap-[1rem] rounded-[1.5rem] border-[0.125rem] border-[#145CB8]/40 transition-colors',
          activeView === 'list'
            ? 'bg-[#145CB8] text-white'
            : 'bg-[#D7E8FF] text-[#145CB8]',
        ]"
      >
        <!-- <ListIcon :class="activeView === 'list' ? 'text-white' : 'text-[#145CB8]'" /> -->
        <List
          :class="activeView === 'list' ? 'text-white' : 'text-[#145CB8]'"
        />
      </button>

      <button
        @click="activeView = 'grid'"
        :class="[
          'flex h-[9.25rem] p-[2.5rem] justify-center items-center gap-[1rem] rounded-[1.5rem] border-[0.125rem] border-[#145CB8]/40 transition-colors',
          activeView === 'grid'
            ? 'bg-[#145CB8] text-white'
            : 'bg-[#D7E8FF] text-[#145CB8]',
        ]"
      >
        <!-- <GridIcon :class="activeView === 'grid' ? 'text-white' : 'text-[#145CB8]'" /> -->
        <GridIcon
          :class="activeView === 'grid' ? 'text-white' : 'text-[#145CB8]'"
        />
      </button>
    </div>

    <PriceListProduct
      :search="search"
      :viewMode="activeView"
      class="pb-20"
      v-if="activeView === 'grid'"
    />
    <ProductPriceListView v-else-if="activeView === 'list'" :search="search" />
  </div>
</template>
