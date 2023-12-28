<!-- eslint-disable vue/html-self-closing -->
<template>
  <footer :style="{ backgroundColor: footerData.background }">
    <div class="container pt-[53px]">
      <div class="grid md:grid-cols-2">
        <div
          class="pr-0 sm:pr-[43px] text-white flex flex-col justify-start gap-[20px] items-center sm:items-start"
        >
          <div class="w-[29px] h-[30px] sm:w-[80px] sm:h-[83.5px]">
            <img
              class="image"
              :src="footerData.logo"
              :alt="footerData.logo_alt"
            />
          </div>
          <p
            class="text-[12px] sm:text-sm md:text-md lg:text-[22px] sm:text-left text-center"
          >
            {{ footerData.title }}
          </p>
          <!-- ------------- -->
          <div class="sm:flex hidden flex-col gap-[14px]">
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="footerData.icon_head_phone" />
              </p>
              <p class="text-lg">
                {{ footerData.phone_number }}
              </p>
            </div>
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="footerData.icon_address" />
              </p>
              <p class="text-lg">
                {{ footerData.address }}
              </p>
            </div>
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="footerData.icon_sms" />
              </p>
              <p class="text-lg">
                {{ footerData.text_sms }}
              </p>
            </div>
          </div>
        </div>
        <!-- form info -->
        <div class="sm:block hidden mt-[30px] md:mt-0">
          <h2
            class="pb-[8px] text-[32px] font-sfPro_semibold text-white border-b-4 border-b-main inline-footerData pr-[30px]"
          >
            {{ footerData.reservation }}
          </h2>
          <form class="flex flex-col gap-[20px] mt-[30px]">
            <input
              v-model="input.name"
              :class="[
                input.name
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: input.name ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="footerData.input_name"
            />
            <input
              v-model="input.phone"
              type="number"
              :class="[
                input.phone
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: input.phone ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="footerData.input_phone"
            />
            <input
              v-model="input.mess"
              :class="[
                input.mess
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: input.mess ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="footerData.input_message"
            />
            <div
              class="flex gap-[12px] items-center justify-center rounded-full bg-main py-[15px]"
            >
              <button
                type="submit"
                class="font-sfPro_semibold text-xl text-white"
              >
                {{ footerData.button_submit }}
              </button>
              <p class="w-[30px] aspect-[1/1]">
                <img class="image" :src="footerData.icon_menu_board" />
              </p>
            </div>
          </form>
        </div>
      </div>
      <!-- map -->
      <div class="mt-[40px]">
        <p
          class="sm:block hidden text-[32px] font-sfPro_semibold text-white pr-[137px] pb-[8px] border-b-4 border-b-main inline-footerData"
        >
          {{ footerData.text_map }}
        </p>
        <p
          class="aspect-[350/177] sm:aspect-[1280/600] md:aspect-[1280/400] lg:aspect-[1280/224] mt-[30px] border-b-2 border-b-white pb-[18px]"
        >
          <iframe
            class="image rounded-[20px]"
            :src="footerData.google_map"
          ></iframe>
        </p>
      </div>
      <div
        class="flex justify-between items-center flex-col-reverse sm:gap-0 sm:flex-row sm:py-[50px] gap-[16.5px] pt-[16.5px] pb-[40px]"
      >
        <p
          class="text-white text-center lg:text-[22px] md:text-md sm:text-sm text-[14px]"
        >
          {{ footerData.info_company }}
        </p>
        <div class="flex gap-[20px] items-center justify-center">
          <p class="w-[20px] aspect-[1/1] md:w-[40px]">
            <img :src="footerData.ic_facebook" class="image" />
          </p>
          <p class="w-[20px] aspect-[1/1] md:w-[40px]">
            <img :src="footerData.ic_google" class="image" />
          </p>
          <p class="w-[20px] aspect-[1/1] md:w-[40px]">
            <img :src="footerData.ic_instagram" class="image" />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';
const input = reactive({
  name: '',
  phone: '',
  mess: ''
});
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
