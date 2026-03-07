import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/")[6];
  const PokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: PokemonImageUrl }}
        style={{ width: 100, height: 100 }}
      ></Image>

      <Text>{props.name} </Text>
      <Text>{props.url} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
