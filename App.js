import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={[ '#34e0329', '#ddb52f' ]} style={styles.screen}>
      <StartGameScreen />
      </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
