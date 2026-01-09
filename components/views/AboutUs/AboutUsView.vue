<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
    <div>
        <div class="flex flex-col p-8 pb-[168px]">
            <div class="w-[600px]">
                <BackPage />
            </div>
            <h1
                class="justify-center text-center pt-5  w-full text-[#222932] text-[96px] font-bold  font-sans">
                {{ $t("staff.title") }}
            </h1>
            <p class="flex justify-center text-center font-sans text-[#222932B2] text-[40px]">
                "Ўзбекистон темир йўллари " АЖ нинг 25 июнь 2019 йилдаги 822-Н сонли буйруқни 1-иловасига асосан
                "Даволаш-профилактик муассасаларида пуллик тиббий хизмат кўрсатиш тарифларини шакллантириш " 
            </p>
        </div>


        <div class="pb-36 bg-[#EBF4FF] w-full">
            <AboutUsPersons v-model="search" />
        </div>

    </div>
</template>
