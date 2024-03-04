<template>
  <div>
    <div class="root">
      <div :style="`background-image: url(${imgUrl})`" class="img"></div>
      <div class="main">
        <div class="btns">
          <el-button
            type="primary"
            :icon="Back"
            circle
            class="back"
            @click="backFunc"
            v-if="isBackButtonVisible"
          />
          <el-button class="btn" @click="goForCoctailRandom">Получить случайный коктейль</el-button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Back } from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router"
import { computed } from "vue";
import { ROUTES_PATHS } from "@/constants/router";
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackButtonVisible: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goForCoctailRandom() {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM)
  if(routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
    router.go()
  }
}

</script>

<style lang="sass" scoped>
@import "../assets/styles/main"
.root
  background: $background
  display: flex
  min-height: 100vh

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover
.main
  width: 50%
  padding: 32px 40px
  position: relative

.btn
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  border-color: $accent
  color: $text
  font-size: 16px
  font-family: "Raleway", sans-serif
  &:hover,
  &:active
    background-color: darken($accent, 10%)
    border-color: darken($accent, 10% )

.btns
  display: flex
  justify-content: space-between
  align-items: center

.back
  background: transparent
  border-color: #fff

  &:hover
   border-color:$accent
</style>

