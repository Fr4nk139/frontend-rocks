

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
]
export const App = () => {
  return <div >
    <div  className="flex flex-row">
      {data.map((item) =>{
        return (
          <div>
            {item.id} - {item.name}
            <img src = {item.image}/>

            
      
          </div>
        )
      }
    )}
    </div>
  </div>
}
export const Detail = () => {
  return null
}