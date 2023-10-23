<script setup lang="ts">
import explorador from '../components/TheWelcome.vue'
import type { myPokemonInfo } from '../router/myPokemonInfo'
import  getPokemon  from '../router/services'
import { onMounted } from 'vue';
import { useCounterStore } from '../stores/counter'

const pokemon_count:number = 100;

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

let poke_container:any;
let poke_array:myPokemonInfo[]=[];
var poke_array1:myPokemonInfo[]=[];

async function CreateArray():Promise<myPokemonInfo[]>{

for(let i=1; i<=pokemon_count; i++){
  try{    
    poke_array[i-1] = await getPokemon(i.toString());
  }
  catch(error){
    console.log(error);
  }		
}
return poke_array.sort( (a,b) => a.id - b.id );
}

function createCard(data:myPokemonInfo){
	let each_pokemon=poke_container.appendChild(document.createElement("div"));
		each_pokemon.classList.add("pokemon");
		
		let pok_type:string=(data.type)[0];
    
		each_pokemon.style.backgroundColor=colors[pok_type];

		let each_pokemon__div_img=each_pokemon.appendChild(document.createElement("div"));
			each_pokemon__div_img.classList.add("img-container");
		let each_pokemon__div_img_img = each_pokemon__div_img.appendChild(document.createElement("img"));
			each_pokemon__div_img_img.src=data.image;

		let each_pokemon__div_info=each_pokemon.appendChild(document.createElement("div"));
			each_pokemon__div_info.classList.add("info");
		let each_pokemon__div_info_span=each_pokemon__div_info.appendChild(document.createElement("span"));
			each_pokemon__div_info_span.classList.add("number");
			each_pokemon__div_info_span.textContent=data.id.toString();
		let each_pokemon__div_info_h3=each_pokemon__div_info.appendChild(document.createElement("h3"));
			each_pokemon__div_info_h3.classList.add("name");
			each_pokemon__div_info_h3.textContent=data.name;
		let each_pokemon__div_info_small=each_pokemon__div_info.appendChild(document.createElement("small"));
			each_pokemon__div_info_small.classList.add("type");
			each_pokemon__div_info_small.innerHTML=`Tipo: <span>${pok_type}</span>`;

      each_pokemon.addEventListener("click",(event:Event) => explorePokemon(event), false);
}

//Esta funcion almacena el id del pokemon en pinia para buscarlo despues.
function explorePokemon(event:Event){

  let selectedPokemon=event.currentTarget as HTMLElement;   
//   let numberOfSelectedPokemon: number | null = selectedPokemon ? (selectedPokemon.getElementsByClassName("number")[0]!.innerText as unknown as number) : null;
	let numberOfSelectedPokemon: number | null = null;
	let numberElement = selectedPokemon instanceof HTMLElement ? selectedPokemon.getElementsByClassName("number")[0] as HTMLElement : null;
	if (numberElement) {
	numberOfSelectedPokemon = parseInt(numberElement.innerText);
	}

  const myStore=useCounterStore();
  myStore.chosenPokemon=numberOfSelectedPokemon;
}

onMounted(async() => {   
  poke_array1 = await CreateArray();
  poke_container=document.getElementById('poke-container');
  //console.log(poke_array1); 
  poke_array1.forEach(y => createCard(y));
})
</script>

<template>
  <main>
    
    <div id="poke-container">
      
    </div>

    <explorador/>

    
  </main>
</template>

<style lang="scss" scoped>
main{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6vh;

  div{
  width: 40vw;
  flex-wrap: wrap;
  }

}


</style>
