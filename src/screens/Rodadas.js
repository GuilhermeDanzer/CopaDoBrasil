import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import baseUrl from "../api/baseURL";
// import { Container } from './styles';

const Rodadas = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);
  const [fases, setFases] = useState();
  const chamaFases = async () => {
    const response = await baseUrl(`/campeonatos/${id}/fases`);
    console.log(response.data);
    return setFases(response.data);
  };
  useEffect(() => {
    chamaFases();
  }, []);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={fases}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detalhes", { fase: item.fase_id, id })
                }
              >
                {item.status === "finalizado" ? <Text>{item.nome}</Text> : null}
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default Rodadas;
