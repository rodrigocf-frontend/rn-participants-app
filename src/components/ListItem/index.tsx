import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../Button";
import { Container, Subtitle, Title, Wrapper } from "./styles";
import { useTheme } from "styled-components/native";
import { PressableProps } from "react-native";

interface Props {
  title: string;
  subtitle?: string;
}

export function ListItem({ subtitle, title, ...args }: Props & PressableProps) {
  const theme = useTheme();

  return (
    <Container {...args}>
      <Wrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Wrapper>
      <Button variant="RED_900">
        <MaterialIcons name="remove" size={24} color={theme.color.WHITE} />
      </Button>
    </Container>
  );
}
