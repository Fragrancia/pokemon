import { useState, useEffect } from "react"

export default function Pokedex(){
    const [id, setId] = useState(1);
    const[pokemon, setPokemon] = useState(null)

    const fetchData = async () => {//função assicronada para encontrar dados e conectar a API
        try{
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json();
            setPokemon(data)
        
        }catch(error){
            console.error('Error: ', error);
        }
        
    }
    useEffect(() => {
        fetchData()
    }, [id])

    const nextPokemon = () =>{
        setId(id + 1 )
    }

    return(
        <div>
            {pokemon &&(
                <div className="pokemon">
                     <h1>Pokemon</h1>
                     <p>{pokemon.name}</p> 
                     <p>Peso :{pokemon.weight}</p>
                    <img src={pokemon.sprites.front_default} alt="Pokemon"/>
                     <button onClick={nextPokemon}> Próximo</button>
                </div>
            
            )}
           
        </div>
    )
}