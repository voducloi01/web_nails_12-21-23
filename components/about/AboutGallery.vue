<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="overflow-hidden backdrop-blur-[7.5px]"
  >
    <div class="container pb-[90px] pt-[83px]">
      <div class="flex flex-col gap-[43px] justify-center items-center">
        <!-- logo -->
        <div class="w-[29px] h-[30px] sm:h-[83.5px] sm:w-[80px]">
          <img class="image" :src="block.logo" :alt="block.logo_alt" />
        </div>
        <!-- title -->
        <p
          class="text-[12px] sm:text-sm md:text-md lg:text-xl font-sfPro_semibold_italic"
        >
          {{ block.title }}
        </p>
      </div>
      <div class="mt-[60px] swiper__wrapper">
        <div class="flex justify-center">
          <swiper
            :slides-per-view="'auto'"
            space-between="20"
            :breakpoints="{
              '640': {
                spaceBetween: 20,
              },
              '768': {
                spaceBetween: 40,
              },
              '1024': {
                spaceBetween: 60,
              },
            }"
            class="swiper__wrapper__title"
          >
            <swiper-slide
              v-for="(data, idx) in block.gallery_items"
              :key="idx"
              :class="[
                swiperInstance?.activeIndex === idx
                  ? ' rounded-full px-[14px] py-[8px] sm:px-[70px] sm:py-[12px] active_item font-sfPro_semibold swiper__wrapper__title__item lg:text-xl md:text-md sm:text-sm text-[14px]'
                  : ' rounded-full lg:text-xl md:text-md sm:text-sm text-[14px] hover:cursor-pointer font-sfPro_semibold swiper__wrapper__title__item',
              ]"
              @click="swiperInstance?.slideTo(idx)"
            >
              {{ data.title_item }}
            </swiper-slide>
          </swiper>
        </div>
        <!-- swiper grid -->
        <swiper class="w-full mt-[60px]" @swiper="onSwiper">
          <swiper-slide v-for="(data, idx) in block.gallery_items" :key="idx">
            <div
              class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[40px]"
            >
              <div
                v-for="(item, id) in data.images_item"
                :key="id"
                class="aspect-[1/1] md:aspect-[8/5]"
              >
                <img
                  class="image rounded-[20px]"
                  :src="item.image"
                  :alt="item.image_alt"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- view more -->
      <div class="flex justify-between mt-[79px] items-center gap-2 sm:gap-0">
        <button
          class="bg-black rounded-full text-white py-[5px] px-[41px] sm:py-[15px] font-sfPro_semibold text-md sm:text-xl"
        >
          {{ block.view_more }}
        </button>

        <div class="inline-block">
          <div
            class="flex gap-[12px] bg-main rounded-full px-[19px] py-[5px] sm:px-[41px] sm:py-[15px] text-white font-sfPro_semibold text-md sm:text-xl"
          >
            <button>{{ block.reservation }}</button>
            <p class="w-[24px] sm:w-[30px] aspect-[1/1]">
              <img class="image" :src="block.icon_menu_board" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const swiperInstance = ref();

const onSwiper = (e: any) => {
  swiperInstance.value = e;
};

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
.swiper__wrapper__title {
  &__item {
    width: auto !important;
  }
}
.swiper__wrapper .swiper__wrapper__title :deep(.swiper-slide) {
  display: flex;
  align-items: center;
}

.active_item {
  background-color: #000;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
}
</style>
