import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components/native";
import { Highlight } from "../../components/Highlight";
import { ListItem } from "../../components/ListItem";
import { Container, Title, TitleContainer, WrapperInput } from "./styles";
import { FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";

type Participant = {
  id: string;
  name: string;
};

const participants: Participant[] = [
  { id: "1", name: "Rodolfo Gonçalves" },
  { id: "2", name: "Rodolfo Gonçalves" },
  { id: "3", name: "Rodolfo Gonçalves" },
  { id: "4", name: "Rodolfo Gonçalves" },
  { id: "5", name: "Rodolfo Gonçalves" },
  { id: "6", name: "Rodolfo Gonçalves" },
  { id: "7", name: "Rodolfo Gonçalves" },
  { id: "8", name: "Rodolfo Gonçalves" },
  { id: "9", name: "Rodolfo Gonçalves" },
];

export function Participants() {
  const theme = useTheme();

  return (
    <Container>
      <Highlight
        title="Nome do evento"
        subtitle="Sexta, 4 de Novembro de 2022."
      />
      <WrapperInput>
        <InputText placeholder="Nome do participante" />
        <Button variant="GREEN_900">
          <MaterialIcons name="add" size={24} color={theme.color.WHITE} />
        </Button>
      </WrapperInput>
      <TitleContainer>
        <Title>Participantes</Title>
      </TitleContainer>
      <FlatList
        data={participants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ListItem title={item.name} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty
            text="Ninguém chegou no evento ainda? 
Adicione participantes a sua lista de presença."
          />
        }
      />
    </Container>
  );
}
