<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="overflow-hidden backdrop-blur-[7.5px]"
  >
    <div class="container pb-[25px] sm:pb-[60px]">
      <!-- title -->
      <div
        class="flex flex-col items-center justify-center gap-1 sm:gap-[21px]"
      >
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
      <div class="grid md:grid-cols-3 gap-[14px] md:gap-[30px] mt-[30px]">
        <div class="md:col-span-3 py-[27px] bg-[#00000099] rounded-[20px]">
          <h2
            class="text-[16px] sm:text-[20px] md:text-[30px] font-sfPro_semibold text-white text-center"
          >
            {{ block.open_time }}
          </h2>
          <div class="flex items-center justify-center gap-[16px] pt-[27px]">
            <div
              v-for="(item, idx) in block.time_items"
              :key="idx"
              class="flex flex-col gap-[10px] text-white font-sfPro_semibold text-sm sm:text-md md:text-lg px-[10px]"
            >
              <div
                class="w-[120px] sm:w-[200px] px-[10px] sm:px-[40px] py-[6px] bg-main rounded-[8px] flex justify-center items-center"
              >
                {{ item.day }}
              </div>
              <div
                class="w-[120px] sm:w-[200px] px-[10px] sm:px-[40px] py-[6px] rounded-[8px] border-dashed border-2 border-white flex justify-center items-center"
              >
                {{ item.time }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(data, idx) in block.info_items"
          :key="idx"
          class="flex flex-col gap-[16px] py-[33px] justify-center items-center bg-[#00000099] rounded-[20px]"
        >
          <div class="w-[24px] sm:w-[40px] aspect-[1/1]">
            <img :src="data.icon" class="image" />
          </div>
          <p
            class="text-center text-sm sm:text-md md:text-xl text-white font-sfPro_semibold"
          >
            {{ data.content }}
          </p>
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
