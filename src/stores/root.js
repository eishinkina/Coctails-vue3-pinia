import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENS_URL, COCKTAILS_BY_INGR_URL } from "../constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    cocktails: [],
    ingredient: null,
  }),
  actions: {
    async getIngredients() {
      try {
        const response = await axios.get(INGREDIENS_URL);
        this.ingredients = response.data?.drinks ?? [];
      } catch (error) {
        console.error("Ошибка при получении ингредиентов:", error);
        this.ingredients = [];
      }
    },
    async getCocktails(ingredient) {
      try {
        const response = await axios.get(
          `${COCKTAILS_BY_INGR_URL}${ingredient}`
        );
        this.cocktails = response.data?.drinks ?? [];
      } catch (error) {
        console.error("Ошибка при получении коктейлей:", error);
        this.cocktails = [];
      }
    },
    setIngredient(val) {
      this.ingredient = val;
    },
  },
});
