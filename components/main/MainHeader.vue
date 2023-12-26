<!-- eslint-disable vue/html-self-closing -->
<template>
  <header class="header sticky w-full top-0 z-[9999] backdrop-blur-[7.5px]">
    <div class="container">
      <div
        class="tab_bar_wrapper py-[20px] 2xl:py-[68px] grid grid-cols-3 2xl:grid-cols-[290px_1fr] justify-items-center items-center"
      >
        <div class="2xl:pr-[210px]">
          <div class="h-[30px] w-[30px] hover:cursor-pointer">
            <img
              class="h-full w-full object-cover"
              :src="headerData.logo"
              :alt="headerData.logo_alt"
            />
          </div>
        </div>
        <div
          class="2xl:grid hidden grid-cols-[auto_40px] items-center justify-center gap-[50px]"
        >
          <ul class="flex gap-[50px] justify-center items-center h-full w-full">
            <li
              v-for="(data, idx) in headerData.items"
              :key="idx"
              class="font-sfPro_bold text-xl p-[20px] hover:cursor-pointer relative"
            >
              <NuxtLink :to="data.link">
                {{ data.text }}
              </NuxtLink>
              <!-- check active -->
              <div
                v-if="router.fullPath === data.link"
                class="active absolute bottom-1 left-[50%] -translate-x-[50%]"
              />
            </li>
          </ul>
          <div class="hover:cursor-pointer relative">
            <div
              class="flex justify-center items-center absolute top-[-10px] right-[-15px] h-[24px] w-[24px] rounded-full bg-main"
            >
              <p class="text-white text-[12px]">1</p>
            </div>
            <div class="aspect-[1/1]">
              <img
                class="w-full h-full object-cover"
                :src="headerData.icon_cart"
              />
            </div>
          </div>
        </div>
        <div class="2xl:hidden block font-sfPro_semibold text-sm">
          {{ showPage?.text }}
        </div>
        <div class="2xl:hidden block">
          <div
            class="h-[40px] w-[40px] py-[11px] px-[8px] hover:cursor-pointer"
            @click="showMenu = !showMenu"
          >
            <img
              class="h-full w-full object-cover hover:cursor-pointer"
              :src="headerData.icon_menu"
            />
          </div>
        </div>
      </div>

      <!-- show menu -->
      <div
        v-if="showMenu"
        class="2xl:hidden top-0 h-screen w-full absolute flex flex-col gap-[30px] items-center justify-start bg-[#fff] right-[50%] translate-x-[50%]"
      >
        <div class="flex justify-end w-full hover:cursor-pointer p-2">
          <div class="w-[30px] h-[30px]">
            <img
              class="h-full w-full object-cover"
              :src="headerData.icon_close"
              @click="showMenu = !showMenu"
            />
          </div>
        </div>
        <div class="pb-[96px] pt-[34px]">
          <div class="h-[40px] w-[41px]">
            <img
              class="h-full w-full object-cover hover:cursor-pointer"
              :src="headerData.logo"
              :alt="headerData.logo_alt"
            />
          </div>
        </div>
        <div
          v-for="(header, index) of headerData.items"
          :key="index"
          class="px-[20px] py-[15px] text-center hover:text-red relative"
        >
          <NuxtLink :to="header.link" @click="showMenu = !showMenu">
            {{ header.text }}
          </NuxtLink>
          <!-- check active -->
          <div
            v-if="router.fullPath === header.link"
            class="active absolute bottom-1 left-[50%] -translate-x-[50%]"
          />
        </div>
        <div class="hover:cursor-pointer relative">
          <div
            class="flex justify-center items-center absolute top-[-10px] right-[-15px] h-[24px] w-[24px] rounded-full bg-main"
          >
            <p class="text-white text-[12px]">1</p>
          </div>
          <div class="aspect-[1/1]">
            <img
              class="w-full h-full object-cover hover:cursor-pointer"
              :src="headerData.icon_cart"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from "@/data/header.json";

const showMenu = ref(false);

const router = useRoute();

onMounted(() => {
  const header = document.querySelector(".header");
  const tabBar = document.querySelector(".tab_bar_wrapper");
  window?.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header?.classList.add("bg-[#fff]");
      tabBar?.classList.remove("2xl:py-[68px]");
    } else {
      header?.classList.remove("bg-[#fff]");
      tabBar?.classList.add("2xl:py-[68px]");
    }
  });
});

const showPage = computed(() => {
  return headerData.items.find((e: any) => e.link === router.fullPath);
});
</script>

<style lang="scss">
.active {
  height: 4px;
  width: 100%;
  background-color: var(--color-main);
}
</style>
