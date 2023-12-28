<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="{
      backgroundImage: `url(${block.background_image})`,
      backgroundColor: block.background_color,
    }"
  >
    <div class="container">
      <div
        class="grid sm:grid-cols-[350px_1fr] md:grid-cols-[450px_1fr] lg:grid-cols-[592px_1fr]"
      >
        <!-- col 1  -->
        <div class="hidden sm:block relative">
          <div
            class="relative z-10 flex gap-[32px] pt-[78px] pb-[175px] justify-between items-end"
          >
            <div class="w-[58.6%]">
              <div class="aspect-[1/1]">
                <img
                  class="image rounded-[20px] border-4 border-white"
                  :src="block.image_banner"
                  :alt="block.image_banner_alt"
                />
              </div>
            </div>
            <div class="mb-[-81px] w-[36%]">
              <div class="aspect-[213/292]">
                <img
                  class="image"
                  :src="block.image_cup_big"
                  :alt="block.image_cup_big_alt"
                />
              </div>
            </div>
          </div>
          <div
            class="absolute aspect-[1/1] bg-white w-[51.5%] right-[15.5%] bottom-[21.5%] border-4 border-main"
          >
            <div class="wrapper_cup_small">
              <div class="aspect-[151/207]">
                <img
                  class="image border-4 border-white"
                  :src="block.image_cup_small"
                  :alt="block.image_cup_small_alt"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- col 2 -->
        <div class="hidden sm:block pt-[101px]">
          <h2 class="text-xl sm:text-[60px] text-white font-sfPro_semibold">
            {{ block.title }}
          </h2>
          <p class="text-[30px] font-sfPro_semibold_italic text-white">
            {{ block.sub_title }}
          </p>

          <p
            class="ml-[25%] mt-[20px] text-[40px] md:text-[60px] font-sfPro_bold inline-block bg-main py-[13px] px-[30px] rounded-[20px] text-center text-white"
          >
            {{ block.discount }}
          </p>
        </div>
        <!-- screen iphone -->
        <div class="block sm:hidden pt-[26px] pb-[37px]">
          <h2 class="text-xl sm:text-[60px] text-white font-sfPro_semibold">
            {{ block.title }}
          </h2>
          <p
            class="text-[14px] sm:text-[30px] font-sfPro_semibold_italic text-white"
          >
            {{ block.sub_title }}
          </p>

          <div class="grid grid-cols-[105px_1fr] items-start gap-[15px]">
            <div class="pt-[7px] w-[105px] h-[106px] relative">
              <div class="w-[77px] h-full relative z-10">
                <img
                  class="image"
                  :src="block.image_cup_big"
                  :alt="block.image_cup_big_alt"
                />
              </div>
              <div class="w-[55px] absolute right-0 bottom-[12px] h-[76]">
                <img
                  class="image"
                  :src="block.image_cup_small"
                  :alt="block.image_cup_small_alt"
                />
              </div>
            </div>
            <div class="pb-[63px]">
              <p
                class="text-[30px] font-sfPro_bold inline-block bg-main py-[7px] px-[16px] rounded-[10px] text-center text-white"
              >
                {{ block.discount }}
              </p>
            </div>
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

defineProps<Props>();
</script>
<style lang="scss" scoped>
.wrapper_cup_small {
  padding: 78px 63px 20px 91px;
}
</style>
