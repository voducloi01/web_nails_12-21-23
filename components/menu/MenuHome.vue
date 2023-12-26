<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="overflow-hidden backdrop-blur-[7.5px]"
  >
    <div class="container">
      <div class="flex flex-col items-center justify-center gap-[21px]">
        <p class="text-[48px] font-sfPro_bold px-[30px] border-b-4 border-b-main pt-[20px]">
          {{ block.title }}
        </p>
        <p class="text-xl font-sfPro_semibold_italic">
          {{ block.sub_title }}
        </p>
      </div>
      <!-- grid desktop -->
      <swiper class="w-full swiper__wrapper">
        <swiper-slide v-for="(items, idx) in block.menu_items" :key="idx">
          <div
            class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[36px] gap-y-[200px]"
          >
            <div
              v-for="(data, id) in items.banner_item"
              :key="id"
              class="aspect-[1/1] rounded-[40px]"
              :style="{ background: data.background_item }"
            >
              <div class="px-[19%] mt-[-100px] wrapper__banner__item">
                <div class="aspect-[1/1]">
                  <img
                    class="shadow-1xl rounded-full w-full h-full"
                    :src="data.img_item"
                    :alt="data.img_alt_item"
                  />
                </div>
              </div>
              <!-- @title and @content -->
              <div class="flex flex-col gap-[12px] px-[12.5%] sm:pb-[33px]">
                <div class="flex gap-[10px] justify-start">
                  <!-- evaluate -->
                  <div class="h-[24px] w-[24px]">
                    <img class="image" :src="data.icon_star" />
                  </div>
                  <p class="text-[#FFC700] text-md font-sfPro_bold">
                    {{ data.evaluate }}
                  </p>
                </div>
                <p class="font-sfPro_bold">
                  {{ data.title_item }}
                </p>
                <p>
                  {{ data.sub_title_item }}
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center justify-center gap-[12px]">
                    <p class="text-main text-xl font-sfPro_bold">
                      {{ data.price_new }}
                    </p>
                    <p class="text-sm text-[#888888] line-through">
                      {{ data.price_old }}
                    </p>
                  </div>
                  <div
                    class="w-[40px] h-[40px] bg-main rounded-full hover:cursor-pointer"
                  >
                    <div class="p-[8px]">
                      <img class="image" :src="data.icon_cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- @view more -->
      <div class="flex justify-between mt-[87px] items-center gap-2 sm:gap-0">
        <button
          class="sm:block hidden bg-black rounded-full text-white py-[5px] px-[41px] sm:py-[15px] font-sfPro_semibold text-md sm:text-xl"
        >
          {{ block.view_more }}
        </button>

        <div class="w-full sm:w-fit inline-block">
          <div
            class="flex justify-center items-center gap-[12px] bg-main rounded-full px-[19px] py-[5px] sm:px-[41px] sm:py-[15px] text-white font-sfPro_semibold text-md sm:text-xl"
          >
            <button>{{ block.text_order }}</button>
            <p class="w-[24px] sm:w-[30px] aspect-[1/1]">
              <img
                class="image"
                :src="
                  widthContainer < 640 ? block.icon_menu_board : block.icon_cart
                "
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const swiperInstance = ref();
const widthContainer = ref(0);
// const widthContainer = ref();

const onSwiper = (e: any) => {
  swiperInstance.value = e;
};

const getWidth = () => {
  widthContainer.value = document.body.clientWidth;
  console.log(widthContainer.value);
};
onMounted(() => {
  window?.addEventListener('resize', getWidth);
});

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
.swiper__wrapper {
  padding-top: 100px;
}

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
