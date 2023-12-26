<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="overflow-hidden backdrop-blur-[7.5px]"
  >
    <div class="container mb-[29px] sm:mb-[79px]">
      <div class="grid sm:grid-cols-2 items-center justify-center">
        <div class="sm:block hidden sm:pr-[10px] md:pr-[60px] lg:pr-[74px]">
          <div class="ml-[-134px] aspect-[1/1]">
            <img
              class="image rounded-full"
              :src="block.image_banner"
              :alt="block.image_banner_alt"
            />
          </div>
        </div>
        <div class="pl-[37px] pr-[47px]">
          <div
            class="flex flex-col items-center sm:items-start justify-center h-full gap-[23px]"
          >
            <p
              class="text-[24px] sm:text-[30px] md:text-[50px] lg:text-[76px] font-sfPro_bold"
            >
              {{ block.title }}
            </p>
            <div
              class="text-[14px] sm:text-sm md:text-lg lg:text-[22px] sm:text-left text-center"
              v-html="block.sub_title"
            />
            <div
              class="flex gap-[12px] bg-main rounded-full py-[15px] px-[41px]"
            >
              <button
                class="text-white sm:text-md md:text-lg lg:text-xl font-sfPro_semibold hover:cursor-pointer"
              >
                {{ block.visit_our_menu }}
              </button>
              <p class="w-[24px] sm:w-[30px] aspect-[1/1]">
                <img class="image" :src="block.icon_menu_board" />
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
<style lang="scss" scoped></style>
