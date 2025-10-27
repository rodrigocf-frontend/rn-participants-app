import { DefaultTheme, Theme } from "@react-navigation/native";
import "styled-components/native";
import { theme } from "../themes";

declare module "styled-components/native" {
  export interface DefaultTheme {
    color: {
      WHITE: string;
      GRAY_100: string;
      GRAY_200: string;
      GRAY_300: string;
      GRAY_400: string;
      RED_900: string;
      GREEN_900: string;
    };
    fontFamily: {
      ROBOTO_REGULAR: string;
      ROBOTO_BOLD: string;
    };
    fontSize: {
      XSM: string;
      SM: string;
      NM: string;
      MD: string;
      LG: string;
    };
  }

  type AppColors = keyof typeof theme.color;
}
