<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import myAxios from './services/axiosService';
import { onBeforeMount, ref, watch, onUpdated } from 'vue'

const myChosenPokemon=ref();
const myStore=useCounterStore();

const colors:any = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

onBeforeMount(async() => {
  //console.log(myStore.chosenPokemon);
  // myChosenPokemon.value=(await myAxios("1")).data;
  // console.log(myChosenPokemon.value);
})

watch(myStore, async()=>{
  if(myStore.chosenPokemon){
    myChosenPokemon.value=(await myAxios(myStore.chosenPokemon)).data;
    //console.log(myChosenPokemon.value);
  }  
})

onUpdated(() => {
  // document.getElementById("detailPokemon").setAttribute("style", "background-Color:"+colors[myChosenPokemon.value.types[0].type.name]);
  const detailPokemonElement = document.getElementById("detailPokemon")!;
  detailPokemonElement.setAttribute("style", "background-Color:" + colors[myChosenPokemon.value.types[0].type.name]);

})

</script>

<template>
  <section id="detailPokemon" v-if="myChosenPokemon">
    <img  
    :alt="myChosenPokemon.name" 
    :src="myChosenPokemon.sprites.other['official-artwork']['front_default']"/>
    <article>
      <p>Nombre: <span>{{ (myChosenPokemon.name).toUpperCase() }}</span></p>
      <div>
        <p v-if="((myChosenPokemon.height)/10)>1">Altura: <span>{{ (myChosenPokemon.height)/10 }}</span> metros</p>
        <p v-else-if="((myChosenPokemon.height)/10)===1">Altura: <span>{{ (myChosenPokemon.height)/10 }}</span> metro</p>
        <p v-else>Altura: <span>{{ (myChosenPokemon.height)*10 }}</span> centimetros</p>
      
        <p>Peso: <span>{{ (myChosenPokemon.weight)/10 }}</span> Kilogramos</p>
      </div>

      <p>Tipo: <span v-for="eachType in myChosenPokemon.types" :key="eachType.type.name">{{ (eachType.type.name+"&emsp;") }}</span></p>
      <p>Habilidades: <span v-for="eachAbility in myChosenPokemon.abilities" :key="eachAbility.ability.name">{{ (eachAbility.ability.name+"&emsp;") }}</span></p>
    </article>
  </section>
  <section id="detailPokemon" v-else>
    <img id="fotoPrimos" src="../assets/Images/primos.png"/>
  </section>
  
</template>

<style lang="scss" scoped>

#detailPokemon{
  background-color: bisque;
  position:fixed;
  right: 4vw;
  width: 35vw;
  height: fit-content;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 2vw;
  
  #fotoPrimos{
    width:100%;
    border:5px solid black;
    border-radius: 15px;
  }

  img{
    width: 90%;
  }

  div{
    display:flex;
    flex-direction: row;
    column-gap: 2vw;
    flex-wrap: wrap;
  }

  p{
    border:1px solid black;
    width: fit-content;
    max-width: 40vw;
    border-radius: 5px;
    padding: 0.5vh 1vw;
    margin: 1vh auto;
    background-color: antiquewhite;
    text-wrap: balance;
    color: black;

    span{
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}

</style>
