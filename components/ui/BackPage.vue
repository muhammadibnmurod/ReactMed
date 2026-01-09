<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
    mode?: 'page' | 'modal'
    to?: string
}>(), {
    mode: 'page'
})

const emit = defineEmits<{
    (e: 'click'): void
}>()

const router = useRouter()

function handleClick() {
    if (props.mode === 'modal') {
        emit('click')
        return
    }

    if (props.to) {
        router.push({ name: props.to })
    } else {
        router.back()
    }
}
</script>


<template>
    <button @click="handleClick"
        class="inline-flex pt-[40px] pr-[60px] max-w-[600px] pb-[40px] pl-[40px] items-center gap-[20px] rounded-[50px] bg-[#CCE3FF]">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M20 39.9862H60" stroke="#364960" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M40 60L20 40L40 20" stroke="#364960" stroke-width="6" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <span class="text-[#222932] font-['Inter'] text-[56px] font-semibold leading-normal">
            {{ $t("back") }}
        </span>
    </button>
</template>
