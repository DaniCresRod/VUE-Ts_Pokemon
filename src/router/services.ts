import type { myPokemonInfo } from "./myPokemonInfo";

export default async function getPokemon(searchArg:string):Promise<any>{

    const searchString:string="https://pokeapi.co/api/v2/pokemon/";

    try{
        const response:any=await fetch(searchString+searchArg);
        const data:any=await response.json();

        //console.log(data);
        const pokemonTypes:string[]=[];

        for(let i=0; i<data.types.length;i++){
            pokemonTypes.push(data.types[i].type.name)
        }

        const pokemonAbilities:string[]=[];

        for(let i=0; i<data.abilities.length;i++){
            pokemonAbilities.push(data.abilities[i].ability.name)
        }

        const eachPokemon:myPokemonInfo= await {
            name: data.name,
            height: data.height,
            weight: data.weight,
            image: data.sprites.other["official-artwork"]["front_default"],
            id: data.id,
            type: pokemonTypes,
            abilities: pokemonAbilities,
        }

        return eachPokemon;
    }
    catch(error:any){
        console.log(error);
        return 404;        
    }        
}

