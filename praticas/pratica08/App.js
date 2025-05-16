import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginScreen></LoginScreen>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
