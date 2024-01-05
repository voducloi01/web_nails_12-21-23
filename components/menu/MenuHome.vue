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
        <div class="swiper__wrapper__title">
          <div
            v-for="(data, idx) in block.menu_items"
            :key="idx"
            :class="[
              swiperInstance?.activeIndex === idx
                ? 'active_item  swiper__wrapper__title__item '
                : 'swiper__wrapper__title__item',
            ]"
            class="rounded-full"
          >
            <div
              class="z-30 px-[14px] py-[8px] sm:px-[70px] sm:py-[12px] lg:text-xl md:text-md sm:text-sm text-[14px] hover:cursor-pointer font-sfPro_semibold"
              @click="swiperInstance?.slideTo(idx)"
              >
              {{ data.title_item }}
            </div>
          </div>
        </div>
      </div>
      <!-- grid desktop -->
      <swiper
        class="w-full swiper_wrap_item"
        space-between="20"
        :speed="1200"
        :slides-per-view="'auto'"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(items, idx) in productMapped" :key="idx">
          <!-- swiper desktop -->
          <div
            class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[36px] gap-y-[160px] hover:cursor-pointer"
          >
            <div
              v-for="(data, id) in items.banner_item"
              :key="id"
              class="aspect-[1/1] rounded-[40px]"
              :style="{ background: data.background_item }"
            >
              <div class="px-[19%] mt-[-100px] relative">
                <div class="aspect-[1/1]">
                  <img
                    class="shadow-1xl rounded-full image"
                    :src="data.img_item"
                    :alt="data.img_alt_item"
                  />
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
                      {{ data.new_price }}
                    </p>
                    <p class="text-sm text-[#888888] line-through">
                      {{ data.old_price }}
                    </p>
                  </div>
                  <!-- @plus  @minus -->
                  <div
                    v-show="data.activeCart"
                    class="flex gap-[20px] items-center justify-center"
                  >
                    <div class="flex gap-[12px] items-center justify-center">
                      <p
                        class="w-[24px] aspect-[1/1] hover:cursor-pointer"
                        @click="plusCart(data)"
                      >
                        <img
                          class="image w-[24px] h-[24px]"
                          :src="block.icon_plus"
                        />
                      </p>
                      <p
                        class="w-[24px] aspect-[1/1] hover:cursor-pointer"
                        :class="
                          data.quantity === 0 ? 'hover:cursor-not-allowed' : ''
                        "
                        @click="minusCart(data)"
                      >
                        <img
                          class="image w-[24px] h-[24px]"
                          :src="block.icon_minus"
                        />
                      </p>
                    </div>
                  </div>
                  <!-- --------------------->
                  <div
                    :class="data.activeCart ? 'bg-[#000]' : 'bg-main'"
                    class="min-w-[40px] h-[40px] rounded-full flex items-center justify-center px-[8px] py-[4px] gap-[10px] hover:cursor-pointer"
                    @click="handleCart(data)"
                  >
                    <p
                      v-show="data.activeCart"
                      class="text-white text-[16px] leading-none"
                    >
                      {{ data.quantity }}
                    </p>
                    <img
                      class="image w-[24px] h-[24px]"
                      :src="block.icon_cart"
                    />
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
              :speed="1200"
            >
              <swiper-slide
                v-for="(item, key) in items.banner_item"
                :key="key"
                class="swiper_mobile_item"
                :style="{ background: item.background_item }"
              >
                <div class="px-[55px] 1sm:px-[19%] mt-[-50px] 1sm:mt-[-100px]">
                  <div class="aspect-[1/1]">
                    <img
                      class="shadow-1xl rounded-full w-full h-full"
                      :src="item.img_item"
                      :alt="item.img_alt_item"
                    />
                  </div>
                </div>
                <!-- @title and @content -->
                <div
                  class="flex flex-col gap-[12px] px-[15px] 1sm:px-[12.5%] pb-[20px] 1sm:pb-[33px]"
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

                  <div class="grid grid-cols-2 gap-[10px]">
                    <!-- price new -->
                    <div class="flex items-center justify-start gap-[12px]">
                      <p class="text-main text-lg 1sm:text-xl font-sfPro_bold">
                        {{ item.new_price }}
                      </p>
                      <p class="text-sm text-[#888888] line-through">
                        {{ item.old_price }}
                      </p>
                    </div>
                    <!-- plus minus -->
                    <div
                      v-show="item.activeCart"
                      class="flex gap-[20px] items-center justify-end"
                    >
                      <div class="flex gap-[12px] items-center justify-center">
                        <p
                          class="w-[24px] aspect-[1/1] hover:cursor-pointer"
                          @click="plusCart(item)"
                        >
                          <img
                            class="image w-[24px] h-[24px]"
                            :src="block.icon_plus"
                          />
                        </p>
                        <p
                          class="w-[24px] aspect-[1/1] hover:cursor-pointer"
                          :class="
                            item.quantity === 0
                              ? 'hover:cursor-not-allowed'
                              : ''
                          "
                          @click="minusCart(item)"
                        >
                          <img
                            class="image w-[24px] h-[24px]"
                            :src="block.icon_minus"
                          />
                        </p>
                      </div>
                    </div>

                    <div class="flex justify-center col-span-2">
                      <div
                        :class="item.activeCart ? 'bg-black' : 'bg-main'"
                        class="w-full h-[40px] rounded-full hover:cursor-pointer flex items-center justify-center px-[10px] py-[8px] gap-[12px] 1sm:gap-[8px]"
                        @click="handleCart(item)"
                      >
                        <p
                          v-show="item.activeCart"
                          class="text-white text-lg font-sfPro_semibold"
                        >
                          {{ item.quantity }}
                        </p>
                        <div
                          class="flex justify-center items-center 1sm:gap-[15px] gap-[10px]"
                        >
                          <p
                            class="text-white text-sm 1sm:text-lg font-sfPro_semibold"
                          >
                            {{ block.text_add_cart }}
                          </p>
                          <div class="w-[24px] aspect-[1/1]">
                            <img class="image" :src="block.icon_menu_board" />
                          </div>
                        </div>
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
              <img class="image sm:block hidden" :src="block.icon_cart" />
              <img class="image sm:hidden block" :src="block.icon_menu_board" />
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
const swiperInstance = ref();

const products = computed(() => props.block.menu_items);

const productMapped = products.value.map((product: any) => {
  product.banner_item = product.banner_item.map((item: any) => {
    return {
      ...item,
      quantity: 0,
      activeCart: false
    };
  });
  return product;
});

const handleCart = (data: any) => {
  data.activeCart = !data.activeCart;
};

const plusCart = (data: any) => {
  data.quantity += 1;
};
const minusCart = (data: any) => {
  if (data.quantity === 0) {
    return;
  }
  data.quantity -= 1;
};

const onSwiper = (e: any) => {
  swiperInstance.value = e;
};
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
.swiper__wrapper__title{
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}
.swiper__wrapper__title__item {
  background-position: 0 0;
  transition: background 0.3s ease-in-out;
}
.active_item {
  background: #000;
  background-size: 100% 100%;
  color: #fff;
  transition-delay: 0.1s;
  animation: moveBackground 1s ease-in-out forwards;
  &:hover {
    cursor: pointer;
  }
}

@keyframes moveBackground {
  0% {
    transform: translate(-35%, 0) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

</style>
