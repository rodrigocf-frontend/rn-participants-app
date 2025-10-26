import "@emotion/native";
import theme from "../themes";

declare module "@emotion/react" {
  type ThemeApp = typeof theme;

  export interface Theme extends ThemeApp {}
}
