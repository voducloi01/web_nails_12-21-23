<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px]"
  >
    <div class="container pt-3 pb-[53px] md:pb-[108px] overflow-hidden">
      <!-- title -->
      <div
        class="flex flex-col justify-center items-center gap-[21px] mb-[100px] md:mb-[180px]"
      >
        <div>
          <h2 class="text-[48px] font-sfPro_bold">
            {{ block.title }}
          </h2>
          <div class="bg-main h-[6px] mt-2" />
        </div>
        <p class="font-sfPro_semibold_italic text-xl">
          {{ block.sub_title }}
        </p>
      </div>
      <!-- grid desktop -->
      <div
        class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[36px] gap-y-[200px]"
      >
        <div
          v-for="(data, idx) in productMapped"
          :key="idx"
          class="aspect-[1/1] rounded-[40px] wrapper__banner"
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
          <div
            class="flex flex-col gap-[12px] px-[12.5%] sm:pb-[33px] item_content"
          >
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
                  {{ data.new_price }}
                </p>
                <p class="text-sm text-[#888888] line-through">
                  {{ data.old_price }}
                </p>
              </div>
              <div
                v-show="data.isActive"
                class="flex justify-center items-center gap-[12px] pl-1"
              >
                <img
                  :src="block.icon_plus"
                  class="w-[24px] aspect-[1/1]"
                  @click="plusCart(data)"
                />
                <img
                  :src="block.icon_minus"
                  class="w-[24px] aspect-[1/1]"
                  @click="minusCart(data)"
                />
              </div>
              <div
                :class="data.isActive ? 'bg-black' : 'bg-main'"
                class="rounded-full hover:cursor-pointer flex items-center justify-center"
                @click="handleActiveCard(data)"
              >
                <p
                  v-show="data.isActive"
                  class="text-white text-lg font-sfPro_semibold pl-[16px]"
                >
                  {{ data.quantity }}
                </p>
                <p class="w-[24px] m-[8px] aspect-[1/1]">
                  <img class="image" :src="block.icon_cart" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- @visit our menu -->
      <div class="md:flex hidden justify-center mt-[49px]">
        <div
          class="flex justify-center items-center rounded-full gap-[12px] w-[280px] py-[15px] text-xl text-white font-sfPro_semibold bg-black"
        >
          <p>{{ block.visit_our_menu }}</p>
          <div>
            <img :src="block.icon_menu_board" />
          </div>
        </div>
      </div>
      <!-- screen phone -->
      <swiper
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
          '700': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
      >
        <swiper-slide
          v-for="(data, idx) in productMapped"
          :key="idx"
          class="relative wrapper__swiper__item aspect-[1/1]"
        >
          <div
            class="pt-[50px] rounded-[20px] w-[210px] relative"
            :style="{ backgroundColor: data.background_item }"
          >
            <!-- image  food -->
            <div class="px-[55px] absolute -top-[50px]">
              <div class="aspect-[1/1]">
                <img
                  class="image rounded-full"
                  :src="data.img_item"
                  :alt="data.img_alt_item"
                />
              </div>
            </div>
            <!-- info -->
            <div class="flex flex-col gap-[12px] px-[16px] pb-[19px]">
              <div class="flex gap-[10px] justify-start">
                <!-- evaluate -->
                <div class="h-[24px] w-[24px]">
                  <img class="image" src="/images/star.svg" />
                </div>
                <p class="text-[#FFC700] font-sfPro_bold">
                  {{ data.evaluate }}
                </p>
              </div>
              <p class="font-sfPro_bold text-sm">
                {{ data.title_item }}
              </p>
              <p
                class="text-[12px] content__item"
                v-html="data.sub_title_item"
              />
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-center gap-[14px]">
                  <p class="text-main font-sfPro_bold">
                    {{ data.new_price }}
                  </p>
                  <p class="text-[#888888] line-through text-sm">
                    {{ data.old_price }}
                  </p>
                </div>
                <div
                  v-show="!data.isActive"
                  class="flex justify-center items-center gap-[20px] pl-1"
                >
                  <img
                    :src="block.icon_plus"
                    class="w-[24px] aspect-[1/1]"
                    @click="plusCart(data)"
                  />
                  <img
                    :src="block.icon_minus"
                    class="w-[24px] aspect-[1/1]"
                    @click="minusCart(data)"
                  />
                </div>
              </div>
              <!-- add card -->
              <button
                :class="!data.isActive ? 'bg-black' : 'bg-main'"
                class="px-[15px] py-[4px] text-white rounded-full text-sm"
                @click="handleActiveCard(data)"
              >
                <div
                  v-show="data.isActive"
                  class="flex items-center justify-center gap-[12px]"
                >
                  <p
                    class="font-sfPro_semibold text-[16px] text-white py-[4px]"
                  >
                    {{ block.add_cart }}
                  </p>
                  <img class="w-[24px] image" :src="block.icon_menu_board" />
                </div>
                <div
                  v-show="!data.isActive"
                  class="flex items-center justify-center gap-[12px]"
                >
                  <p class="font-sfPro_semibold text-[16px] text-white">
                    {{ data.quantity }}
                  </p>
                  <img class="w-[24px] image" :src="block.icon_menu_board" />
                </div>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

const props = defineProps<Props>();

const product = computed(() => props.block.items);

const productMapped = ref(
  product.value.map((e: any) => {
    return { ...e, quantity: 0, isActive: false };
  })
);

const handleActiveCard = (item: any) => {
  item.isActive = !item.isActive;
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
</script>

<style lang="scss" scoped>
.wrapper__banner:nth-child(3n - 1) {
  .wrapper__banner__item {
    padding: 0px 12.5% 0 12.5%;
    margin-top: -135px;
  }
  .item_content {
    padding-bottom: 33px;
  }
}
.content__item {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.swiper-initialized {
  overflow: initial;
}
.swiper-initialized {
  display: block;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (min-width: 768px) {
  .swiper-initialized {
    display: none;
  }
}
</style>
