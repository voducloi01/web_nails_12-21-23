<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px]"
    :style="{ backgroundColor: block.background_color }"
  >
    <div class="container pt-[53px]">
      <div class="grid md:grid-cols-2">
        <div
          class="pr-0 sm:pr-[43px] text-[#fff] flex flex-col justify-start gap-[20px] items-center sm:items-start"
        >
          <div class="w-[80px] h-[83.5px]">
            <img class="image" :src="block.logo" :alt="block.logo_alt" />
          </div>
          <p class="sm:text-left text-center">
            {{ block.title }}
          </p>
          <!-- ------------- -->
          <div class="sm:flex hidden flex-col gap-[14px]">
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="block.icon_head_phone" />
              </p>
              <p class="text-lg">
                {{ block.phone_number }}
              </p>
            </div>
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="block.icon_address" />
              </p>
              <p class="text-lg">
                {{ block.address }}
              </p>
            </div>
            <div class="flex gap-[16px] items-center justify-start">
              <p class="w-[40px] aspect-[1/1]">
                <img class="image" :src="block.icon_sms" />
              </p>
              <p class="text-lg">
                {{ block.text_sms }}
              </p>
            </div>
          </div>
        </div>
        <!-- form info -->
        <div class="sm:block hidden mt-[30px] md:mt-0">
          <h2
            class="pb-[8px] text-[32px] font-sfPro_semibold text-[#fff] border-b-4 border-b-main inline-block pr-[30px]"
          >
            {{ block.reservation }}
          </h2>
          <form class="flex flex-col gap-[20px] mt-[30px]">
            <input
              v-model="inputName"
              :class="[
                inputName
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: inputName ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="block.input_name"
            />
            <input
              v-model="inputPhone"
              type="number"
              :class="[
                inputPhone
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: inputPhone ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="block.input_phone"
            />
            <input
              v-model="inputMessage"
              :class="[
                inputMessage
                  ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                  : 'outline-none rounded-full w-full  text-white ',
              ]"
              :style="{
                backgroundColor: inputMessage ? '#00000073' : '#00000033',
                padding: '18px 0 18px 38px',
              }"
              :placeholder="block.input_message"
            />
            <div
              class="flex gap-[12px] items-center justify-center rounded-full bg-main py-[15px]"
            >
              <button
                type="submit"
                class="font-sfPro_semibold text-xl text-white"
              >
                {{ block.button_submit }}
              </button>
              <p class="w-[30px] aspect-[1/1]">
                <img class="image" :src="block.icon_menu_board" />
              </p>
            </div>
          </form>
        </div>
      </div>
      <!-- map -->
      <div class="mt-[40px]">
        <p
          class="text-[32px] font-sfPro_semibold text-[#fff] pr-[137px] pb-[8px] border-b-4 border-b-main inline-block"
        >
          {{ block.text_map }}
        </p>
        <p
          class="aspect-[350/177] sm:aspect-[1280/600] md:aspect-[1280/400] lg:aspect-[1280/224] mt-[30px] border-b-2 border-b-white pb-[18px]"
        >
          <iframe
            class="image rounded-[20px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50607.00508097254!2d-122.35682970726366!3d37.556528792240066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e60efa95545%3A0xfd8efcf42dcc1ba7!2sSan%20Mateo%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1703486695161!5m2!1svi!2s"
          ></iframe>
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const inputName = ref("");
const inputPhone = ref("");
const inputMessage = ref("");

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss">
input::placeholder {
  font-size: 20px;
  font-family: "sfPro_light_italic";
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
