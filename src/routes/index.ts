import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigatorScreenParams,
  StaticParamList,
  StaticScreenProps,
  createStaticNavigation,
} from "@react-navigation/native";
import { Home } from "../screen/Home";
import { Participants } from "../screen/Participants";
import { theme } from "../themes";

export const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    Participants: {
      options: {
        headerShadowVisible: false,
        headerTintColor: theme.color.GRAY_100,
        headerStyle: {
          backgroundColor: theme.color.GRAY_400,
        },
      },
      screen: Participants,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
