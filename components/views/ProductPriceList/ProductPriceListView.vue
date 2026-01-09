<script setup lang="ts">
import { computed, ref, inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { serviceCategories, type ServiceItem } from '~/components/views/priceList/Data'
import PriceListModal from '~/components/ui/PriceListModal.vue'

const route = useRoute()
const categoryId = computed(() => Number(route.params.id))

const searchTerm = inject<Ref<string>>('searchTerm', ref(''))

const category = computed(() =>
    serviceCategories.find(item => item.id === categoryId.value)
)

const filteredServices = computed(() => {
    if (!category.value) return []

    if (!searchTerm.value.trim()) {
        return category.value.services
    }

    return category.value.services.filter(service => {
        const serviceTitle = service.title.toLowerCase()
        const searchValue = searchTerm.value.toLowerCase()
        return serviceTitle.includes(searchValue)
    })
})

const showModal = ref(false)
const selectedService = ref<ServiceItem | null>(null)

function openServiceDetails(service: ServiceItem) {
    selectedService.value = service
    showModal.value = true
}
</script>

<template>
    <div class="flex w-full flex-col px-14 items-start gap-[20px] py-10">
        <template v-if="category">

            <h1 class="text-[#145CB8] text-[56px] font-bold mb-10">{{ $t(category.title) }}</h1>

            <template v-if="filteredServices.length > 0">
                <div v-for="(service, index) in filteredServices" :key="service.id" @click="openServiceDetails(service)"
                    class="flex items-center cursor-pointer self-stretch rounded-[59.659px] border-[1.193px] border-[#A4CCFF] bg-[#E0EEFF] shadow-[0_4.773px_19.091px_0_rgba(0,0,0,0.16)] hover:scale-[1.01] transition-transform">
                    <div class="flex items-center">
                        <div
                            class="flex py-[48px] px-[60px] rounded-l-[59.659px] justify-center items-center bg-[#C2DDFF]">
                            <p
                                class="flex w-[120px] h-[80px] justify-center items-center rounded-[20px] bg-[#145CB8] text-white text-[46px] font-bold">
                                {{ index + 1 }}
                            </p>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-between px-14">
                        <span
                            class="text-[#145CB8] px-10 font-['Inter'] text-[46px] md:text-[56px] font-semibold leading-normal">
                            {{ $t(service.title) }}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="48" viewBox="0 0 28 48" fill="none">
                            <path d="M4 4L24 24L4 44" stroke="#145CB8" stroke-width="8" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </template>

            <template v-else-if="searchTerm.trim()">
                <div class="w-full text-center py-20">
                    <p class="text-[40px] text-gray-400 font-['Inter']">Qidiruv bo'yicha natija topilmadi</p>
                </div>
            </template>
        </template>

        <template v-else>
            <div class="w-full text-center py-20">
                <p class="text-[40px] text-gray-400 font-['Inter']">Maʼlumot topilmadi</p>
            </div>
        </template>
    </div>

    <PriceListModal v-model:show="showModal" :service="selectedService" />
</template>