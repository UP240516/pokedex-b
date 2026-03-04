import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResult] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    setResult(data.results);
    console.log(data);
  };
  return (
    <View>
      {results.map((pokemon) => (
        <Text key={pokemon.name}>{pokemon.name} </Text>
      ))}
    </View>
  );
}
