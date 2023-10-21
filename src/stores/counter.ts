import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const chosenPokemon = ref();

    return{chosenPokemon}
});
