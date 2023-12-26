<!-- eslint-disable vue/html-self-closing -->
<template>
  <footer :style="{ backgroundColor: footerData.background }">
    <div class="container py-[50px]">
      <div
        class="flex justify-between items-center flex-col-reverse gap-3 sm:gap-0 sm:flex-row"
      >
        <p class="text-[#FFF] text-center">
          {{ footerData.info_company }}
        </p>
        <div class="flex gap-[20px] items-center justify-center">
          <p>
            <img :src="footerData.ic_facebook" />
          </p>
          <p>
            <img :src="footerData.ic_google" />
          </p>
          <p>
            <img :src="footerData.ic_instagram" />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';
</script>

<style lang="scss"></style>
