import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Campeonatos from "./src/screens/Campeonatos";
import Detalhes from "./src/screens/Detalhes";
import Rodadas from "./src/screens/Rodadas";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Campeonatos" component={Campeonatos} />
        <Stack.Screen name="Rodadas" component={Rodadas} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
