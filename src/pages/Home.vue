<script setup>
import AppLayout from "@/components/AppLayout.vue";
import CocktailsTrumbs from "@/components/CocktailsTrumbs.vue";
import { ref } from "vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
const rootStore = useRootStore();
rootStore.getIngredients();
const { ingredients, cocktails } = storeToRefs(rootStore);

const ingredient = ref(null);

function getCocktails() {
  rootStore.getCocktails(ingredient.value);
}
</script>

<template>
  <div>
    <AppLayout imgUrl="/src/assets/img/bg1.jpeg">
      <div class="wrapper">
        <div class="info" v-if="!ingredient || !cocktails">
          <div class="title">Выберите свой напиток</div>
          <div class="line"></div>
          <div class="select-wrapper">
            <el-select
              v-model="ingredient"
              placeholder="Выберите ингредиент"
              size="large"
              class="select"
              @change="getCocktails"
            >
              <el-option
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
              />
            </el-select>
          </div>
          <div class="text">
            Попробуйте наши вкусные рецепты коктейлей на любой случай. Найдите
            вкусные рецепты коктейлей по ингредиентам с помощью нашего
            генератора коктейлей.
          </div>
          <img src="./../assets/img/coctails.png" alt="coctails" class="img" />
        </div>
        <div class="info" v-else>
          <div class="title">КОКТЕЙЛИ С {{ ingredient }}</div>
          <div class="line"></div>
          <div class="cocktails">
            <CocktailsTrumbs
              v-for="cocktail in cocktails"
              :key="cocktail.idDrink"
              :cocktail="cocktail"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.wrapper
  display: flex
  align-items: center
  justify-content: center

.info
  padding: 80px 0
  text-align: center

.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.img
  margin-top: 60px

.cocktails
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  align-items: center
  margin-top: 60px
  max-height: 400px
  overflow-y: auto
</style>
