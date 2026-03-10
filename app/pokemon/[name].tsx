import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PokemonData() {
  const parens = useLocalSearchParams();
  return (
    <View>
      <Text>{parens.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
