<!-- eslint-disable vue/html-self-closing -->
eslint-disable vue/html-self-closing
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px]"
  >
    <div
      class="container flex flex-col items-center gap-[43px] pt-[83px] pb-[87px]"
    >
      <div class="w-[29px] h-[30px] sm:w-[80px] sm:h-[83.5px]">
        <img class="image" :src="block.logo" :alt="block.logo_alt" />
      </div>
      <p class="text-[12px] sm:text-xl font-sfPro_semibold_italic">
        {{ block.sub_title }}
      </p>
      <!-- grid screen desktop -->
      <div
        class="hidden justify-center items-center sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[17px]"
      >
        <div v-for="(data, idx) in block.reservation_items" :key="idx">
          <img
            class="image rounded-[20px]"
            :src="data.image"
            :alt="data.image_alt"
          />
        </div>
      </div>
      <!-- swiper screen mobile -->
      <swiper
        class="wrapper_slider w-full"
        :breakpoints="{
          '0': {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          '370': {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          '500': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
      >
        <swiper-slide
          v-for="(data, idx) in block.reservation_items"
          :key="idx"
          class="wrapper_slider_item hover:cursor-pointer"
        >
          <div class="w-[200px] aspect-[200/124]">
            <img
              class="image rounded-[20px]"
              :src="data.image"
              :alt="data.image_alt"
            />
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="mt-[17px] flex gap-[12px] rounded-full bg-main px-[41px] py-[15px] text-[#FFF] font-sfPro_semibold"
      >
        <button class="text-md sm:text-xl">
          {{ block.reservation }}
        </button>
        <div class="w-[24px] sm:w-[30px] aspect-[1/1]">
          <img class="image" :src="block.icon_menu_board" />
        </div>
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
</script>
<style lang="scss" scoped>
.wrapper_slider {
  display: block;
}

@media screen and (min-width: 640px) {
  .wrapper_slider {
    display: none;
  }
}
</style>
