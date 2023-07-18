<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type { myPokemonInfo } from './router/myPokemonInfo'
import  getPokemon  from './router/services'
import { onMounted } from 'vue';


let poke_container:any;
onMounted(() => {
  poke_container = document.getElementById('poke-container')!;
})

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

let poke_array:myPokemonInfo[]=[];
let poke_array1:myPokemonInfo[]=[];

async function CreateArray():Promise<myPokemonInfo[]>{

for(let i=1; i<=pokemon_count; i++){
  try{
    
    poke_array[i-1] = await getPokemon(i.toString());

    //console.log(poke_array[i-1]);

    //createCard(poke_array[i-1]); 

  }
  catch(error){
    console.log(error);
  }		
}


//console.log(poke_array.sort( (a,b) => a.id - b.id ));
return poke_array.sort( (a,b) => a.id - b.id );
}

poke_array1 = await CreateArray();

poke_array1.forEach(y=>{createCard(y)});


function createCard(data:myPokemonInfo){
  console.log(poke_container);
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
		let each_pokemon__div_info_small=each_pokemon.appendChild(document.createElement("small"));
			each_pokemon__div_info_small.classList.add("type");
			each_pokemon__div_info_small.innerHTML=`Type: <span>${pok_type}</span>`;
}




</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">PokeDesk</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;

  background: yellow;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: right;
  margin-top: 2rem;

  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a { 
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type { 
  border: 0;
  
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper { 
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav { 
    
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
./router/myPokemonInfo@/router/services