import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import baseUrl from "../api/baseURL";
// import { Container } from './styles';

const Detalhes = ({ route }) => {
  const { id, fase } = route.params;
  const [faseAtual, setFaseAtual] = useState();
  const chamaFase = async () => {
    const response = await baseUrl(`/campeonatos/${id}/fases/${fase}`);
    return setFaseAtual(response.data);
  };
  useEffect(() => {
    chamaFase();
  }, []);

  return (
    <View>
      {faseAtual ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={faseAtual.chaves}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <>
                <Text>{item.partida_ida.placar}</Text>
              </>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default Detalhes;
