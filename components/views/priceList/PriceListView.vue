<template>
  <div>
    <h1
      class="justify-center pb-[284px] text-center text-[#222932] text-[96px] font-bold py-10 font-sans"
    >
      {{ $t("priceList.title") }}
    </h1>

    <div class="pb-36 bg-[#EBF4FF]">
      <PriceListFilter />
    </div>

    <PriceListProduct />
  </div>
</template>
