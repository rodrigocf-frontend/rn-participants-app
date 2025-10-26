import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { Participants } from "../screen/Participants";
import { createStaticNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Participants: Participants,
  },

  screenOptions: {},
});

export const Navigation = createStaticNavigation(RootStack);
