import { PropsWithChildren } from "react";
import { EventsProvider } from "./EventsProvider";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../themes";

export function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <ThemeProvider theme={theme}>
      <EventsProvider>{children}</EventsProvider>
    </ThemeProvider>
  );
}
