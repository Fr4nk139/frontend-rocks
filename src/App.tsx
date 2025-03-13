

interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];

}

const data = [
  {
    id: 1, 
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
    types: ["grass", "poison"]
  },

  {
    id: 2, 
    name: "Ivysaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png",
    types: ["grass", "poison"]
  },

  {
    id: 3, 
    name: "Venusaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png",
    types: ["grass", "poison"]
  },
  {
    id: 4, 
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png",
    types: ["fire"]
  },
  {
    id: 5, 
    name: "Charmeleon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png",
    types: ["fire"]
  },
  {
    id: 6, 
    name: "Charizard",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png",
    types: ["fire", "flying"]
  },
  {
    id: 7, 
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png",
    types: ["water"]
  },
  {
    id: 8, 
    name: "Wartortle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png",
    types: ["water"]
  },
  {
    id: 9, 
    name: "Blastoise",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png",
    types: ["water"]
  },
  {
    id: 10, 
    name: "Caterpie",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png",
    types: ["bug"]
  },
  {
    id: 11, 
    name: "Metapod",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/11.png",
    types: ["bug"]
  },
  {
    id: 12, 
    name: "Butterfree",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/12.png",
    types: ["bug", "flying"]
  },
  {
    id: 13, 
    name: "Weedle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/13.png",
    types: ["bug", "poison"]
  },
  {
    id: 14, 
    name: "Kakuna",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/14.png",
    types: ["bug", "poison"]
  },
  {
    id: 15, 
    name: "Beedrill",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png",
    types: ["bug", "poison"]
  },
  {
    id: 16, 
    name: "Pidgey",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/16.png",
    types: ["normal", "flying"]
  },
  {
    id: 17, 
    name: "Pidgeotto",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png",
    types: ["normal", "flying"]
  },

];
const typeColors: {[key: string]: string} = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  poison: "bg-purple-600",
  flying: "bg-sky-300",
  grass: "bg-green-500",
  bug: "bg-lime-500",
  normal: "bg-gray-400",
  fighting: "bg-amber-800",
  eletric: "bg-yellow-300",
  ground: "bg-yellow-900",
  psychic: "bg-fuchsia-400",
  rock: "bg-grey-500",
  ice: "bg-blue-300",
  dragon: "bg-teal-400",
  ghost: "bg-purple-400",
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
    <div className="bg-white w-2xs">
      {props.id} - {props.name}
      <img src = {props.image}/>
      <div className="flex flex-row gap-4">
      {props.types.map((type) => {
        return (
          <div className={`p-3 mx-3 ${getColoreTipo(type)}`}>
            {type}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export const App = () => {
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