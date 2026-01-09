<script setup lang="ts">
import { computed, ref, inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { serviceCategories, type ServiceItem } from '~/components/views/priceList/Data'
import PriceListModal from '~/components/ui/PriceListModal.vue'
import { useAdvancedSearch } from '~/composable/useSearch'

const route = useRoute()
const categoryId = computed(() => Number(route.params.id))
const { t: $t } = useI18n()
const { advancedSearch } = useAdvancedSearch()

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
        const translatedTitle = $t(service.title)
        return advancedSearch(searchTerm.value, translatedTitle)
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
    <div class="flex w-full flex-col 
              px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 
              items-start 
              gap-[15px] sm:gap-[18px] md:gap-[20px] 
              py-6 sm:py-8 md:py-10">
        <template v-if="category">

            <h1 class="text-[#145CB8] font-bold mb-6 sm:mb-8 md:mb-10
                     text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]">
                {{ $t(category.title) }}
            </h1>

            <template v-if="filteredServices.length > 0">
                <div v-for="(service, index) in filteredServices" :key="service.id" @click="openServiceDetails(service)"
                    class="flex items-center cursor-pointer self-stretch 
                         rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px]
                         border border-[#A4CCFF] bg-[#E0EEFF] 
                         shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all">
                    <div class="flex items-center">
                        <div class="flex 
                                  py-[20px] sm:py-[30px] md:py-[40px] lg:py-[48px] 
                                  px-[25px] sm:px-[35px] md:px-[50px] lg:px-[60px]
                                  rounded-l-[30px] sm:rounded-l-[40px] md:rounded-l-[50px] lg:rounded-l-[60px]
                                  justify-center items-center bg-[#C2DDFF]">
                            <p class="flex 
                                    w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]
                                    h-[40px] sm:h-[50px] md:h-[65px] lg:h-[80px]
                                    justify-center items-center 
                                    rounded-[12px] sm:rounded-[15px] md:rounded-[18px] lg:rounded-[20px]
                                    bg-[#145CB8] text-white font-bold
                                    text-[20px] sm:text-[28px] md:text-[36px] lg:text-[46px]">
                                {{ index + 1 }}
                            </p>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-between 
                              px-6 sm:px-8 md:px-10 lg:px-14">
                        <span class="text-[#145CB8] font-['Inter'] font-semibold leading-normal
                                   px-2 sm:px-4 md:px-6 lg:px-10
                                   text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[46px]">
                            {{ $t(service.title) }}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                           :width="20" :height="32"
                           class="sm:w-[24] sm:h-[38] md:w-[28] md:h-[48]"
                           viewBox="0 0 28 48" fill="none">
                            <path d="M4 4L24 24L4 44" stroke="#145CB8" stroke-width="6" sm:stroke-width="8" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </template>

            <template v-else-if="searchTerm.trim()">
                <div class="w-full text-center py-12 sm:py-16 md:py-20">
                    <p class="text-gray-400 font-['Inter']
                           text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
                        Qidiruv bo'yicha natija topilmadi
                    </p>
                </div>
            </template>
        </template>

        <template v-else>
            <div class="w-full text-center py-12 sm:py-16 md:py-20">
                <p class="text-gray-400 font-['Inter']
                       text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
                    Maʼlumot topilmadi
                </p>
            </div>
        </template>
    </div>

    <PriceListModal v-model:show="showModal" :service="selectedService" />
</template>