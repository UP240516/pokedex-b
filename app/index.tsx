import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function Index() {
  const [results, setResult] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    setResult(data.results);
    console.log(response);
  };
  return (
    <ScrollView>
      {results.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        ></PokemonCard>
      ))}
    </ScrollView>
  );
}
