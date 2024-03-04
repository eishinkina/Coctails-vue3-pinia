<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img :src="`${INGREDIENS_PIC}${ingredient}-Small.png`" />
                <div class="name">{{ ingredient }}</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { COCTAIL_RANDOM, INGREDIENS_PIC } from "@/constants";
import AppLayout from "@/components/AppLayout.vue";

const route = useRoute();
const router = useRouter();

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(COCTAIL_RANDOM);
  cocktail.value = data?.data?.drinks[0];
}

function goBack() {
  router.go(-1);
}

getCocktail();

const cocktail = ref(null);
</script>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.slider
  padding: 50px 0

.swiper
  width: 586px


.name
  padding-top: 20px
  
</style>
