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
        <p
          class="text-xl sm:text-[48px] font-sfPro_bold px-[20px] sm:px-[30px] border-b-4 border-b-main pt-[20px]"
        >
          {{ block.title }}
        </p>
        <p
          class="text-center text-[12px] sm:text-xl font-sfPro_semibold_italic"
        >
          {{ block.sub_title }}
        </p>
      </div>
      <div class="swiper__wrapper">
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
              v-for="(data, idx) in block.menu_items"
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
      </div>
      <!-- grid desktop -->
      <swiper
        class="w-full swiper_wrap_item"
        space-between="20"
        :slides-per-view="'auto'"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(items, idx) in productMapped" :key="idx">
          <!-- swiper desktop -->
          <div
            class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[36px] gap-y-[160px]"
          >
            <div
              v-for="(data, id) in items.banner_item"
              :key="id"
              class="aspect-[1/1] rounded-[40px]"
              :style="{ background: data.background_item }"
            >
              <div class="px-[19%] mt-[-100px] relative">
                <div class="aspect-[1/1] relative">
                  <img
                    class="shadow-1xl rounded-full image"
                    :src="data.img_item"
                    :alt="data.img_alt_item"
                  />
                  <div
                    class="absolute pt-[44.8%] pl-[51.8%] -bottom-[34px] right-0"
                  >
                    <div class="aspect-[1/1]">
                      <img
                        class="shadow-1xl rounded-full image"
                        :src="data.img_item"
                        :alt="data.img_alt_item"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- @title and @content -->
              <div class="flex flex-col gap-[12px] px-[12.5%] sm:pb-[33px]">
                <div class="flex gap-[10px] justify-start items-center">
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
                  <!-- total -->
                  <div
                    v-show="data.activeCart"
                    class="flex gap-[20px] items-center justify-center"
                  >
                    <div class="flex gap-[12px] items-center justify-center">
                      <p class="w-[24px] aspect-[1/1] hover:cursor-pointer" @click="plusCart(data)">
                        <img class="image" :src="data.icon_plus" />
                      </p>
                      <p class="w-[24px] aspect-[1/1] hover:cursor-pointer" :class="data.quantity === 0 ? 'hover:cursor-not-allowed' : ''" @click="minusCart(data)">
                        <img class="image" :src="data.icon_minus" />
                      </p>
                    </div>
                  </div>
                  <!-- ------------------- -->
                  <div
                    :class="data.activeCart ? 'bg-[#000]' : 'bg-main'"
                    class="min-w-[40px] h-[40px] rounded-full flex items-center justify-center px-[8px] py-[4px] gap-[10px] hover:cursor-pointer"
                    @click="handleCart(data)"
                  >
                    <p v-show="data.activeCart" class="text-white text-[16px] leading-none">
                      {{ data.quantity }}
                    </p>
                    <img class="image w-[24px] h-[24px]" :src="data.icon_cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- swiper mobile -->
          <div class="sm:hidden block pt-[80px] 1sm:pt-[130px]">
            <swiper
              class="swiper_mobile"
              :slides-per-view="'auto'"
              :space-between="16"
            >
              <swiper-slide
                v-for="(item, key) in items.banner_item"
                :key="key"
                class="swiper_mobile_item"
                :style="{ background: item.background_item }"
              >
                <div class="px-[55px] 1sm:px-[19%] mt-[-50px] 1sm:mt-[-100px]">
                  <div class="aspect-[1/1] relative">
                    <img
                      class="shadow-1xl rounded-full w-full h-full"
                      :src="item.img_item"
                      :alt="item.img_alt_item"
                    />
                    <div
                      class="absolute pt-[44.8%] pl-[51.8%] -bottom-[20px] 1sm:-bottom-[34px] right-0"
                    >
                      <div class="aspect-[1/1]">
                        <img
                          class="shadow-1xl rounded-full image"
                          :src="item.img_item"
                          :alt="item.img_alt_item"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- @title and @content -->
                <div
                  class="flex flex-col gap-[12px] px-[15px] 1sm:px-[12.5%] pb-[33px]"
                >
                  <div class="flex gap-[10px] justify-start items-center">
                    <!-- evaluate -->
                    <div class="h-[24px] w-[24px]">
                      <img class="image" :src="item.icon_star" />
                    </div>
                    <p
                      class="text-[#FFC700] text-md 1sm:text-lg font-sfPro_bold"
                    >
                      {{ item.evaluate }}
                    </p>
                  </div>
                  <p class="text-[12px] 1sm:text-[22px] font-sfPro_bold">
                    {{ item.title_item }}
                  </p>
                  <p class="text-[12px] 1sm:text-sm">
                    {{ item.sub_title_item }}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center justify-center gap-[12px]">
                      <p class="text-main text-lg 1sm:text-xl font-sfPro_bold">
                        {{ item.price_new }}
                      </p>
                      <p class="text-sm text-[#888888] line-through">
                        {{ item.price_old }}
                      </p>
                    </div>
                    <div
                      class="w-[40px] h-[40px] bg-main rounded-full hover:cursor-pointer"
                    >
                      <div class="p-[8px]">
                        <img class="image" :src="item.icon_cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </swiper-slide>
      </swiper>

      <!-- @view more -->
      <div
        class="flex justify-between py-[30px] sm:pb-[80px] sm:pt-[50px] md:pb-[139px] md:pt-[87px] items-center gap-2 sm:gap-0"
      >
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
interface Props {
  dataBinding: any;
  block: any;
}

const props = defineProps<Props>();

const products = computed(() => props.block.menu_items)

const productMapped = products.value.map((product: any) => {
  product.banner_item = product.banner_item.map((item: any) => {
    return {
      ...item,
      quantity: 0,
      activeCart: false
    }
  });
  return product;
});

const swiperInstance = ref();
const widthContainer = ref(0);
const isQuantity = ref(false);

const handleCart = (data: any) => {
  data.activeCart = !data.activeCart;
}
const plusCart = (data: any) => {
  data.quantity += 1;
}
const minusCart = (data: any) => {
  if (data.quantity === 0) {
    return;
  }
  data.quantity -= 1;
}
const increase = () => {
  isQuantity.value = !isQuantity.value;
};

// const decrease = (idx: number) => {
//   console.log(idx);
// };

const onSwiper = (e: any) => {
  swiperInstance.value = e;
};

const getWidth = () => {
  widthContainer.value = document.body.clientWidth;
};
onMounted(() => {
  window?.addEventListener('resize', getWidth);
});

</script>
<style lang="scss" scoped>
.swiper_mobile {
  overflow: initial;
  width: 210px;
  &_item {
    border-radius: 40px;
  }
  &:hover {
    cursor: pointer;
  }
}
.swiper_wrap_item {
  padding-top: 0px;
}
@media screen and (min-width: 460px) {
  .swiper_mobile {
    overflow: initial;
    width: 400px;
    &_item {
      border-radius: 20px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 640px) {
  .swiper_wrap_item {
    padding-top: 172px;
  }
  .swiper__wrapper {
    padding-top: 60px;
  }
}
.swiper__wrapper {
  padding-top: 30px;
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
