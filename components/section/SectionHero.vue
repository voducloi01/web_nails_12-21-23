<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="backdrop-blur-[7.5px] overflow-hidden z-30"
  >
      <div class="container w-full py-20">
        <!-- title and content -->
        <div
          class="sm:w-1/2 w-full flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[23px] justify-center items-start pr-[30px]"
        >
          <h2
            class="text-[24px] sm:text-[35px] md:text-[50px] lg:text-[76px] font-sfPro_bold"
            v-html="block.title"
          />
          <div
            class="text-[12px] sm:text-[20px] md:text-[24px]"
            v-html="block.sub_title"
          />
          <div
            class="bg-main w-[100%] sm:w-[50%] flex items-center justify-center rounded-full py-[15px] hover:cursor-pointer"
          >
            <button
              class="text-[12px] md:text-md lg:text-xl pr-[12px] text-white font-sfPro_semibold"
            >
              <NuxtLink :to="block.link_menu">
                {{ block.visit_our_menu }}
              </NuxtLink>
            </button>
            <div class="h-[18px] w-[18px lg:h-[24px] lg:w-[24px]">
              <img class="image" :src="block.icon_menu_board" />
            </div>
          </div>
          <!-- pagination -->
          <div class="sm:flex hidden gap-[24px] items-center justify-center">
            <!-- icon left -->
            <div
              class="w-[40px] h-[40px] hover:cursor-pointer"
              @click="handlePrev"
            >
              <img class="image" :src="block.icon_left" />
            </div>
            <!-- icon right -->
            <div
              class="w-[40px] h-[40px] hover:cursor-pointer"
              @click="handleNext"
            >
              <img class="image" :src="block.icon_right" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full overflow-hidden custom_slider">
        <div class="sm:block hidden absolute z-50 top-0 right-0 py-10">
          <div
            v-for="(data, idx) in block.item_banner"
            :key="idx"
            :class="{ active: idx === currentIndex }"
            class="hidden relative"
          >
            <img
              class="object-cover lg:w-[665px] lg:h-[665px] w-[400px] h-[400px]"
              :src="data.image_banner"
            />
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  dataBinding: any;
  block: any;
}

const { dataBinding, block } = defineProps<Props>();
const currentIndex = ref(0);
const imgSlider = block.item_banner;

const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % imgSlider.length;
};

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + imgSlider.length) % imgSlider.length;
};

</script>


<style lang="scss" scoped>
.custom_slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  img {
    transition: transform 0.3s ease-in-out;
  }
}
.custom_slider .active {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  animation: turnImg 1.5s ease-in-out 1 forwards;
}

@keyframes turnImg {
  0% {
    transform: translate(100%, -100%) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) rotate(-135deg);
  }
}

</style>
