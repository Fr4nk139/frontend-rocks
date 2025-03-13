import { useEffect, useState } from "react";
import { PokeAPI } from "./pokeapiClient";

interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];

}
async function fetchData(): Promise<PokemonCard[]> {
  const data = await PokeAPI.getPokemonsList();
  const pokemons = await Promise.all(
    data.results.map((pokemon)=> { 
      return PokeAPI.getPokemonByName(pokemon.name);
    }));
  
   return pokemons.map((pokemon) => {
    return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_shiny ?? "",
    types: pokemon.types.map((t) => t.type.name),
  };
});
}
const typeColors: {[key: string]: string} = {
  fire: "bg-red-500 rounded-lg w-18 h-10 text-center font-bold text-white",
  water: "bg-blue-500 rounded-lg w-18 h-10 text-center font-bold text-white",
  poison: "bg-purple-600 rounded-lg w-18 h-10 text-center font-bold text-white",
  flying: "bg-sky-300 rounded-lg w-18 h-10 text-center font-bold text-white" ,
  grass: "bg-green-500 rounded-lg w-18 h-10 text-center font-bold text-white",
  bug: "bg-lime-500 rounded-lg w-18 h-10 text-center font-bold text-white",
  normal: "bg-gray-400 rounded-lg w-18 h-10 text-center font-bold text-white",
  fighting: "bg-amber-800 rounded-lg w-18 h-10 text-center font-bold text-white",
  eletric: "bg-yellow-300 rounded-lg w-18 h-10 text-center font-bold text-white",
  ground: "bg-yellow-900 rounded-lg w-18 h-10 text-center font-bold text-white",
  psychic: "bg-fuchsia-400 rounded-lg w-18 h-10 text-center font-bold text-white",
  rock: "bg-grey-500 rounded-lg w-18 h-10 text-center font-bold text-white",
  ice: "bg-blue-300 rounded-lg w-18 h-10 text-center font-bold text-white",
  dragon: "bg-teal-400 rounded-lg w-18 h-10 text-center font-bold text-white",
  ghost: "bg-purple-400 rounded-lg w-18 h-10 text-center font-bold text-white",
};
function getColoreTipo(type: string){
  return typeColors[type];
}
interface CardProps{
  id: number;
  image: string;
  name: string;
  types: string[];
}
const Card = (props: CardProps) => {
  return (
    <div className="bg-white w-2xs rounded-lg">
      {props.id} - {props.name}
      <img src = {props.image}/>
      <div className="flex flex-wrap ">
      {props.types.map((type) => {
        return (
          <div className={`p-2 mx-3 ${getColoreTipo(type)}`}>
            {type}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export const App = () => {
  const [data, setData] = useState<PokemonCard[]>([]);
  
useEffect(() => {
fetchData().then((result) =>{
setData(
  result.map((item) => ({
       id: item.id,
       name: item.name,
       image: item.image,
        types: item.types,
       }))
      );
    });
  }, []);
  return <div >
    <div  className="flex flex-wrap gap-4 p-4">
      {data.map((item) =>{
          return <Card  id={item.id} name={item.name} image={item.image} types = {item.types}/>
      }
    )}
    </div>
  </div>
}
export const Detail = () => {
  return null
}