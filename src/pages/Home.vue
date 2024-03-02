<template>
  <div>
    <AppLayout imgUrl="/src/assets/img/bg1.jpeg">
      <div class="wrapper">
        <div class="info">
          <div class="title">Выберите свой напиток</div>
          <div class="line"></div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue";
</script>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.wrapper
  display: flex
  align-items: center
  justify-content: center

.info
  padding: 80px 0
  text-align: center
</style>
