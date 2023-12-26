<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px] relative overflow-hidden"
  >
    <div class="container pb-[94px]">
      <swiper
        class="w-full swiper_wrapper"
        :space-between="1000"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(data, idx) in block.item_banner" :key="idx">
          <div
            class="grid items-center grid-cols-[43%_auto] gap-[5px] sm:gap-[15px] md:gap-[40px] lg:gap-[90px]"
          >
            <!-- title and content -->
            <div
              class="flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[23px] justify-center items-start"
            >
              <h2
                class="text-[24px] sm:text-[35px] md:text-[50px] lg:text-[76px] font-sfPro_bold"
                v-html="data.title"
              />
              <div
                class="text-[12px] sm:text-[20px] md:text-[24px]"
                v-html="data.sub_title"
              />
              <div
                class="bg-main w-[100%] sm:w-[50%] flex items-center justify-center rounded-full py-[15px] hover:cursor-pointer"
              >
                <button
                  class="text-[12px] md:text-md lg:text-xl pr-[12px] text-white font-sfPro_semibold"
                >
                  <NuxtLink :to="data.link_menu">
                    {{ data.visit_our_menu }}
                  </NuxtLink>
                </button>
                <div class="h-[18px] w-[18px lg:h-[24px] lg:w-[24px]">
                  <img class="image" :src="data.icon_menu_board" />
                </div>
              </div>
            </div>
            <!-- banner -->
            <div
              class="h-[260px] w-[260px] sm:h-[400px] sm:w-[400px] md:h-[550px] md:w-[550px] lg:h-[665px] lg:w-[665px]"
            >
              <div class="w-[calc(100%+26px)]">
                <div class="aspect-[1/1]">
                  <img
                    class="image rounded-full shadow-2md"
                    :src="data.image_banner"
                    :alt="data.image_banner_alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- panigate -->
        <div
          class="sm:flex lg:translate-y-[50px] xl:translate-y-0 sm:translate-y-[50px] md:translate-y-[50px] hidden gap-[24px] items-center justify-center absolute bottom-0 left-0 z-10"
        >
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
      </swiper>
    </div>
  </section>
</template>
<script lang="ts" setup>
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

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
.swiper_wrapper {
  overflow: initial;
  position: relative;
}
</style>
