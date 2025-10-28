import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../Button";
import { Container, Subtitle, Title, Wrapper } from "./styles";
import { useTheme } from "styled-components/native";
import { Alert, PressableProps } from "react-native";

interface Props {
  title: string;
  subtitle?: string;
  onRemove: () => void;
}

export function ListItem({
  subtitle,
  title,
  onRemove,
  ...args
}: Props & PressableProps) {
  const theme = useTheme();

  const uiTitle = title.length >= 31 ? title.slice(0, 30).concat("...") : title;

  const handleRemoveAlert = () => {
    return Alert.alert("Remover", `Remover ${title}?`, [
      {
        text: "Sim",
        onPress: () => onRemove(),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  return (
    <Container {...args}>
      <Wrapper>
        <Title>{uiTitle}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Wrapper>
      <Button variant="RED_900" onPress={handleRemoveAlert}>
        <MaterialIcons name="remove" size={24} color={theme.color.WHITE} />
      </Button>
    </Container>
  );
}
