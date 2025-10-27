import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components/native";
import { Highlight } from "../../components/Highlight";
import { ListItem } from "../../components/ListItem";
import {
  Container,
  DateContainer,
  Title,
  TitleContainer,
  WrapperInput,
} from "./styles";
import { FlatList } from "react-native";
import { InputDate } from "../../components/InputDate";
import { useNavigation } from "@react-navigation/native";
import { ListEmpty } from "../../components/ListEmpty";

type Event = {
  id: string;
  name: string;
  date: string;
};

const participants: Event[] = [
  // { id: "1", name: "Evento 1", date: "14/02/2025" },
  // { id: "2", name: "Evento 1", date: "14/02/2025" },
  // { id: "3", name: "Evento 1", date: "14/02/2025" },
  // { id: "4", name: "Evento 1", date: "14/02/2025" },
  // { id: "5", name: "Evento 1", date: "14/02/2025" },
  // { id: "6", name: "Evento 1", date: "14/02/2025" },
  // { id: "7", name: "Evento 1", date: "14/02/2025" },
  // { id: "8", name: "Evento 1", date: "14/02/2025" },
  // { id: "9", name: "Evento 1", date: "14/02/2025" },
];

export function Home() {
  const theme = useTheme();

  const navigation = useNavigation();

  return (
    <Container>
      <Highlight title="Cadastrar evento" />
      <WrapperInput>
        <InputText placeholder="Nome do evento" />
        <Button variant="GREEN_900">
          <MaterialIcons name="add" size={24} color={theme.color.WHITE} />
        </Button>
      </WrapperInput>
      <DateContainer>
        <InputDate />
      </DateContainer>
      <TitleContainer>
        <Title>Eventos</Title>
      </TitleContainer>
      <FlatList
        data={participants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate("Participants")}
            title={item.name}
            subtitle={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty
            text="Nenhum evento criado ainda? 
Adicione eventos a sua lista."
          />
        }
      />
    </Container>
  );
}
