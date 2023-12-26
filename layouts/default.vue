<template>
  <div
    class="bg-no-repeat bg-cover bg-center  "
    :style="`background-image: url(${headerData.bg_body})`"
  >
    <MainHeader />
    <main class="grow">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import headerData from "@/data/header.json";
</script>

<style scoped></style>
