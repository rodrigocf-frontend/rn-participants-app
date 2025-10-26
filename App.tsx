import { ThemeProvider } from "@emotion/react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import theme from "./src/themes";
import { Container, Title } from "./styles";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Navigation } from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Navigation /> : <></>}
    </ThemeProvider>
  );
}
