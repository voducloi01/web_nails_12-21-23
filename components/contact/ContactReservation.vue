<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    :style="{ backgroundColor: block.background }"
  >
    <div class="container pt-[30px] pb-[44px]">
      <div class="sm:hidden block md:mt-0">
        <div class="flex items-center justify-center">
          <h2
            class="text-center pb-[8px] text-xl font-sfPro_semibold text-white border-b-4 border-b-main inline-block"
          >
            {{ block.title }}
          </h2>
        </div>

        <form class="flex flex-col gap-[12px] mt-[12px] text-[14px]">
          <input
            v-model="input.name"
            :class="[
              input.name
                ? 'rounded-full font-sfPro_semibold outline-none w-full text-white'
                : 'outline-none rounded-full w-full  text-white ',
            ]"
            :style="{
              backgroundColor: input.name ? '#00000073' : '#00000033',
              padding: '12px 0 12px 24px',
            }"
            :placeholder="block.input_name"
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
              padding: '12px 0 12px 24px',
            }"
            :placeholder="block.input_phone"
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
              padding: '12px 0 12px 24px',
            }"
            :placeholder="block.input_message"
          />
          <div
            class="flex gap-[12px] items-center justify-center rounded-full bg-main py-[12px]"
          >
            <button
              type="submit"
              class="font-sfPro_semibold text-md text-white"
            >
              {{ block.btn_reservation }}
            </button>
            <p class="w-[24px] aspect-[1/1]">
              <img class="image" :src="block.icon_menu_board" />
            </p>
          </div>
        </form>
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
const input = reactive({
  name: '',
  phone: '',
  mess: ''
});
</script>
<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
