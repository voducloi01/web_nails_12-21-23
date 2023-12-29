<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px] overflow-hidden"
  >
    <div class="container pb-[94px]">
      <div
        class="grid items-center grid-cols-2 gap-[5px] sm:gap-[15px] md:gap-[40px] lg:gap-[90px]"
      >
        <!-- title and content -->
        <div
          class="flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[23px] justify-center items-start pr-[30px]"
        >
          <h2
            class="text-[24px] sm:text-[35px] md:text-[50px] lg:text-[76px] font-sfPro_bold"
            v-html="block.title"
          />
          <div
            class="text-[12px] sm:text-[20px] md:text-[24px]"
            v-html="block.sub_title"
          />
          <div
            class="bg-main w-[100%] sm:w-[50%] flex items-center justify-center rounded-full py-[15px] hover:cursor-pointer"
          >
            <button
              class="text-[12px] md:text-md lg:text-xl pr-[12px] text-white font-sfPro_semibold"
            >
              <NuxtLink :to="block.link_menu">
                {{ block.visit_our_menu }}
              </NuxtLink>
            </button>
            <div class="h-[18px] w-[18px lg:h-[24px] lg:w-[24px]">
              <img class="image" :src="block.icon_menu_board" />
            </div>
          </div>
          <!-- panigate -->
          <div class="sm:flex hidden gap-[24px] items-center justify-center">
            <!-- icon left -->
            <div
              class="w-[40px] h-[40px] hover:cursor-pointer"
              @click="handlePrev"
            >
              <img class="image" :src="block.icon_left" />
            </div>
            <!-- icon right -->
            <div
              class="w-[40px] h-[40px] hover:cursor-pointer"
              @click="handleNext"
            >
              <img class="image" :src="block.icon_right" />
            </div>
          </div>
        </div>
        <!-- banner -->
        <swiper
          class="w-full wrapper_swiper"
          space-between="30"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(data, idx) in block.item_banner"
            :key="idx"
            class="wrapper_swiper_item"
          >
            <img src="/images/banner_hero.png" class="image" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
const swiperInstance = ref();

const onSwiper = (e: any) => {
  swiperInstance.value = e;
};

const handleNext = () => {
  swiperInstance.value.slideNext();
};

const handlePrev = () => {
  swiperInstance.value.slidePrev();
};
</script>

<style lang="scss" scoped>
.wrapper_swiper {
  width: calc(100% + 70px);
  &:hover {
    cursor: pointer;
  }
}
.wrapper_swiper ::v-deep(.wrapper_swiper_item) {
  aspect-ratio: 1/1;
}
</style>
