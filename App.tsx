import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Navigation } from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { Providers } from "./src/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  return (
    <Providers>
      {fontsLoaded ? <Navigation /> : <></>}
      <StatusBar style="light" />
    </Providers>
  );
}
